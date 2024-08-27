import React from "react";
import { render } from "@testing-library/react";
import ESSpacer from "../ESSpacer";

test("It renders without crashing", () => {
  const component = render(<ESSpacer type={"hortizontal"} size={"medium"} />);
  expect(component).toBeTruthy();
});

it("Spacer matches DOM Snapshot", () => {
  const domTree = render(<ESSpacer type={"hortizontal"} size={"medium"} />);
  expect(domTree).toMatchSnapshot();
});

it("Vertical with not title matches DOM Snapshot", () => {
  const domTree = render(<ESSpacer type={"vertical"} size={"medium"} />);
  expect(domTree).toMatchSnapshot();
});

it("Square with not title matches DOM Snapshot", () => {
  const domTree = render(<ESSpacer type={"square"} size={"medium"} />);
  expect(domTree).toMatchSnapshot();
});
