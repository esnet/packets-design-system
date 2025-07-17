import React from "react";
import { render } from "@testing-library/react";
import ESInputLabel from "../ESInputLabel";

describe("ESInputLabel", () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputLabel />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
