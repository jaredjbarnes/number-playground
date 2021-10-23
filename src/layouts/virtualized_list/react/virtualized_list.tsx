import React, { useCallback, useState } from "react";
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
      height: "100px",
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
}

export const VirtualizedList = React.forwardRef<HTMLDivElement, Props>(
  function VirtualizedList({ children, className }: Props, ref) {
    const classes = useStyles();
    const [virtualizedListDomain] = useState(
      () => new VirtualizedListDomain(50, children?.length)
    );
    const items = useAsyncValue(virtualizedListDomain.broadcasts.items);
    const height = virtualizedListDomain.getHeight();

    const updateViewport = useCallback(
      (element: HTMLDivElement) => {
        const top = element.scrollTop;
        const height = element.offsetHeight;
        const bottom = top + height;
        virtualizedListDomain.updateViewport(top, bottom);
      },
      [virtualizedListDomain]
    );

    const containerRef = useCallback(
      (element: HTMLDivElement | null) => {
        if (element != null) {
          updateViewport(element);
        }
      },
      [updateViewport]
    );

    const forkedRef = useForkRef(ref, containerRef);

    return (
      <div
        ref={forkedRef}
        className={clsx(className, classes.container)}
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
