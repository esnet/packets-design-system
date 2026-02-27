import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsInputDateRangeProps } from "../PktsInputDateRange.types";
import PktsInputDateRange from "../PktsInputDateRange";
test.describe("ESInputDateRange", () => {
  const testTodayDate = new Date(2025, 8, 15);
  const { testTable, themes }: ComponentTestTableType<PktsInputDateRangeProps> = {
    testTable: [
      {
        name: "daterange",
        props: {},
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover", "focus", "active"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      test(`${name}-${theme}`, async ({ page, mount }) => {
        await page.clock.setFixedTime(testTodayDate);
        const component = await mount(
          <div
            className={theme}
            style={{
              position: "relative",
              width: "400px",
              height: "320px",
              padding: "12px",
            }}
          >
            <PktsInputDateRange {...props} />
          </div>,
        );

        const input = component.getByRole("textbox").first();
        await input.click();

        await component.getByRole("button").first().click();
        await component.getByText("14", { exact: true }).first().click();
        await component.getByText("2025").first().click();
        await component.getByText("2020").first().click();
        await component.getByRole("button").nth(1).click();
        await component.getByText("Dec").first().click();
        await component.getByText("14", { exact: true }).first().click();
        await expect(input).toHaveValue("12/14/2020 - 08/14/2025");

        await input.click();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
