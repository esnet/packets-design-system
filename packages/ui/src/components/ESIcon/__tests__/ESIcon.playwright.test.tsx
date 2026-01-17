import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESIconProps } from "../ESIcon.types";
import ESIcon from "../ESIcon";

test.describe("ESIcon", () => {
  const { testTable, themes }: ComponentTestTableType<ESIconProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          name: "apple",
        },
      },
      {
        name: "branded",
        props: {
          name: "chevron-down",
        },
      },
    ],
    actionStates: [],
    themes: ["light", "dark"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = (
        <div className={theme}>
          <ESIcon {...props} />
        </div>
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = (await mount(themedComponent)).locator("svg");
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
