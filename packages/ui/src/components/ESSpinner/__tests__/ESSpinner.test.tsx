import React from "react";
import { render } from "@testing-library/react";
import ESSpinner from "../ESSpinner";

test("It renders without crashing", () => {
  const component = render(<ESSpinner />);
  expect(component).toBeTruthy();
});

it("Spinner matches DOM Snapshot", () => {
  const domTree = render(<ESSpinner />);
  expect(domTree).toMatchSnapshot();
});
