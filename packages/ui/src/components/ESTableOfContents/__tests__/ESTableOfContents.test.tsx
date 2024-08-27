import React from "react";
import { render } from "@testing-library/react";
import ESTableOfContents from "../ESTableOfContents";
import { LinkType } from "../../../lib/types";

test("It renders without crashing", () => {
  const component = render(
    <ESTableOfContents
      title="Design Tokens"
      sections={[
        {
          href: "/?path=/docs/design-tokens-breakpoints--docs",
          children: "Colors",
          target: "_blank",
        },
        {
          href: "/?path=/docs/design-tokens-elevation-and-shadows--docs",
          children: "Elevation and Shadows",
          target: "_blank",
        },
        {
          href: "/?path=/docs/design-tokens-icons--docs",
          children: "Icons",
          target: "_blank",
        },
      ]}
    />,
  );
  expect(component).toBeTruthy();
});

it("ESTableOfContents matches DOM Snapshot", () => {
  const domTree = render(
    <ESTableOfContents
      title="Design Tokens"
      sections={[
        {
          href: "/?path=/docs/design-tokens-breakpoints--docs",
          children: "Colors",
          target: "_blank",
        },
        {
          href: "/?path=/docs/design-tokens-elevation-and-shadows--docs",
          children: "Elevation and Shadows",
          target: "_blank",
        },
        {
          href: "/?path=/docs/design-tokens-icons--docs",
          children: "Icons",
          target: "_blank",
        },
      ]}
    />,
  );
  expect(domTree).toMatchSnapshot();
});
