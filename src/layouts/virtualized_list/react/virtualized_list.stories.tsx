import React from "react";
import { VirtualizedList } from "./virtualized_list";

export default {
  component: VirtualizedList,
  title: "virtualized_list",
};

export const FewItems = () => {
  return (
    <VirtualizedList>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
    </VirtualizedList>
  );
};
