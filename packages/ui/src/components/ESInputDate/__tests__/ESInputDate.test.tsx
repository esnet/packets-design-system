import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESInputDateProps } from "../ESInputDate.types";
import ESInputDate from "../ESInputDate";
test.describe("ESInputDate", () => {
  const testTodayDate = new Date(2025, 7, 6);
  const { testTable, themes }: ComponentTestTableType<ESInputDateProps> = {
    testTable: [
      {
        name: "datetime",
        props: {
          type: "datetime",
          defaultValue: testTodayDate,
        },
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
            <ESInputDate {...props} />
          </div>
        );

        const input = component.getByRole("textbox").first();
        await input.click();

        await component.getByText("Aug").first().click();
        await component.getByRole("button").first().click();
        await component.getByText("Dec").first().click();
        await component.getByText("14", { exact: true }).first().click();
        await component.getByText("6", { exact: true }).last().click();
        await component.getByText("30", { exact: true }).last().click();
        await component.getByText("PM", { exact: true }).last().click();
        await expect(input).toHaveValue("12/14/2024 6:00:30 PM");

        await input.click();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
