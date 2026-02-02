import * as React from "react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import ESInputRadioButton from "../ESInputRadioButton";
import { ESInputRadioButtonProps } from "../ESInputRadioButton.types";
import { test, expect } from "@playwright/experimental-ct-react";

test.describe("ESInputRadioButton", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputRadioButtonProps> = {
    testTable: [
      {
        name: "primary",
        props: { defaultChecked: false },
      },
      // Add more test cases as needed
    ],
    themes: ["light", "dark"],
    actionStates: ["active"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div style={{ padding: "8px" }}>
          <ESInputRadioButton {...props} />
        </div>
      );
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = (await mount(themedComponent)).locator(
          'input[type="radio"]',
        );
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        if (props.disabled) return;
        test(`${name}-${theme}-${state}`, async ({ page, mount }) => {
          // do any locator selection if needed
          const component = (await mount(themedComponent)).locator(
            'input[type="radio"]',
          );
          if (state === "focus") await component.focus();
          if (state === "hover" || state === "active") await component.hover();
          if (state === "active") await page.mouse.down();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });

  // test that radio buttons with same name are grouped together
  test("grouped radio buttons", async ({ mount }) => {
    const component = await mount(
      <div>
        <ESInputRadioButton name="group1" value="option1" />
        <ESInputRadioButton name="group1" value="option2" />
      </div>,
    );
    const radioButtons = component.locator('input[type="radio"]');
    const b1 = radioButtons.nth(0);
    const b2 = radioButtons.nth(1);
    await b1.check();
    await expect(b1).toBeChecked();
    await expect(b2).not.toBeChecked();
    await b2.check();
    await expect(b1).not.toBeChecked();
    await expect(b2).toBeChecked();
  });
});
