import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESCommaSeperatedListProps } from "../ESCommaSeperatedList.types";
import ESCommaSeperatedList from "../ESCommaSeperatedList";
test.describe("ESCommaSeperatedList", () => {
  const {
    testTable,
    themes,
  }: ComponentTestTableType<ESCommaSeperatedListProps> = {
    testTable: [
      {
        name: "empty",
        props: {
          items: [],
        },
      },
      {
        name: "three-items",
        props: {
          items: ["Item 1", "Item 2", "Item 3"],
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox
          component={
            <span>
              This test uses ESCommaSeperatedList inside of a span tag:{" "}
              <ESCommaSeperatedList {...props} />
            </span>
          }
          theme={theme}
        />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
