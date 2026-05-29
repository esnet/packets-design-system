import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputRadioButton from "../PktsInputRadioButton";

test.describe("PktsInputRadioButton", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsInputRadioButton-variants-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputRadioButton name="unselected-default" />
                <div id="hover-unselected">
                  <PktsInputRadioButton name="unselected-hover" />
                </div>
                <div id="focus-unselected">
                  <PktsInputRadioButton name="unselected-focus" />
                </div>
                <PktsInputRadioButton name="unselected-disabled" disabled />
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputRadioButton name="selected-default" defaultChecked />
                <PktsInputRadioButton name="selected-hover" defaultChecked />
                <PktsInputRadioButton name="selected-focus" defaultChecked />
                <PktsInputRadioButton
                  name="selected-disabled"
                  defaultChecked
                  disabled
                />
              </div>
            </div>
          }
        />,
      );
      await component.locator("#focus-unselected input[type='radio']").focus();
      await component.locator("#hover-unselected input[type='radio']").hover();
      await expect(component).toHaveScreenshot(
        `PktsInputRadioButton-variants-${theme}.png`,
      );
    });
  });

  test("grouped radio buttons", async ({ mount }) => {
    const component = await mount(
      <div>
        <PktsInputRadioButton name="group1" value="option1" />
        <PktsInputRadioButton name="group1" value="option2" />
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
