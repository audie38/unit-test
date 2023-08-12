import { describe, expect, it } from "vitest";
import { sayHello } from "../src/sayHello";

/**
 * npx vitest --coverage
 * npx vitest --run --coverage
 * npx vitest --run --coverage [folder/filename]
 */

describe("Say Hello", () => {
  it("Should say Hello", () => {
    const result = sayHello("Audie");
    expect(result).toBe("Hello Audie");
  });
});
