import { countSheeps, sum } from "./index";
import { describe, it, expect } from "vitest";
// Task1
describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// Task2

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

describe("countSheeps", function () {
  it("should work correctly", () => {
    const result1 = countSheeps(array1);
    expect(result1).to.equal(
      17,
      "There are 17 sheeps in total, not " + result1
    );
  });
});
