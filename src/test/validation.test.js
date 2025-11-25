import { describe, expect, it } from "vitest";
import { validatePassword } from "../script/validation";

describe("Validating the entered password", () => {
  const cases = [
    { password: "short", expected: false },
    { password: "thisPassword", expected: true }, //password length is exactly 12
    { password: "longerPassword", expected: true },
  ];

  cases.forEach(({ password, expected }) => {
    it("returns what is expected for the password", () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});
