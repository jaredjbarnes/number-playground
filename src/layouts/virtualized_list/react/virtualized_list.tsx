import React, { useCallback, useState, useRef, useLayoutEffect } from "react";
import { VirtualizedListDomain } from "../domain/virtualized_list_domain";
import { VirtualizedListItem } from "./virtualized_list_item";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { useAsyncValue } from "../../../hex/hooks/useAsyncValue";
import { useForkRef } from "../../../hooks/use_fork_ref";

const useStyles = createUseStyles(
  {
    container: {
      position: "relative",
      width: "100%",
      overflow: "auto",
    },
  },
  {
    name: "VirtualizedListItem",
  }
);

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement[];
  buffer?: number;
}

export const VirtualizedList = React.forwardRef<HTMLDivElement, Props>(
  function VirtualizedList(
    { children, className, style, buffer = 0 }: Props,
    ref
  ) {
    const classes = useStyles();
    const [virtualizedListDomain] = useState(
      () => new VirtualizedListDomain(50, children?.length)
    );
    const items = useAsyncValue(virtualizedListDomain.broadcasts.items);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const height = virtualizedListDomain.getHeight();

    const updateViewport = useCallback(
      (element: HTMLDivElement) => {
        const scrollTop = element.scrollTop;
        const top = Math.max(scrollTop - buffer, 0);
        const height = element.offsetHeight;
        const bottom = scrollTop + height + buffer;

        virtualizedListDomain.updateViewport(top, bottom);
      },
      [virtualizedListDomain, buffer]
    );

    useLayoutEffect(() => {
      if (containerRef.current != null) {
        updateViewport(containerRef.current);
      }
    }, [updateViewport]);

    const forkedRef = useForkRef(ref, containerRef);

    return (
      <div
        ref={forkedRef}
        className={clsx(classes.container, className)}
        style={style}
        onScroll={({ currentTarget }) => updateViewport(currentTarget)}
      >
        <div style={{ height: `${height}px` }}>
          {items.map((item) => {
            return (
              <VirtualizedListItem
                key={item.index}
                item={item}
                virtualizedListDomain={virtualizedListDomain}
              >
                {children[item.index]}
              </VirtualizedListItem>
            );
          })}
        </div>
      </div>
    );
  }
);
