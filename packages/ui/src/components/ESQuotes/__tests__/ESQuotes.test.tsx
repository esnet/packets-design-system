import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESQuotesProps } from "../ESQuotes.types";
import ESQuotes from "../ESQuotes";
test.describe("ESQuotes", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESQuotesProps> = {
    testTable: [
      {
        name: "block",
        props: {
          quoteType: "block",
          children:
            "No individual is alone responsible for a single stepping stone along the path of progress, and where the path is smooth progress is most rapid.",
        },
      },
      {
        name: "pull",
        props: {
          quoteType: "pull",
          children:
            "No individual is alone responsible for a single stepping stone along the path of progress, and where the path is smooth progress is most rapid.",
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<ESQuotes {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
