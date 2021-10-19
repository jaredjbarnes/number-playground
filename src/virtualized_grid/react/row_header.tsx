import React from "react";
import { VirtualizedGridDomain } from "../domain/virtualized_grid_domain";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { useAsyncValue } from "../../hex/hooks/useAsyncValue";

const useStyles = createUseStyles(
  {
    container: {
      position: "sticky",
      top: 0,
      left: 0,
      height: "100%",
      zIndex: 2,
      backgroundColor: "#fff",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
    },
  },
  { name: "RowHeader" }
);

interface Props {
  style?: React.CSSProperties;
  className?: string;
  virtualizedGridDomain: VirtualizedGridDomain<React.ReactElement, any, any>;
}

export function RowHeader({ className, style, virtualizedGridDomain }: Props) {
  const classes = useStyles();
  const broadcasts = virtualizedGridDomain.broadcasts;

  const width = useAsyncValue(broadcasts.rowHeaderWidth);
  const offset = useAsyncValue(broadcasts.columnHeaderHeight);
  const columnHeaders = useAsyncValue(broadcasts.rowHeaders);

  const fullStyle = {
    ...style,
    width: `${width}px`,
    transform: `translate(0px, -${offset}px)`,
  };
  return (
    <div className={clsx(classes.container, className)} style={fullStyle}>
      {columnHeaders.map((header) => header.value)}
    </div>
  );
}
