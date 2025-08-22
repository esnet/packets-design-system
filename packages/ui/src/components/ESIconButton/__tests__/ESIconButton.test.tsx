import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESIconButtonProps } from "../ESIconButton.types";
import ESIconButton from "../ESIconButton";
test.describe("ESIconButton", () => {
  const { testTable, themes }: ComponentTestTableType<ESIconButtonProps> = {
    testTable: [
      // since ESIconButton is built on top of ESButton, only test the parts specific to ESButton
      {
        name: "default",
        props: {
          name: "settings",
        },
      },
      {
        name: "square",
        props: {
          name: "settings",
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
          component={<ESIconButton {...props} />}
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
