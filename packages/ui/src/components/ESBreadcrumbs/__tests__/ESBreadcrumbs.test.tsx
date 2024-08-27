import React from "react";
import { render } from "@testing-library/react";
import ESBreadcrumbs from "../ESBreadcrumbs";

test("It renders without crashing", () => {
  const component = render(
    <ESBreadcrumbs
      breadcrumbs={[
        {
          href: "http://www.es.net",
          target: "_blank",
          children: "www.es.net",
        },
        {
          href: "/?path=/docs/getting-started--docs",
          children: "Getting Started",
        },
      ]}
    />,
  );
  expect(component).toBeTruthy();
});

it("It renders a DOM Snapshot", () => {
  const domTree = render(
    <ESBreadcrumbs
      breadcrumbs={[
        {
          href: "http://www.es.net",
          target: "_blank",
          children: "www.es.net",
        },
        {
          href: "/?path=/docs/getting-started--docs",
          children: "Getting Started",
        },
      ]}
    />,
  );
  expect(domTree).toMatchSnapshot();
});
