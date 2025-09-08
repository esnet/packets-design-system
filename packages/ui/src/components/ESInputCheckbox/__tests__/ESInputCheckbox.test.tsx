import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESInputCheckboxProps } from "../ESInputCheckbox.types";
import ESInputCheckbox from "../ESInputCheckbox";

test.describe("ESInputCheckbox", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputCheckboxProps> = {
    testTable: [
      {
        name: "primary",
        props: { variant: "primary" },
      },
      {
        name: "branded",
        props: { variant: "branded" },
      },
    ],
    themes: ["light", "dark"],
    // actionStates: [],
    actionStates: ["focus", "active"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = <ESInputCheckbox {...props} />;
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          const component = await mount(themedComponent);
          const input = component.locator("input[type='checkbox']");
          if (state === "focus") await input.focus();
          if (state === "hover" || state === "active") await input.hover();
          if (state === "active") await input.press("Space");
          await expect(input).toHaveScreenshot();
        });
      });
    });
  });
});
