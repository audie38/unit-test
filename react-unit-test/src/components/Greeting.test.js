import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World", () => {
  // Arrange
  render(<Greeting />);

  // Act

  // Assert
  const helloWorldEl = screen.getByText("Hello World", { exact: true });
  expect(helloWorldEl).toBeInTheDocument();
});
