import React from "react";
import { render } from "@testing-library/react";
import ESDatum from "../ESDatum";

test("It renders without crashing", () => {
  const component = render(<ESDatum title="bandwidth">100mbps</ESDatum>);
  expect(component).toBeTruthy();
});

it("Datum matches DOM Snapshot", () => {
  const domTree = render(<ESDatum title="bandwidth">100mbps</ESDatum>);
  expect(domTree).toMatchSnapshot();
});

it("Datum with not title matches DOM Snapshot", () => {
  const domTree = render(<ESDatum>No Title</ESDatum>);
  expect(domTree).toMatchSnapshot();
});
