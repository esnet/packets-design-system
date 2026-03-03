import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsInputDatePickerProps } from "../PktsInputDatePicker.types";
import PktsInputDatePicker from "../PktsInputDatePicker";
test.describe("ESInputDatePicker", () => {
  const testTodayDate = new Date(2025, 7, 6);
  const testSelectedDate = new Date(2025, 7, 13, 6, 30, 30, 30);
  const { testTable, themes }: ComponentTestTableType<PktsInputDatePickerProps> =
    {
      testTable: [
        {
          name: "date",
          props: {
            type: "date",
            value: testSelectedDate,
          },
        },
        {
          name: "time",
          props: {
            type: "time",
            value: testSelectedDate,
          },
        },
        {
          name: "datetime",
          props: {
            type: "datetime",
            value: testSelectedDate,
          },
        },
        {
          name: "daterange",
          props: {
            type: "daterange",
            value: new Date(2025, 8, 8),
            rangeEndValue: new Date(2025, 8, 24),
          },
        },
      ],
      themes: ["light", "dark"],
      actionStates: [],
    };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      test(`${name}-${theme}`, async ({ page, mount }) => {
        await page.clock.setFixedTime(testTodayDate);
        const testBox = await mount(
          <div className={theme} style={{ position: "relative" }}>
            <PktsInputDatePicker {...props} />
          </div>,
        );
        const datePickerComponent = testBox.locator("div").first();
        if (props.type === "date") {
          // hover on aug 20
          const aug20Button = testBox.getByText("20", { exact: true }).first();
          await aug20Button.hover();
          // focus on aug 27
          const aug27Button = testBox.getByText("27", { exact: true }).last();
          await aug27Button.focus();
        }
        if (props.type === "time" || props.type === "datetime") {
          // hover on hour 7
          const hr7Button = testBox.getByText("7", { exact: true }).last();
          await hr7Button.hover();
          // focus on minute 35
          const min35Button = testBox.getByText("35", { exact: true }).last();
          await min35Button.focus();
        }
        await expect(datePickerComponent).toHaveScreenshot();
      });
    });
  });

  // various other tests
  themes.forEach((theme) => {
    // test year and month selection screens
    test(`month-select-${theme}`, async ({ page, mount }) => {
      await page.clock.setFixedTime(testTodayDate);
      const testBox = await mount(
        <div className={theme} style={{ position: "relative" }}>
          <PktsInputDatePicker type="date" value={testSelectedDate} />
        </div>,
      );
      const datePickerComponent = testBox.locator("div").first();
      const monthButton = testBox
        .getByRole("button")
        .getByText("Aug", { exact: true });
      await monthButton.click();
      const monthMay = testBox.getByText("May").first();
      await monthMay.hover();
      await expect(datePickerComponent).toHaveScreenshot();
    });
    test(`year-select-${theme}`, async ({ page, mount }) => {
      await page.clock.setFixedTime(testTodayDate);
      const testBox = await mount(
        <div className={theme} style={{ position: "relative" }}>
          <PktsInputDatePicker type="date" value={testSelectedDate} />
        </div>,
      );
      const datePickerComponent = testBox.locator("div").first();
      const yearButton = testBox
        .getByRole("button")
        .getByText("2025", { exact: true });
      await yearButton.click();
      const year2024Button = testBox.getByText("2024").first();
      await year2024Button.hover();
      await expect(datePickerComponent).toHaveScreenshot();
    });

    // a poor substitute for functionality tests, but will let us know asap if the settings stop working
    test(`settings-applied-${theme}`, async ({ page, mount }) => {
      await page.clock.setFixedTime(testTodayDate);
      const testBox = await mount(
        <div className={theme} style={{ position: "relative" }}>
          <PktsInputDatePicker
            type="datetime"
            dateSettings={{
              min: new Date(2025, 7, 6 - 6),
              max: new Date(2025, 7, 6 + 1),
            }}
            timeSettings={{
              format: "24-hour",
              hour: {
                step: 6,
              },
              minute: {
                min: 27,
                max: 36,
                step: 3,
              },
              second: {
                step: 1,
              },
            }}
            value={testSelectedDate}
          />
        </div>,
      );
      const datePickerComponent = testBox.locator("div").first();
      await expect(datePickerComponent).toHaveScreenshot();
    });
  });
});
