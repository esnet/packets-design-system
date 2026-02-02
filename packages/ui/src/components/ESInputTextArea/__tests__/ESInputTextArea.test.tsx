import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESInputTextAreaProps } from "../ESInputTextArea.types";
import ESInputTextArea from "../ESInputTextArea";

test.describe("ESInputTextArea", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputTextAreaProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          variant: "primary",
          placeholder: "primary text area",
          resize: "both",
        },
      },
      {
        name: "branded",
        props: {
          variant: "branded",
          placeholder: "branded text area",
          resize: "both",
        },
      },
    ],
    themes: ["light", "dark"],
    // actionStates: [],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <ESInputTextArea {...props} />
        </div>
      );
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(themedComponent);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          const component = await mount(themedComponent);
          const input = component.locator("textarea");
          if (state === "focus") await input.focus();
          if (state === "hover" || state === "active") await input.hover();
          if (state === "active") await input.press("Space");
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });

  // TODO: These tests use Jest syntax (it, render, toMatchSnapshot) and need to be converted to Playwright syntax
  // or moved to a separate Jest test file
  // it("has class and identity", () => {
  //   const component = render(
  //     <ESInputTextArea id="test ID" className="test class" />,
  //   );
  //   expect(component).toMatchSnapshot();
  // });
  // it("is branded", () => {
  //   const component = render(<ESInputTextArea variant="branded" />);
  //   expect(component).toMatchSnapshot();
  // });
  // it("has an error state", () => {
  //   const component = render(<ESInputTextArea error={true} />);
  //   expect(component).toMatchSnapshot();
  // });
  // it("matches size correctly", () => {
  //   const component = render(
  //     <ESInputTextArea resize="both" rows={50} cols={30} />,
  //   );
  //   expect(component).toMatchSnapshot();
  // });
});
