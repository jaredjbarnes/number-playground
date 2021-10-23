import { Domain, StateLike } from "../../../hex/domain";
import { ObservableValue } from "../../../hex/ObservableValue";
import { Factory } from "../../virtualized_grid/domain/factory";
import {
  Index,
  VirtualizedAxis,
} from "../../virtualized_grid/domain/virtualized_axis";
import { DebounceRunner } from "../../../utils/debounce_runner";

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
  private debouncer: DebounceRunner<void>;
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
    this.virtualAxis = new VirtualizedAxis(estimatedSize, length);
    this.debouncer = new DebounceRunner<void>(undefined, 16);
    this.debouncer.runner.onChange(() => {
      this.updateVisibleItems();
    });
  }

  private updateVisibleItems() {
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

  update() {
    this.debouncer.hit();
  }

  setItemHeight(index: number, height: number) {
    const size = this.virtualAxis.getSizeForIndex(index);
    if (size !== height) {
      this.virtualAxis.setCustomSize(index, height);
      this.update();
    }
  }

  setHeaderHeight(value: number) {
    this.state.headerHeight.setValue(value);
    this.update();
  }

  setFooterHeight(value: number) {
    this.state.footerHeight.setValue(value);
    this.update();
  }

  getHeight() {
    return this.virtualAxis.getSize();
  }

  dispose() {
    super.dispose();
    this.debouncer.dispose();
  }
}
