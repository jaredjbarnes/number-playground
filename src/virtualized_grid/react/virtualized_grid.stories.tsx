import React from "react";
import { Cell, Header } from "../domain/virtualized_grid_domain";
import { VirtualizedGrid } from "./virtualized_grid";

export default {
  component: VirtualizedGrid,
  title: "virtualized_grid",
};

const renderCell = (cell: Cell<React.ReactElement>) => {
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
  };
  return (
    <div
      key={`${cell.columnIndex}|${cell.rowIndex}`}
      style={style}
    >{`(${cell.columnIndex}, ${cell.rowIndex})`}</div>
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

  return <div key={`${header.index}`} style={style}>{`${header.index}`}</div>;
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
