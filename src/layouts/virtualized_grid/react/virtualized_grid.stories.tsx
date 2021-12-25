import React from "react";
import { Cell, Header } from "../domain/virtualized_grid_domain";
import { VirtualizedGrid } from "./virtualized_grid";

export default {
  component: VirtualizedGrid,
  title: "virtualized_grid",
};

const getFactors = (num: number) => {
  let factors = new Map();
  const maxFactor = Math.floor(Math.sqrt(num));
  const halfFactor = Math.floor(num / 2);
  const thirdFactor = Math.floor(num / 3);

  if (num % 2 === 0) {
    const remainder = num / 2;
    factors.set(2, 2);
    factors.set(remainder, remainder);

    for (let x = 2; x * 2 < halfFactor; x++) {
      const factor = x * 2;

      if (num % factor === 0) {
        const remainder = num / factor;
        factors.set(remainder, remainder);
        factors.set(factor, factor);
      } else {
        break;
      }
    }
  }

  if (num % 3 === 0) {
    const remainder = num / 3;
    factors.set(3, 3);
    factors.set(remainder, remainder);

    for (let x = 2; x * 3 < thirdFactor; x++) {
      const factor = x * 3;

      if (num % factor === 0) {
        const remainder = num / factor;
        factors.set(remainder, remainder);
        factors.set(factor, factor);
      } else {
        break;
      }
    }
  }

  for (let x = 5; x <= maxFactor; x += 6) {
    if (num % x === 0) {
      const remainder = num / x;
      factors.set(x, x);
      factors.set(remainder, remainder);
    }

    const nextX = x + 2;

    if (num % nextX === 0) {
      const remainder = num / nextX;
      factors.set(nextX, nextX);
      factors.set(remainder, remainder);
    }
  }

  factors.set(1, 1);
  factors.set(num, num);
  const results = Array.from(factors.values());
  results.sort((a, b) => a - b);
  return results.filter(isPrime);
};

const isPrime = (num: number) => {
  if (num <= 1) {
    return false;
  }

  if (num % 2 === 0) {
    const remainder = num / 2;

    if (remainder > 1) {
      return false;
    } else {
      return true;
    }
  }

  if (num % 3 === 0) {
    const remainder = num / 3;

    if (remainder > 1) {
      return false;
    } else {
      return true;
    }
  }

  const maxFactor = Math.round(Math.sqrt(num));
  for (let x = 5; x <= maxFactor; x += 6) {
    if (num % x === 0) {
      const remainder = num / x;

      if (remainder > 1) {
        return false;
      } else {
        return true;
      }
    }

    if (num % (x + 2) === 0) {
      const remainder = num / (x + 2);

      if (remainder > 1) {
        return false;
      } else {
        return true;
      }
    }
  }

  return true;
};

function CellPosition({
  cell,
  children,
}: {
  cell: Cell<React.ReactElement>;
  children: React.ReactNode;
}) {
  const style: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    transform: `translate(${cell.left + cell.rowHeaderWidth}px,${
      cell.top + cell.columnHeaderHeight
    }px)`,
    width: `${cell.width}px`,
    height: `${cell.height}px`,
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    lineHeight: `${cell.height}px`,
    paddingLeft: "8px",
    boxSizing: "border-box",
    zIndex: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  return (
    <div key={`${cell.columnIndex}|${cell.rowIndex}`} style={style}>
      {children}
    </div>
  );
}

const renderCell = (cell: Cell<React.ReactElement>) => {
  return (
    <CellPosition
      cell={cell}
    >{`(${cell.columnIndex}, ${cell.rowIndex})`}</CellPosition>
  );
};

const renderColumnHeader = (header: Header<React.ReactElement>) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    transform: `translate(${header.left + header.offset}px,${header.top}px)`,
    width: `${header.width}px`,
    height: `${header.height}px`,
    borderRight: "1px solid #ccc",
    borderLeft: header.index === 0 ? "1px solid #ccc" : "0px",
    lineHeight: `${header.height}px`,
    paddingLeft: "8px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  };

  return <div key={`${header.index}`} style={style}>{`${header.index}`}</div>;
};

const renderRowHeader = (header: Header<React.ReactElement>) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    transform: `translate(${header.left}px,${header.top + header.offset}px)`,
    width: `${header.width}px`,
    height: `${header.height}px`,
    borderBottom: "1px solid #ccc",
    lineHeight: `${header.height}px`,
    paddingLeft: "8px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  };

  return (
    <div key={`${header.index}`} style={style}>{`${header.index + 1}`}</div>
  );
};

export const ColumnHeaders = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={1000}
      columnsLength={1000}
      renderCell={renderCell}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      defaultColumnWidth={100}
      customColumns={[{ index: 1, size: 200 }]}
      customRows={[{ index: 50, size: 300 }]}
    />
  );
};

export const RowHeaders = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={1000}
      columnsLength={1000}
      renderCell={renderCell}
      rowHeaderWidth={50}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={100}
      customColumns={[{ index: 1, size: 200 }]}
      customRows={[{ index: 50, size: 300 }]}
    />
  );
};

export const WithBothHeaders = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={1000}
      columnsLength={1000}
      renderCell={renderCell}
      rowHeaderWidth={50}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={100}
      customColumns={[{ index: 1, size: 200 }]}
      customRows={[{ index: 50, size: 300 }]}
    />
  );
};

export const LargeRows = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={1000}
      columnsLength={1000}
      renderCell={renderCell}
      rowHeaderWidth={50}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={120}
      defaultRowHeight={60}
      customColumns={[
        { index: 1, size: 200 },
        { index: 4, size: 500 },
      ]}
      customRows={[
        { index: 50, size: 300 },
        { index: 3, size: 300 },
      ]}
    />
  );
};

export const SmallTable = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={2}
      columnsLength={2}
      renderCell={renderCell}
      rowHeaderWidth={50}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={120}
      defaultRowHeight={60}
    />
  );
};

export const Mod1Table = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={200}
      columnsLength={2}
      renderCell={(cell) => {
        const index = cell.rowIndex + 1;
        const column = cell.columnIndex;
        let content: React.ReactElement;

        if (column === 0) {
          content = (
            <span>
              {(
                (4n ** (3n * BigInt(index)) - 1n) %
                (6n * BigInt(index) + 1n)
              ).toString()}
            </span>
          );
        } else if (column === 1) {
          content = <span>{(6n * BigInt(index) + 1n).toString()}</span>;
        } else {
          content = (
            <span>
              {getFactors(Number(4n ** (3n * BigInt(index)) - 1n)).join(", ")}
            </span>
          );
        }
        return <CellPosition cell={cell}>{content}</CellPosition>;
      }}
      rowHeaderWidth={50}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={300}
      defaultRowHeight={60}
    />
  );
};

export const Mod5Table = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={200}
      columnsLength={2}
      renderCell={(cell) => {
        const index = cell.rowIndex + 1;
        const column = cell.columnIndex;
        let content: React.ReactElement;

        if (column === 0) {
          content = (
            <span>
              {(
                (4n ** (3n * BigInt(index) - 1n) - 1n) %
                (6n * BigInt(index) - 1n)
              ).toString()}
            </span>
          );
        } else if (column === 1) {
          content = <span>{(6n * BigInt(index) - 1n).toString()}</span>;
        } else {
          content = (
            <span>
              {getFactors(Number(4n ** (3n * BigInt(index) + 5n) - 1n)).join(
                ", "
              )}
            </span>
          );
        }
        return <CellPosition cell={cell}>{content}</CellPosition>;
      }}
      rowHeaderWidth={50}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={300}
      defaultRowHeight={60}
    />
  );
};

export const Powers = () => {
  return (
    <VirtualizedGrid
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      rowsLength={10}
      columnsLength={2}
      renderCell={(cell) => {
        const index = cell.rowIndex + 1;
        const column = cell.columnIndex;
        let content: React.ReactElement;

        if (column === 0) {
          content = <span>{(2n ** (6n * BigInt(index) - 2n)).toString()}</span>;
        } else if (column === 1) {
          content = (
            <span>
              {(
                (2n ** (6n * BigInt(index) - 2n) - 1n) %
                (6n * BigInt(index) - 1n)
              ).toString()}
            </span>
          );
        } else {
          content = (
            <span>
              {getFactors(Number(2n ** (6n * BigInt(index) - 2n) - 1n)).join(
                ", "
              )}
            </span>
          );
        }
        return <CellPosition cell={cell}>{content}</CellPosition>;
      }}
      rowHeaderWidth={50}
      columnHeaderHeight={30}
      renderColumnHeader={renderColumnHeader}
      renderRowHeader={renderRowHeader}
      defaultColumnWidth={300}
      defaultRowHeight={60}
    />
  );
};
