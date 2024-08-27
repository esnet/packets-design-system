import React from "react";
import { render } from "@testing-library/react";
import ESSkeletonChip from "../ESSkeletonChip";

test("It renders without crashing", () => {
  const component = render(<ESSkeletonChip />);
  expect(component).toBeTruthy();
});

it("Datum matches DOM Snapshot", () => {
  const domTree = render(<ESSkeletonChip />);
  expect(domTree).toMatchSnapshot();
});
