import { bench, describe, expect } from "vitest";

/**
 * npx vitest bench
 * npx vitest bench --run
 * npx vitest bench --run [folder/file name]
 */

describe("benchmarking", () => {
  function sayHello(name) {
    return `Hello ${name}`;
  }

  bench("Should run a benchmark", () => {
    const result = sayHello("Audie");
    expect(result).toBe("Hello Audie");
  });
});
