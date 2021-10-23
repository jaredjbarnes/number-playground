import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  Cell,
  VirtualizedGridDomain,
  Header,
} from "../domain/virtualized_grid_domain";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { ColumnHeader } from "./column_header";
import { RowHeader } from "./row_header";
import { Cells } from "./cells";

const useStyles = createUseStyles(
  {
    container: {},
  },
  { name: "VirtualizedGrid" }
);

export interface CustomSize {
  index: number;
  size: number;
}

export interface Props {
  style?: React.CSSProperties;
  className?: string;
  renderCell: (cell: Cell<React.ReactElement>) => React.ReactElement;
  renderColumnHeader?:
    | ((header: Header<React.ReactElement>) => React.ReactElement)
    | null;
  renderRowHeader?:
    | ((header: Header<React.ReactElement>) => React.ReactElement)
    | null;
  rowsLength?: number;
  columnsLength?: number;
  defaultColumnWidth?: number;
  defaultRowHeight?: number;
  columnHeaderHeight?: number;
  rowHeaderWidth?: number;
  customRows?: CustomSize[];
  customColumns?: CustomSize[];
}

export function VirtualizedGrid({
  className,
  style,
  renderCell,
  renderColumnHeader = null,
  renderRowHeader = null,
  rowsLength = 0,
  columnsLength = 0,
  defaultColumnWidth = 100,
  defaultRowHeight = 30,
  customRows,
  customColumns,
  columnHeaderHeight = 0,
  rowHeaderWidth = 0,
}: Props) {
  const classes = useStyles();
  const [virtualizedGridDomain] = useState(
    () =>
      new VirtualizedGridDomain<
        React.ReactElement,
        React.ReactElement,
        React.ReactElement
      >({ renderCell, renderColumnHeader, renderRowHeader })
  );

  useLayoutEffect(() => {
    virtualizedGridDomain.setRenderCell(renderCell);
  }, [virtualizedGridDomain, renderCell]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setRenderColumnHeader(renderColumnHeader);
  }, [virtualizedGridDomain, renderColumnHeader]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setRenderRowHeader(renderRowHeader);
  }, [virtualizedGridDomain, renderRowHeader]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setColumnsLength(columnsLength);
  }, [virtualizedGridDomain, columnsLength]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setRowLength(rowsLength);
  }, [virtualizedGridDomain, rowsLength]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setDefaultColumnSize(defaultColumnWidth);
  }, [virtualizedGridDomain, defaultColumnWidth]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setDefaultRowSize(defaultRowHeight);
  }, [virtualizedGridDomain, defaultRowHeight]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setColumnHeaderHeight(columnHeaderHeight);
  }, [virtualizedGridDomain, columnHeaderHeight]);

  useLayoutEffect(() => {
    virtualizedGridDomain.setRowHeaderWidth(rowHeaderWidth);
  }, [virtualizedGridDomain, rowHeaderWidth]);

  useLayoutEffect(() => {
    if (Array.isArray(customColumns)) {
      customColumns.forEach((c) =>
        virtualizedGridDomain.setColumnWidth(c.index, c.size)
      );
    }
  }, [virtualizedGridDomain, customColumns]);

  useLayoutEffect(() => {
    if (Array.isArray(customRows)) {
      customRows.forEach((c) =>
        virtualizedGridDomain.setRowHeight(c.index, c.size)
      );
    }
  }, [virtualizedGridDomain, customRows]);

  useEffect(() => () => virtualizedGridDomain.dispose(), [
    virtualizedGridDomain,
  ]);

  return (
    <Cells
      className={clsx(classes.container, className)}
      style={style}
      virtualizedGridDomain={virtualizedGridDomain}
    >
      <ColumnHeader virtualizedGridDomain={virtualizedGridDomain} />
      <RowHeader virtualizedGridDomain={virtualizedGridDomain} />
    </Cells>
  );
}
