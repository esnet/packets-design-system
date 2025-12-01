import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESInputSelectProps } from "../ESInputSelect.types";
import ESInputSelect from "../ESInputSelect";
test.describe("ESInputSelect", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESInputSelectProps> = {
    testTable: [
      {
        name: "default",
        props: {
          options: ["foo", "bar", "baz"],
        },
      },
      {
        name: "options",
        props: {
          options: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "Ut enim ad minim veniam",
            "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            "Excepteur sint occaecat cupidatat non proident",
            "sunt in culpa qui officia deserunt mollit anim id est laborum",
          ],
          error: true,
          defaultValue: "Default Value",
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <div
          style={{
            padding: "8px",
            height: "340px",
            width: "900px",
          }}
          className={theme}
        >
          <ESInputSelect options={props.options} />
        </div>
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);

        const input = component.getByRole("textbox");
        await input.click();
        await component.getByRole("option").nth(2).click();
        await input.click();
        await component.getByRole("option").nth(0).hover();
        await component.getByRole("option").nth(1).focus();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
