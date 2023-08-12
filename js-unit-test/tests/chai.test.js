import { assert, describe, expect, it } from "vitest";

const sayHello = (name) => {
  return `Hello ${name}`;
};

describe("sayHello", () => {
  it("should return with name", () => {
    expect(sayHello("Audie")).to.be.a("string", "Hello Audie");
    assert.equal(sayHello("Audie"), "Hello Audie");
  });
});
