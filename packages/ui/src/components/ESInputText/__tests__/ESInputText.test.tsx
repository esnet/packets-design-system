import React from "react";
import { render } from "@testing-library/react";
import ESInputText from "../ESInputText";

describe("ESInputText", () => {
  it("renders correctly", () => {
    const component = render(<ESInputText />);
    expect(component).toBeTruthy();
  });
  it("has class and identity", () => {
    const component = render(
      <ESInputText id="test ID" className="test class" />
    );
    expect(component).toMatchSnapshot();
  });
  it("is branded", () => {
    const component = render(<ESInputText variant="branded" />);
    expect(component).toMatchSnapshot();
  });
  it("has an error state", () => {
    const component = render(<ESInputText error={true} />);
    expect(component).toMatchSnapshot();
  });
});
