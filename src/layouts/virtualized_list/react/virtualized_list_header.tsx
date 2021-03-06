import React, { useCallback } from "react";
import { createUseStyles } from "react-jss";
import { useForkRef } from "../../../hooks/use_fork_ref";
import { VirtualizedListDomain } from "../domain/virtualized_list_domain";

const useStyles = createUseStyles(
  {
    container: {
      position: "sticky",
      top: 0,
      width: "100%",
      zIndex: 2,
    },
  },
  {
    name: "VirtualizedListHeader",
  }
);

export interface Props {
  children: React.ReactNode;
  virtualizedListDomain: VirtualizedListDomain;
}

export const VirtualizedListHeader = React.forwardRef<HTMLDivElement, Props>(
  function VirtualizedListHeader(
    { children, virtualizedListDomain }: Props,
    ref
  ) {
    const classes = useStyles();
    const mountRef = useCallback(
      (element: HTMLDivElement) => {
        if (element != null) {
          const height = element.offsetHeight;
          virtualizedListDomain.setHeaderHeight(height);
        }
      },
      [virtualizedListDomain]
    );

    const forkedRef = useForkRef(mountRef, ref);

    return (
      <div className={classes.container} ref={forkedRef}>
        {children}
      </div>
    );
  }
);
