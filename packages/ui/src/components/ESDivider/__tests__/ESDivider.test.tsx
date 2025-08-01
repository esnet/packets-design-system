import React from "react";
import { render } from "@testing-library/react";
import ESDivider from "../ESDivider";

test("It renders without crashing", () => {
  const component = render(<ESDivider variant="primary" />);
  expect(component).toBeTruthy();
});

test("Branded matches DOM Snapshot", () => {
  const domTree = render(<ESDivider variant="branded" />);
  expect(domTree).toMatchSnapshot();
});
