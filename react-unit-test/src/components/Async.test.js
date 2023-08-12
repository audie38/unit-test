import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    // Arrange
    render(<Async />);

    // Assert
    const listItemEl = await screen.findAllByRole("listitem", {}, { timeout: 1000 });
    expect(listItemEl).not.toHaveLength(0);
  });
});
