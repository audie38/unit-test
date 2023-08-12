import { defineConfig } from "vitest/dist/config";

export default defineConfig({
  test: {
    dir: "tests", // only run test file in this folder
  },
});
