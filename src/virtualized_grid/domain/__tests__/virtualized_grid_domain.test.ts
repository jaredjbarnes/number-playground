import { VirtualizedGridDomain, Cell, Index } from "../virtualized_grid_domain";

function renderCell(cell: Cell<string>) {
  return `(${cell.columnIndex}, ${cell.rowIndex})`;
}

function renderColumnHeader(header: Index) {
  return `${header.index}`;
}

function renderRowHeader(row: Index) {
  return `${row.index}`;
}

const options = {
  renderCell,
  renderColumnHeader,
  renderRowHeader,
};

describe("VirtualizedGridDomain", () => {
  test("No Columns and No Rows", () => {
    const grid = new VirtualizedGridDomain(options);
    grid.setViewport(0, 100, 100, 0);

    const cells = grid.broadcasts.cells.getValue();
    expect(cells.length).toBe(0);
  });

  test("100 columns 100 rows", () => {
    const grid = new VirtualizedGridDomain(options);
    grid.setColumnsLength(100);
    grid.setRowLength(100);
    grid.setViewport(0, 100, 100, 0);

    const cells = grid.broadcasts.cells.getValue();
    expect(cells.length).toBe(4);
  });

  test("Header values.", () => {
    const grid = new VirtualizedGridDomain(options);
    grid.setColumnsLength(100);
    grid.setRowLength(100);
    grid.setRowHeaderWidth(25);
    grid.setColumnHeaderHeight(25);
    grid.setViewport(0, 100, 100, 0);

    const columnHeaders = grid.broadcasts.columnHeaders.getValue();
    const rowHeaders = grid.broadcasts.rowHeaders.getValue();

    expect(columnHeaders.length).toBe(2);
    expect(rowHeaders.length).toBe(2);

  });

  test("100 columns 100 rows with 25 pixel column header.", () => {
    const grid = new VirtualizedGridDomain(options);
    grid.setColumnHeaderHeight(25);
    grid.setColumnsLength(100);
    grid.setRowLength(100);
    grid.setViewport(0, 100, 100, 0);

    const cells = grid.broadcasts.cells.getValue();
    expect(cells.length).toBe(4);

    expect(cells[0].top).toBe(25);
    expect(cells[0].bottom).toBe(75);
    expect(cells[0].left).toBe(0);
    expect(cells[0].right).toBe(50);
    expect(cells[0].width).toBe(50);
    expect(cells[0].height).toBe(50);
    expect(cells[0].value).toBe("(0, 0)");

    expect(cells[1].top).toBe(25);
    expect(cells[1].bottom).toBe(75);
    expect(cells[1].left).toBe(50);
    expect(cells[1].right).toBe(100);
    expect(cells[1].width).toBe(50);
    expect(cells[1].height).toBe(50);
    expect(cells[1].value).toBe("(1, 0)");

    expect(cells[2].top).toBe(75);
    expect(cells[2].bottom).toBe(125);
    expect(cells[2].left).toBe(0);
    expect(cells[2].right).toBe(50);
    expect(cells[2].width).toBe(50);
    expect(cells[2].height).toBe(50);
    expect(cells[2].value).toBe("(0, 1)");

    expect(cells[3].top).toBe(75);
    expect(cells[3].bottom).toBe(125);
    expect(cells[3].left).toBe(50);
    expect(cells[3].right).toBe(100);
    expect(cells[3].width).toBe(50);
    expect(cells[3].height).toBe(50);
    expect(cells[3].value).toBe("(1, 1)");
  });

  test("100 columns 100 rows with 25 pixel row header.", () => {
    const grid = new VirtualizedGridDomain(options);
    grid.setRowHeaderWidth(25);
    grid.setColumnsLength(100);
    grid.setRowLength(100);
    grid.setViewport(0, 100, 100, 0);

    const cells = grid.broadcasts.cells.getValue();

    expect(cells.length).toBe(4);

    expect(cells[0].top).toBe(0);
    expect(cells[0].bottom).toBe(50);
    expect(cells[0].left).toBe(25);
    expect(cells[0].right).toBe(75);
    expect(cells[0].width).toBe(50);
    expect(cells[0].height).toBe(50);
    expect(cells[0].value).toBe("(0, 0)");

    expect(cells[1].top).toBe(0);
    expect(cells[1].bottom).toBe(50);
    expect(cells[1].left).toBe(75);
    expect(cells[1].right).toBe(125);
    expect(cells[1].width).toBe(50);
    expect(cells[1].height).toBe(50);
    expect(cells[1].value).toBe("(1, 0)");

    expect(cells[2].top).toBe(50);
    expect(cells[2].bottom).toBe(100);
    expect(cells[2].left).toBe(25);
    expect(cells[2].right).toBe(75);
    expect(cells[2].width).toBe(50);
    expect(cells[2].height).toBe(50);
    expect(cells[2].value).toBe("(0, 1)");

    expect(cells[3].top).toBe(50);
    expect(cells[3].bottom).toBe(100);
    expect(cells[3].left).toBe(75);
    expect(cells[3].right).toBe(125);
    expect(cells[3].width).toBe(50);
    expect(cells[3].height).toBe(50);
    expect(cells[3].value).toBe("(1, 1)");
  });
});
