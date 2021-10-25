import React from "react";
import { VirtualizedList } from "./virtualized_list";

export default {
  component: VirtualizedList,
  title: "virtualized_list",
};

export const ManyItems = () => {
  return (
    <VirtualizedList
      buffer={200}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
    </VirtualizedList>
  );
};

export const HeaderAndFooterItems = () => {
  return (
    <VirtualizedList
      buffer={200}
      header={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Header
        </div>
      }
      footer={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Footer
        </div>
      }
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
    </VirtualizedList>
  );
};

export const FewItems = () => {
  return (
    <VirtualizedList
      buffer={200}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
    </VirtualizedList>
  );
};

export const FewItemsWithHeaderAndFooter = () => {
  return (
    <VirtualizedList
      buffer={200}
      header={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Header
        </div>
      }
      footer={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Footer
        </div>
      }
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
    </VirtualizedList>
  );
};
