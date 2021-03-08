import { fireEvent, render, screen } from "@testing-library/react";

import App, { replaceCamelWithSpaces } from "./App";

describe("Button", () => {
  test("button has the correct initial color", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });
    expect(colorBtn).toHaveStyle({ background: "MediumVioletRed" });
  });

  test("button turns Midnight Blue when clicked", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });
    fireEvent.click(colorBtn);
    expect(colorBtn).toHaveStyle({ background: "MidnightBlue" });
    expect(colorBtn.textContent).toBe("Change to Medium Violet Red");
  });
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const coloredBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(coloredBtn).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Button is disabled when the checkbox is checked and the button is enabled if the checkbox is unchecked", () => {
  render(<App />);
  const coloredBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  fireEvent.click(checkbox);
  expect(coloredBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(coloredBtn).toBeEnabled();
});

test("Button gray when disabled", () => {
  render(<App />);
  const coloredBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  // disabled btn
  fireEvent.click(checkbox);
  expect(coloredBtn).toHaveStyle({
    backgroundColor: "gray",
  });
  // enable btn
  fireEvent.click(checkbox);
  expect(coloredBtn).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });
  // change btn to blue
  fireEvent.click(coloredBtn);
  expect(coloredBtn).toHaveStyle({
    backgroundColor: "MidnightBlue",
  });
});

describe("Space before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumViolet")).toBe("Medium Violet");
  });
});
