import React from "react";
import { render } from "@testing-library/react";
import ESAvatar from "../ESAvatar";

test("It renders without crashing", () => {
  const component = render(
    <ESAvatar label="Ernest Lawrence" size="medium" backgroundColor="lime" />,
  );
  expect(component).toBeTruthy();
});

it("Info type matches DOM Snapshot", () => {
  const domTree = render(
    <ESAvatar label="Ernest Lawrence" size="medium" backgroundColor="lime" />,
  );
  expect(domTree).toMatchSnapshot();
});

it("Small matches DOM Snapshot", () => {
  const domTree = render(
    <ESAvatar label="Ernest Lawrence" size="small" backgroundColor="lime" />,
  );
  expect(domTree).toMatchSnapshot();
});

it("Large matches DOM Snapshot", () => {
  const domTree = render(
    <ESAvatar label="Ernest Lawrence" size="large" backgroundColor="lime" />,
  );
  expect(domTree).toMatchSnapshot();
});
