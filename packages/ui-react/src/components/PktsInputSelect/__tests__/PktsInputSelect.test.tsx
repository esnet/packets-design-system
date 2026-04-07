import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import PktsInputOption from "../../PktsInputOption";
import PktsInputSelect from "../PktsInputSelect";
import { PktsInputSelectProps } from "../PktsInputSelect.types";

const options = [
  "foo (test)",
  "bar (test)",
  "baz (test)",
  "fizz",
  "buzz",
  "foo bar baz fizz buzz and any other extremely long text that may demonstrate text overflow",
].map((value) => <PktsInputOption key={value}>{value}</PktsInputOption>);

test.describe("PktsInputSelect", () => {
  const { testTable, themes }: ComponentTestTableType<PktsInputSelectProps> = {
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
          <PktsInputSelect {...props} />
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
