import { expect, test } from "vitest"
import { multiply } from "../script/math.js"


test("Multiplying numbers", () => {
    expect(multiply(3, 4)).toBe(12)
})


//Note: This test works!