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
      width: "100%",
      zIndex: 3,
      backgroundColor: "#fff",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
    },
    voidSection: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  { name: "ColumnHeader" }
);

interface Props {
  style?: React.CSSProperties;
  className?: string;
  virtualizedGridDomain: VirtualizedGridDomain<React.ReactElement, any, any>;
}

export function ColumnHeader({
  className,
  style,
  virtualizedGridDomain,
}: Props) {
  const classes = useStyles();
  const broadcasts = virtualizedGridDomain.broadcasts;

  const height = useAsyncValue(broadcasts.columnHeaderHeight);
  const rowHeaderWidth = useAsyncValue(broadcasts.rowHeaderWidth);
  const columnHeaders = useAsyncValue(broadcasts.columnHeaders);

  const fullStyle = {
    ...style,
    height: `${height}px`,
  };

  const voidStyle = {
    width: `${rowHeaderWidth}px`,
    height: `${height}px`,
  };

  return (
    <div className={clsx(classes.container, className)} style={fullStyle}>
      {columnHeaders.map((header) => header.value)}
      <div className={classes.voidSection} style={voidStyle}></div>
    </div>
  );
}
