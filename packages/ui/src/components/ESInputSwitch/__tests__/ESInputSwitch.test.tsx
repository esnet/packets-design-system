import * as React from "react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import ESInputSwitch from "../ESInputSwitch";
import { ESInputSwitchProps } from "../ESInputSwitch.types";
import { test, expect } from "@playwright/experimental-ct-react";

test.describe("ESInputSwitch", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputSwitchProps> = {
    testTable: [
      {
        name: "unchecked",
        props: { variant: "primary" },
      },
      {
        name: "primary-checked",
        props: { variant: "primary", defaultChecked: true },
      },
      {
        name: "secondary-checked",
        props: { variant: "secondary", defaultChecked: true },
      },
      {
        name: "hideIcons",
        props: { hideIcons: true },
      },
      {
        name: "disabled",
        props: { hideIcons: true },
      },
      // Add more test cases as needed
    ],
    themes: ["light"],
    actionStates: [],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <ESInputSwitch {...props} />
        </div>
      );
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(themedComponent);
        await expect(component.locator("input")).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        if (props.disabled) return;
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          // do any locator selection if needed
          const component = await mount(themedComponent);
          if (state === "focus") await component.focus();
          if (state === "hover" || state === "active") await component.hover();
          if (state === "active") await component.click();
          await expect(component.locator("input")).toHaveScreenshot();
        });
      });
    });
  });

  // test that radio buttons with same name are grouped together
  test("functions", async ({ mount }) => {
    const component = (await mount(<ESInputSwitch />)).locator("input");
    await component.click();
    await expect(component).toBeChecked();
    await component.click();
    await expect(component).not.toBeChecked();
  });
});
