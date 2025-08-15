import React from "react";
import { render } from "@testing-library/react";
import ESInputPassword from "../ESInputPassword";

describe("ESInputPassword", () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputPassword />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
