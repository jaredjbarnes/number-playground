import React, { useCallback, useRef, useState } from "react";
import { useForkRef } from "../../../hooks/use_fork_ref";
import { VirtualizedListDomain, Item } from "../domain/virtualized_list_domain";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      transform: "translate(0,0,0)",
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
    const y = item.start + item.offset;

    const mountRef = useCallback(
      (element: HTMLDivElement | null) => {
        if (element != null) {
          const height = element.offsetHeight;
          virtualizedListDomain.setItemHeight(index, height);
        }
      },
      [index, virtualizedListDomain]
    );

    const forkedRef = useForkRef(mountRef, ref);
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
