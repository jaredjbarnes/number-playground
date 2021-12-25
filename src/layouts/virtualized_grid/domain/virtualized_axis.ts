import { binarySearch } from "./binary_search";
import { Factory } from "./factory";

export interface CustomSize {
  index: number;
  size: number;
}

export interface Index {
  index: number;
  start: number;
  end: number;
}

interface Region {
  startIndex: number;
  endIndex: number; // Exclusive
  start: number;
  end: number;
  size: number;
}

export class VirtualizedAxis {
  private defaultIndexSize: number;
  private customSizesMap: { [key: number]: CustomSize } = {};
  private length: number = 0;
  private regions: Region[] = [];
  private indexes: Index[] = [];
  private size = 0;
  private indexFactory = new Factory<Index>(() => {
    return {
      index: 0,
      start: 0,
      end: 0,
    };
  });

  constructor(defaultIndexSize: number, length: number) {
    if (defaultIndexSize === 0) {
      throw new Error("Default size cannot be 0.");
    }

    this.defaultIndexSize = defaultIndexSize;
    this.length = length;
    this.generateRegions();
  }

  setDefaultSize(size: number) {
    if (size === 0) {
      throw new Error("Default size cannot be 0.");
    }

    this.defaultIndexSize = size;
    this.generateRegions();
  }

  setCustomSize(index: number, size: number) {
    let customSize = this.customSizesMap[index];

    if (customSize != null) {
      if (customSize.size === this.defaultIndexSize) {
        delete this.customSizesMap[index];
      } else {
        customSize.size = size;
      }
    } else {
      if (size !== this.defaultIndexSize) {
        this.customSizesMap[index] = { index, size };
      }
    }

    this.generateRegions();
  }

  getCustomSize(index: number) {
    return this.customSizesMap[index]?.size || null;
  }

  private generateRegions() {
    let lastIndex = 0;
    let last = 0;
    this.regions.length = 0;

    const keys = Object.keys(this.customSizesMap);

    for (let x = 0; x < keys.length; x++) {
      const customSize = this.customSizesMap[Number(keys[x])];
      const startIndex = lastIndex;
      let index = customSize.index;

      if (index - startIndex > 0) {
        const end = (index - startIndex) * this.defaultIndexSize + last;
        const gap = {
          startIndex,
          endIndex: index,
          size: this.defaultIndexSize,
          start: last,
          end,
        };
        last = end;
        this.regions.push(gap);
      }

      const end = last + customSize.size;
      const endIndex = index + 1;

      this.regions.push({
        startIndex: customSize.index,
        endIndex,
        size: customSize.size,
        start: last,
        end,
      });

      lastIndex = endIndex;
      last = end;
    }

    if (lastIndex < this.length) {
      const end = last + (this.length - lastIndex) * this.defaultIndexSize;

      this.regions.push({
        startIndex: lastIndex,
        endIndex: this.length,
        size: this.defaultIndexSize,
        start: last,
        end,
      });

      last = end;
    }

    this.size = last;
  }

  private findRegionIn(at: Region, position: number) {
    if (position < at.start) {
      return -1;
    } else if (position > at.end) {
      return 1;
    } else {
      return 0;
    }
  }

  getIndexesWithinRange(start: number, end: number) {
    this.indexes.length = 0;
    this.indexFactory.releaseAll();

    if (this.regions.length === 0) {
      return this.indexes;
    }

    const startRegionIndex = Math.max(
      binarySearch(this.regions, start, this.findRegionIn),
      0
    );
    const endRegionIndex = Math.max(
      binarySearch(this.regions, end, this.findRegionIn),
      startRegionIndex
    );

    for (let x = startRegionIndex; x <= endRegionIndex; x++) {
      const region = this.regions[x];

      const startIndex = Math.max(
        Math.floor((start - region.start) / region.size),
        0
      );

      const endIndex = Math.min(
        Math.ceil((end - region.start) / region.size),
        region.endIndex - region.startIndex
      );

      for (let index = startIndex; index < endIndex; index++) {
        const start = index * region.size + region.start;
        const end = start + region.size;

        const result = this.indexFactory.useInstance();
        result.index = index + region.startIndex;
        result.start = start;
        result.end = end;

        if (index >= 0) {
          this.indexes.push(result);
        }
      }
    }

    return this.indexes;
  }

  setLength(length: number) {
    this.length = length;
    this.generateRegions();
  }

  getSize() {
    return this.size;
  }
}
