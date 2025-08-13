import * as React from "react";
import { render } from "@testing-library/react";
import ESInputRadioButton from "../ESInputRadioButton";

describe("ESInputRadioButton", () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputRadioButton />);
    expect(component).toBeTruthy();
  });
  it("can only be clicked once", () => {
    const { getByRole } = render(<ESInputRadioButton />);
    const radioButton = getByRole("radio");
    radioButton.click();
    expect(radioButton).toBeChecked();
    radioButton.click();
    expect(radioButton).toBeChecked();
  });
  it("cannot be clicked when disabled", () => {
    const { getByRole } = render(<ESInputRadioButton disabled />);
    const radioButton = getByRole("radio");
    expect(radioButton).toBeDisabled();
    radioButton.click();
    expect(radioButton).not.toBeChecked();
  });
});
