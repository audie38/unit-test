import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldEl = screen.getByText("Hello World", { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });
  test("renders good to see you if the button was not clicked", () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const paragraphEl = screen.getByText("good to see you", { exact: false });
    expect(paragraphEl).toBeInTheDocument();
  });
  test("renders changed if the button was clicked", async () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonEl = screen.getByRole("button");
    await userEvent.click(buttonEl);
    // Assert
    const paragraphEl = screen.getByText("Changed", { exact: false });
    expect(paragraphEl).toBeInTheDocument();
  });
  test("renders good to see you if ONLY the button was NOT clicked", async () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonEl = screen.getByRole("button");
    await userEvent.click(buttonEl);
    // Assert
    const paragraphEl = screen.queryByText("good to see you", { exact: false }); // queryByText will return null if not found, getByText will throw an error if not found
    // expect(paragraphEl).not.toBeInTheDocument();
    expect(paragraphEl).toBeNull();
  });
});
