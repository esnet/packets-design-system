import React from "react";
import { render } from "@testing-library/react";
import ESSkeletonSurface from "../ESSkeletonSurface";

test("It renders without crashing", () => {
  const component = render(<ESSkeletonSurface />);
  expect(component).toBeTruthy();
});

it("Skeleton component matches DOM Snapshot", () => {
  const domTree = render(<ESSkeletonSurface />);
  expect(domTree).toMatchSnapshot();
});

it("Skeleton component when square DOM Snapshot", () => {
  const domTree = render(<ESSkeletonSurface isSquare={true} />);
  expect(domTree).toMatchSnapshot();
});
