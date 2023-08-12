import { describe, expect, it } from "vitest";

/**
 * npx vitest -> run all test file and wait for changes
 * npx vitest --run -> to run all test file
 * npx vitest --run [folder/test file] -> to run specific test file
 */

describe("others", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
  it("should pass 2", () => {
    expect(2).toBe(2);
  });
});
