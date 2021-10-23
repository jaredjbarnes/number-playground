import React, { useCallback } from "react";
import { useForkRef } from "../../../hooks/use_fork_ref";
import { VirtualizedListDomain } from "../domain/virtualized_list_domain";

export interface Props {
  children: React.ReactNode;
  virtualizedListDomain: VirtualizedListDomain;
}

export const VirtualizedListHeader = React.forwardRef<HTMLDivElement, Props>(
  function VirtualizedListHeader(
    { children, virtualizedListDomain }: Props,
    ref
  ) {
    const mountRef = useCallback(
      (element: HTMLDivElement) => {
        const height = element.offsetHeight;
        virtualizedListDomain.setHeaderHeight(height);
      },
      [virtualizedListDomain]
    );

    const forkedRef = useForkRef(mountRef, ref);

    return <div ref={forkedRef}>{children}</div>;
  }
);
