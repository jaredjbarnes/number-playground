import React, { useCallback } from "react";
import { useForkRef } from "../../../hooks/use_fork_ref";
import { useResizeEffect } from "../../../hooks/use_resize_effect";
import { VirtualizedListDomain, Item } from "../domain/virtualized_list_domain";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    },
  },
  {
    name: "VirtualizedListItem",
  }
);

export interface Props {
  item: Item;
  children: React.ReactNode;
  virtualizedListDomain: VirtualizedListDomain;
}

export const VirtualizedListItem = React.forwardRef<HTMLDivElement, Props>(
  function VirtualizedListItem(
    { item, children, virtualizedListDomain }: Props,
    ref
  ) {
    const index = item.index;
    const classes = useStyles();
    const y = item.start;

    const updateHeight = useCallback(
      (element: HTMLElement | null) => {
        if (element != null) {
          const height = element.offsetHeight;
          virtualizedListDomain.setItemHeight(index, height);
        }
      },
      [index, virtualizedListDomain]
    );

    const mountRef = useCallback((e) => updateHeight(e), [updateHeight]);
    const resizeRef = useResizeEffect((e) => updateHeight(e), 16);
    const forkedRef = useForkRef(mountRef, resizeRef, ref);

    const style = {
      transform: `translate(0px, ${y}px)`,
    };

    return (
      <div className={classes.container} ref={forkedRef} style={style}>
        {children}
      </div>
    );
  }
);
