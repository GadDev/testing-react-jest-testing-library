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

describe("Checkbox", () => {
  test("initial conditions", () => {
    render(<App />);
    // check that the button starts out enabled
    const coloredBtn = screen.getByRole("button", {
      name: "Change to blue",
    });
    expect(coloredBtn).toBeEnabled();
    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("Button is disabled when the checkbox is checked and the button is enabled if the checkbox is unchecked", () => {
    render(<App />);
    const coloredBtn = screen.getByRole("button", {
      name: "Change to blue",
    });
    const checkbox = screen.getByRole("checkbox", {
      name: "Disable button",
    });

    fireEvent.click(checkbox);
    expect(coloredBtn).toBeDisabled();

    fireEvent.click(checkbox);
    expect(coloredBtn).toBeEnabled();
  });
});
