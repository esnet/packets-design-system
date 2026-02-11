import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESInputSelectProps } from "../ESInputSelect.types";
import ESInputSelect from "../ESInputSelect";
import ESInputOption from "../../ESInputOption";

const options = [
  "foo (test)",
  "bar (test)",
  "baz (test)",
  "fizz",
  "buzz",
  "foo bar baz fizz buzz and any other extremely long text that may demonstrate text overflow",
].map((value) => <ESInputOption key={value}>{value}</ESInputOption>);

test.describe("ESInputSelect", () => {
  const { testTable, themes }: ComponentTestTableType<ESInputSelectProps> = {
    testTable: [
      {
        name: "default",
        props: {
          children: options,
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
            height: "300px",
            width: "500px",
          }}
          className={theme}
        >
          <ESInputSelect {...props} />
        </div>
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);

        const input = component.getByRole("combobox");
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
