import { describe, expect, it, vi } from "vitest";

describe("mock", () => {
  function sayHello(name, cb) {
    cb(`Hello ${name}`);
  }
  it("should support mock", () => {
    const callback = vi.fn();
    sayHello("Audie", callback);
    expect(callback).toHaveBeenCalledWith("Hello Audie");
  });
});
