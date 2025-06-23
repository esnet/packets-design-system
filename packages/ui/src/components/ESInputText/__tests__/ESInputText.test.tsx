import React from "react";
import { render } from "@testing-library/react";
import ESInputText from "../ESInputText";

describe("ESInputText", () => {
  it("renders correctly", () => {
    const component = render(<ESInputText id="test" />);
    expect(component).toBeTruthy();
  });
});
