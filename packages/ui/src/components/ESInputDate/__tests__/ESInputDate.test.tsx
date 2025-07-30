import * as React from "react";
import { render } from "@testing-library/react";
import ESInputDate from "../ESInputDate";

describe("ESInputDate", () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESInputDate />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
