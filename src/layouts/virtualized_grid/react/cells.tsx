import React, { useCallback } from "react";
import { VirtualizedGridDomain } from "../domain/virtualized_grid_domain";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { useAsyncValue } from "../../../hex/hooks/useAsyncValue";

const useStyles = createUseStyles(
  {
    container: {
      position: "relative",
      opacity: 1,
      overflow: "auto",
    },
    content: {
      minWidth: "100%",
      minHeight: "100%",
    },
  },
  { name: "Cells" }
);

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  virtualizedGridDomain: VirtualizedGridDomain<React.ReactElement, any, any>;
}

export function Cells({
  className,
  style,
  virtualizedGridDomain,
  children,
}: Props) {
  const classes = useStyles();
  const width = virtualizedGridDomain.getWidth();
  const height = virtualizedGridDomain.getHeight();
  const columnHeaderHeight = virtualizedGridDomain.broadcasts.columnHeaderHeight.getValue();
  const rowHeaderWidth = virtualizedGridDomain.broadcasts.rowHeaderWidth.getValue();
  const cells = useAsyncValue(virtualizedGridDomain.broadcasts.cells);
  const contentStyle = {
    width: `${width + rowHeaderWidth}px`,
    height: `${height + columnHeaderHeight}px`,
  };

  const updateViewport = useCallback(
    (element: HTMLDivElement) => {
      const top = element.scrollTop;
      const left = element.scrollLeft;
      const right = left + element.offsetWidth;
      const bottom = top + element.offsetHeight;

      virtualizedGridDomain.setViewport(top, right, bottom, left);
    },
    [virtualizedGridDomain]
  );

  const ref = useCallback(
    (element) => {
      if (element != null) {
        updateViewport(element);
      }
    },
    [updateViewport]
  );

  return (
    <div
      ref={ref}
      className={clsx(classes.container, className)}
      style={style}
      onScroll={({ currentTarget }) => updateViewport(currentTarget)}
    >
      <div className={classes.content} style={contentStyle}>
        {cells.map((cell) => cell.value)}
        {children}
      </div>
    </div>
  );
}
