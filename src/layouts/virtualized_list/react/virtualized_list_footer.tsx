import React, { useCallback } from "react";
import { useForkRef } from "../../../hooks/use_fork_ref";
import { VirtualizedListDomain } from "../domain/virtualized_list_domain";

export interface Props {
  children: React.ReactNode;
  virtualizedListDomain: VirtualizedListDomain;
}

export const VirtualizedListFooter = React.forwardRef<HTMLDivElement, Props>(
  function VirtualizedListFooter(
    { children, virtualizedListDomain }: Props,
    ref
  ) {
    const mountRef = useCallback(
      (element: HTMLDivElement) => {
        const height = element.offsetHeight;
        virtualizedListDomain.setFooterHeight(height);
      },
      [virtualizedListDomain]
    );

    const forkedRef = useForkRef(mountRef, ref);

    return <div ref={forkedRef}>{children}</div>;
  }
);
