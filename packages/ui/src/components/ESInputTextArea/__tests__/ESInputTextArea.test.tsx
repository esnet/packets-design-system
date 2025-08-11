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

  test("set row and column count", async ({ mount }) => {
    const component = await mount(
      <ESInputTextArea rows={7} resize="both" placeholder="rows=5" />
    );
    await expect(component).toHaveScreenshot();
  });
});
