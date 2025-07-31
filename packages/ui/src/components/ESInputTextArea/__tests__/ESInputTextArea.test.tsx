import React from "react";
import { render } from "@testing-library/react";
import ESInputTextArea from "../ESInputTextArea";

describe("ESInputTextArea", () => {
  it("renders correctly", () => {
    const component = render(<ESInputTextArea />);
    expect(component).toBeTruthy();
  });
  it("has class and identity", () => {
    const component = render(
      <ESInputTextArea id="test ID" className="test class" />
    );
    expect(component).toMatchSnapshot();
  });
  it("is branded", () => {
    const component = render(<ESInputTextArea variant="branded" />);
    expect(component).toMatchSnapshot();
  });
  it("has an error state", () => {
    const component = render(<ESInputTextArea error={true} />);
    expect(component).toMatchSnapshot();
  });
  it("matches size correctly", () => {
    const component = render(
      <ESInputTextArea resize="both" rows={50} cols={30} />
    );
    expect(component).toMatchSnapshot();
  });
});
