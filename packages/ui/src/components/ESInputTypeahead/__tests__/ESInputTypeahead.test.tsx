import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import ESInputTypeahead from "../ESInputTypeahead";
import { ESInputTypeaheadProps } from "../ESInputTypeahead.types";

const options = [
  {
    id: "option-1",
    value: "Lorem ipsum dolor sit amet",
  },
  {
    id: "option-2",
    value:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "option-3",
    value: "Ut enim ad minim veniam",
  },
  {
    id: "option-4",
    value:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: "option-5",
    value:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

test.describe("ESInputTypeahead", () => {
  const { testTable, themes }: ComponentTestTableType<ESInputTypeaheadProps> = {
    testTable: [
      {
        name: "default",
        props: {
          options: options,
        },
      },
      //   {
      //     name: "empty",
      //     props: {
      //       options: [],
      //     },
      //   },
      //   {
      //     name: "loading",
      //     props: {
      //       options,
      //       loading: true,
      //     },
      //   },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      test(`${name}-${theme}`, async ({ mount }) => {
        test.setTimeout(120_000);
        const testBox = (
          <div
            style={{
              position: "relative",
              padding: "8px",
              height: "340px",
              width: "900px",
            }}
            className={theme}
          >
            <ESInputTypeahead {...props} />
          </div>
        );
        const component = await mount(testBox);
        const input = component.getByRole("textbox");
        await expect(input).toBeVisible();
        await input.fill("m");
        await input.click();
        await expect(
          component.getByRole("listbox", { name: "Typeahead Dropdown Options" })
        ).toBeVisible();
        await component
          .getByRole("button", { name: "Lorem ipsum dolor sit amet" })
          .click();
        await component
          .getByRole("button", { name: "Consectetur adipiscing elit," })
          .focus();
        await component
          .getByRole("button", { name: "Ut enim ad minim veniam" })
          .hover();
        await expect(component).toHaveScreenshot();
      });

      // additionally, test
      if (name !== "default") return;
      test(`actions-${theme}`, async ({ mount }) => {
        const testBox = (
          <div
            style={{
              position: "relative",
              padding: "8px",
              height: "340px",
              width: "900px",
            }}
            className={theme}
          >
            <ESInputTypeahead {...props} />
          </div>
        );
        const component = await mount(testBox);
        const input = component.nth(2);
        await input.getByRole("button").nth(6).click();
        await input.getByRole("button").nth(7).click();
        await input.hover();
        await input.getByRole("button").nth(5).focus();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
