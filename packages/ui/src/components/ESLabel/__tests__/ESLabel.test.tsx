import React from "react";
import { render } from "@testing-library/react";
import ESLabel from "../ESLabel";

describe("ESLabel", () => {
  it("renders correctly", () => {
    // add correct props for proper rendering
    const component = render(<ESLabel />);
    expect(component).toBeTruthy();
  });
  // add more test cases...
});
