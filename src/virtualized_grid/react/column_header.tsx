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
  const columnHeaders = useAsyncValue(broadcasts.columnHeaders);

  const fullStyle = {
    ...style,
    height: `${height}px`,
  };
  return (
    <div className={clsx(classes.container, className)} style={fullStyle}>
      {columnHeaders.map((header) => header.value)}
    </div>
  );
}
