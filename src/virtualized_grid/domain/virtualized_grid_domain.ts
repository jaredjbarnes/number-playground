import { Domain, StateLike } from "../../hex/domain";
import { ObservableValue } from "../../hex/ObservableValue";
import { DynamicAxis, Index } from "./dynamic_axis";
import { Factory } from "./factory";
export type { Index } from "./dynamic_axis";

export interface Cell<T> {
  rowIndex: number;
  columnIndex: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
  value: T | null;
  columnHeaderHeight: number;
  rowHeaderWidth: number;
}

export interface Header<T> extends Index {
  value: T | null;
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
  offset: number;
}

interface VirtualizedGridState<TRender, TRenderColumnHeader, TRenderRowHeader>
  extends StateLike {
  cells: ObservableValue<Cell<TRender>[]>;
  columnHeaders: ObservableValue<Header<TRenderColumnHeader>[]>;
  rowHeaders: ObservableValue<Header<TRenderRowHeader>[]>;
  rowHeaderWidth: ObservableValue<number>;
  columnHeaderHeight: ObservableValue<number>;
}

interface VirtualizedGridOptions<
  TRender,
  TRenderColumnHeader,
  TRenderRowHeader
> {
  renderCell: (cell: Cell<TRender>) => TRender;
  renderColumnHeader: (
    header: Header<TRenderColumnHeader>
  ) => TRenderColumnHeader;
  renderRowHeader: (header: Header<TRenderRowHeader>) => TRenderRowHeader;
}

export class VirtualizedGridDomain<
  TRender,
  TRenderColumnHeader,
  TRenderRowHeader
> extends Domain<
  VirtualizedGridState<TRender, TRenderColumnHeader, TRenderRowHeader>
> {
  private columnAxis = new DynamicAxis(50, 0);
  private rowAxis = new DynamicAxis(50, 0);
  private cellsFactory = new Factory<Cell<TRender>>(() => ({
    rowIndex: 0,
    columnIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    columnHeaderHeight: 0,
    rowHeaderWidth: 0,
    value: null,
  }));

  private columnsHeadersFactory = new Factory<Header<TRenderColumnHeader>>(
    () => ({
      index: 0,
      start: 0,
      end: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
      offset: 0,
      value: null,
    })
  );

  private rowHeadersFactory = new Factory<Header<TRenderRowHeader>>(() => ({
    index: 0,
    start: 0,
    end: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    offset: 0,
    value: null,
  }));

  private viewport = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  private renderCell: (cell: Cell<TRender>) => TRender;
  private renderColumnHeader: (
    header: Header<TRenderColumnHeader>
  ) => TRenderColumnHeader;
  private renderRowHeader: (
    header: Header<TRenderRowHeader>
  ) => TRenderRowHeader;

  constructor(
    options: VirtualizedGridOptions<
      TRender,
      TRenderColumnHeader,
      TRenderRowHeader
    >
  ) {
    super({
      cells: new ObservableValue<Cell<TRender>[]>([]),
      columnHeaders: new ObservableValue<Header<TRenderColumnHeader>[]>([]),
      rowHeaders: new ObservableValue<Header<TRenderRowHeader>[]>([]),
      rowHeaderWidth: new ObservableValue(0),
      columnHeaderHeight: new ObservableValue(0),
    });
    this.renderCell = options.renderCell;
    this.renderColumnHeader = options.renderColumnHeader;
    this.renderRowHeader = options.renderRowHeader;
  }

  setViewport(top: number, right: number, bottom: number, left: number) {
    // Adjust the viewport to the axises
    const columnHeaderHeight = this.state.columnHeaderHeight.getValue();
    const rowHeaderWidth = this.state.rowHeaderWidth.getValue();

    this.viewport.top = Math.max(top - columnHeaderHeight, 0);
    this.viewport.right = right - rowHeaderWidth;
    this.viewport.bottom = bottom - columnHeaderHeight;
    this.viewport.left = Math.max(left - rowHeaderWidth, 0);

    this.generateCells();
  }

  setColumnsLength(length: number) {
    this.columnAxis.setLength(length);
    this.generateCells();
  }

  private generateCells() {
    const columnHeaderHeight = this.state.columnHeaderHeight.getValue();
    const rowHeaderWidth = this.state.rowHeaderWidth.getValue();

    const columns = this.columnAxis.getIndexesWithinRange(
      this.viewport.left,
      this.viewport.right
    );
    const rows = this.rowAxis.getIndexesWithinRange(
      this.viewport.top,
      this.viewport.bottom
    );

    this.generateColumnHeaders(columns);
    this.generateRowHeaders(rows);

    this.cellsFactory.releaseAll();

    this.state.cells.transformValue((cells) => {
      cells.length = 0;

      if (columns.length > 0 && rows.length > 0) {
        for (let y = 0; y < rows.length; y++) {
          const row = rows[y];
          for (let x = 0; x < columns.length; x++) {
            const column = columns[x];
            const cell = this.cellsFactory.useInstance();
            cell.rowIndex = row.index;
            cell.columnIndex = column.index;
            cell.top = row.start;
            cell.bottom = row.end;
            cell.left = column.start;
            cell.right = column.end;
            cell.width = column.end - column.start;
            cell.height = row.end - row.start;
            cell.columnHeaderHeight = columnHeaderHeight;
            cell.rowHeaderWidth = rowHeaderWidth;
            cell.value = this.renderCell(cell);

            cells.push(cell);
          }
        }
      }

      return cells;
    });
  }

  private generateColumnHeaders(columns: Index[]) {
    const rowHeaderWidth = this.state.rowHeaderWidth.getValue();
    const columnHeaderHeight = this.state.columnHeaderHeight.getValue();

    this.columnsHeadersFactory.releaseAll();

    this.state.columnHeaders.transformValue((columnHeaders) => {
      columnHeaders.length = 0;

      columns.forEach((column) => {
        const columnHeader = this.columnsHeadersFactory.useInstance();

        columnHeader.index = column.index;
        columnHeader.start = column.start;
        columnHeader.end = column.end;
        columnHeader.top = 0;
        columnHeader.bottom = columnHeaderHeight;
        columnHeader.left = column.start;
        columnHeader.right = column.end;
        columnHeader.width = columnHeader.right - columnHeader.left;
        columnHeader.height = columnHeader.bottom - columnHeader.top;
        columnHeader.value = this.renderColumnHeader(columnHeader);
        columnHeader.offset = rowHeaderWidth;

        columnHeaders.push(columnHeader);
      });

      return columnHeaders;
    });
  }

  private generateRowHeaders(rows: Index[]) {
    const rowHeaderWidth = this.state.rowHeaderWidth.getValue();
    const columnHeaderHeight = this.state.columnHeaderHeight.getValue();

    this.rowHeadersFactory.releaseAll();

    this.state.rowHeaders.transformValue((rowHeaders) => {
      rowHeaders.length = 0;

      rows.forEach((row) => {
        const rowHeader = this.rowHeadersFactory.useInstance();

        rowHeader.index = row.index;
        rowHeader.start = row.start;
        rowHeader.end = row.end;
        rowHeader.left = 0;
        rowHeader.right = rowHeaderWidth;
        rowHeader.top = row.start;
        rowHeader.bottom = row.end;
        rowHeader.width = rowHeader.right - rowHeader.left;
        rowHeader.height = rowHeader.bottom - rowHeader.top;
        rowHeader.value = this.renderRowHeader(rowHeader);
        rowHeader.offset = columnHeaderHeight;

        rowHeaders.push(rowHeader);
      });

      return rowHeaders;
    });
  }

  setRenderCell(renderCell: (cell: Cell<TRender>) => TRender) {
    this.renderCell = renderCell;
    this.generateCells();
  }

  setRenderColumnHeader(
    renderColumnHeader: (
      header: Header<TRenderColumnHeader>
    ) => TRenderColumnHeader
  ) {
    this.renderColumnHeader = renderColumnHeader;
    this.generateCells();
  }

  setRenderRowHeader(
    renderRowHeader: (header: Header<TRenderRowHeader>) => TRenderRowHeader
  ) {
    this.renderRowHeader = renderRowHeader;
    this.generateCells();
  }

  setRowLength(length: number) {
    this.rowAxis.setLength(length);
    this.generateCells();
  }

  setColumnWidth(index: number, width: number) {
    this.columnAxis.setCustomSize(index, width);
    this.generateCells();
  }

  setRowHeight(index: number, height: number) {
    this.rowAxis.setCustomSize(index, height);
    this.generateCells();
  }

  setColumnHeaderHeight(height: number) {
    this.state.columnHeaderHeight.setValue(height);
    this.generateCells();
  }

  setRowHeaderWidth(width: number) {
    this.state.rowHeaderWidth.setValue(width);
    this.generateCells();
  }

  setDefaultRowSize(size: number) {
    this.rowAxis.setDefaultSize(size);
    this.generateCells();
  }

  setDefaultColumnSize(size: number) {
    this.columnAxis.setDefaultSize(size);
    this.generateCells();
  }

  getWidth() {
    return this.columnAxis.getSize() + this.state.rowHeaderWidth.getValue();
  }

  getHeight() {
    return this.rowAxis.getSize() + this.state.columnHeaderHeight.getValue();
  }
}
