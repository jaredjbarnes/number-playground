import React from "react";
import { Cell } from "../domain/virtualized_grid_domain";
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
    transform: `translate(${cell.left}px,${cell.top}px)`,
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

export const Hello = () => {
  return (
    <VirtualizedGrid
      style={{ width: "400px", height: "400px" }}
      rowsLength={100}
      columnsLength={100}
      renderCell={renderCell}
      renderColumnHeader={(header) => null}
      renderRowHeader={(header) => null}
      defaultColumnWidth={100}
      customColumns={[{ index: 1, size: 200 }]}
      customRows={[{ index: 50, size: 300 }]}
    />
  );
};
