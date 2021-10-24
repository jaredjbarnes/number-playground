import { Domain, StateLike } from "../../../hex/domain";
import { ObservableValue } from "../../../hex/ObservableValue";
import { Factory } from "../../virtualized_grid/domain/factory";
import {
  Index,
  VirtualizedAxis,
} from "../../virtualized_grid/domain/virtualized_axis";

export interface Item extends Index {
  offset: number;
}

interface VirtualizedListState extends StateLike {
  items: ObservableValue<Item[]>;
  headerHeight: ObservableValue<number>;
  footerHeight: ObservableValue<number>;
}

export class VirtualizedListDomain extends Domain<VirtualizedListState> {
  private viewport = {
    top: 0,
    bottom: 0,
  };

  private virtualAxis: VirtualizedAxis;
  private estimatedSize: number;
  private factory = new Factory<Item>(() => {
    return {
      index: 0,
      start: 0,
      end: 0,
      offset: 0,
    };
  });

  constructor(estimatedSize: number, length: number) {
    super({
      items: new ObservableValue<Item[]>([]),
      headerHeight: new ObservableValue(0),
      footerHeight: new ObservableValue(0),
    });
    this.estimatedSize = estimatedSize;
    this.virtualAxis = new VirtualizedAxis(estimatedSize, length);
  }

  private update() {
    this.factory.releaseAll();

    const headerHeight = this.state.headerHeight.getValue();
    const indexes = this.virtualAxis.getIndexesWithinRange(
      this.viewport.top,
      this.viewport.bottom
    );

    this.state.items.transformValue((items) => {
      items.length = 0;

      for (let x = 0; x < indexes.length; x++) {
        const index = indexes[x];
        const item = this.factory.useInstance();

        item.index = index.index;
        item.start = index.start;
        item.end = index.end;
        item.offset = headerHeight;

        items.push(item);
      }

      return items;
    });
  }

  updateViewport(top: number, bottom: number) {
    if (top !== this.viewport.top || bottom !== this.viewport.bottom) {
      this.viewport.top = top;
      this.viewport.bottom = bottom;
      this.update();
    }
  }

  setItemHeight(index: number, height: number) {
    const size = this.virtualAxis.getCustomSize(index);
    if (size !== height) {
      this.virtualAxis.setCustomSize(index, height);
      this.update();
    }
  }

  getItemHeight(index: number) {
    return this.virtualAxis.getCustomSize(index) || this.estimatedSize;
  }

  setHeaderHeight(value: number) {
    if (this.state.headerHeight.getValue() !== value) {
      this.state.headerHeight.setValue(value);
      this.update();
    }
  }

  setFooterHeight(value: number) {
    if (this.state.footerHeight.getValue() !== value) {
      this.state.footerHeight.setValue(value);
      this.update();
    }
  }

  getHeight() {
    return this.virtualAxis.getSize();
  }

  dispose() {
    super.dispose();
  }
}
