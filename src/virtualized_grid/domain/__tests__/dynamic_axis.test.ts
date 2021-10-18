import { DynamicAxis } from "../dynamic_axis";

describe("Dynamic Axis", ()=>{
  test("No custom Sizes", ()=>{
    const axis = new DynamicAxis(50, 100);
    const indexes = axis.getIndexesWithinRange(0, 100);

    expect(indexes.length).toBe(2);
  });

  test("Custom size on left side", ()=>{
    const axis = new DynamicAxis(50, 100);
    axis.setCustomSize(0, 100);

    const indexes = axis.getIndexesWithinRange(0, 100);

    expect(indexes.length).toBe(1);
  });

  test("Custom size on left side with more than one index.", ()=>{
    const axis = new DynamicAxis(50, 100);
    axis.setCustomSize(0, 100);

    const indexes = axis.getIndexesWithinRange(0, 101);

    expect(indexes.length).toBe(2);
  });

  test("Bordered Custom Sizes.", ()=>{
    const axis = new DynamicAxis(50, 100);
    axis.setCustomSize(0, 100);
    axis.setCustomSize(1, 75);

    const indexes = axis.getIndexesWithinRange(0, 300);

    expect(indexes.length).toBe(5);
  });

  test("Multiple Custom Sizes with gaps.", ()=>{
    const axis = new DynamicAxis(50, 100);
    axis.setCustomSize(0, 100);
    axis.setCustomSize(2, 75);

    let indexes = axis.getIndexesWithinRange(0, 300);

    expect(indexes.length).toBe(5);

    indexes = axis.getIndexesWithinRange(100, 400);
    expect(indexes.length).toBe(6);
  });
});