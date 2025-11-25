import { expect, test } from "vitest";
import { multiply } from "../script/math.js";
import { multiplyByZero } from "../script/math.js";
import { multiplyByNegative } from "../script/math.js";
import { multiplyByDecimals } from "../script/math.js";

test("Multiplying numbers", () => {
  expect(multiply(3, 4)).toBe(12);
});

//Note: This test works!

//Adding the next three scenarios
test("multiplying by zero", () => {
  expect(multiplyByZero(4)).toBe(0);
});

test("multiplying by negative number", () => {
  expect(multiplyByNegative(3, 4)).toBe(-12);
});

test("multiplying with decimals", () => {
  expect(multiplyByDecimals(3, 4)).toBe(12.0);
});

//All scenarios works :)
