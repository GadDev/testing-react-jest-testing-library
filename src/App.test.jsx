import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("Button", () => {
  test("button has the correct initial color", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button", { name: "Change to blue" });
    expect(colorBtn).toHaveStyle({ background: "red" });
  });

  test("button turns blue when clicked", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button", { name: "Change to blue" });
    fireEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ background: "blue" });
    expect(colorBtn.textContent).toBe("Change to red");
  });
});
