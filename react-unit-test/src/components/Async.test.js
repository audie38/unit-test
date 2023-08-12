import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          id: 1,
          title: "First Post",
        },
        {
          id: 2,
          title: "Second Post",
        },
      ],
    });
    render(<Async />);

    // Assert
    // const listItemEl = await screen.findAllByRole("listitem", {}, { timeout: 10000 });
    const listItemEl = await screen.findAllByRole("listitem");
    expect(listItemEl).not.toHaveLength(0);
  });
});
