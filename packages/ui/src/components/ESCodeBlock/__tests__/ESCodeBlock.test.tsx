import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESCodeBlockProps } from "../ESCodeBlock.types";
import ESCodeBlock from "../ESCodeBlock";
test.describe("ESCodeBlock", () => {
  const { testTable, themes }: ComponentTestTableType<ESCodeBlockProps> = {
    testTable: [
      {
        name: "default",
        props: {
          language: "python",
          code: `def add_numbers(num1, num2):
    return num1 + num2
result  = add_numbers(5, 3)
print(f"The sum is: {result}")`,
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover", "focus", "active"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox
          component={<ESCodeBlock {...props} />}
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
