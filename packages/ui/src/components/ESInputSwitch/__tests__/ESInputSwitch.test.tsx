import React from "react";
import { render } from "@testing-library/react";
import ESInputSwitch from "../ESInputSwitch";

test("It renders without crashing", () => {
  const component = render(
    <ESInputSwitch
      id="switch-example-1"
      ariaLabel="A Switch"
      label={"A switch label"}
    />,
  );
  expect(component).toBeTruthy();
});

it("With Label matches DOM Snapshot", () => {
  const domTree = render(
    <ESInputSwitch
      id="switch-example-2"
      ariaLabel="A Switch"
      label={"A switch label"}
    />,
  );
  expect(domTree).toMatchSnapshot();
});

it("Without Label matches DOM Snapshot", () => {
  const domTree = render(
    <ESInputSwitch id="switch-example-3" ariaLabel="A Switch" />,
  );
  expect(domTree).toMatchSnapshot();
});

it("renders with a custom CSS class Snapshot", () => {
  const domTree = render(
    <ESInputSwitch
      id="switch-example-4"
      ariaLabel="A Switch"
      label={"A switch label"}
      className="active"
    />,
  );
  expect(domTree).toMatchSnapshot();
});

it("renders with a disabled state Snapshot", () => {
  const domTree = render(
    <ESInputSwitch
      id="switch-example-5"
      ariaLabel="A Switch"
      isDisabled={true}
      label={"A switch label"}
      className="active"
    />,
  );
  expect(domTree).toMatchSnapshot();
});

it("renders with a disabled state with an 'on' indicator Snapshot", () => {
  const domTree = render(
    <ESInputSwitch
      id="switch-example-5"
      ariaLabel="A Switch"
      isDisabled={true}
      label={"A switch label"}
      className="active"
      initiallyChecked={true}
    />,
  );
  expect(domTree).toMatchSnapshot();
});

it("renders with a no icons Snapshot", () => {
  const domTree = render(
    <ESInputSwitch
      id="switch-example-6"
      ariaLabel="A Switch"
      label={"A switch label"}
      className="active"
      showIcon={false}
    />,
  );
  expect(domTree).toMatchSnapshot();
});
