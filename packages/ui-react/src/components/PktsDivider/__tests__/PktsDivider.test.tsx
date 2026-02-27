import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { PktsDividerProps } from "../PktsDivider.types";
import PktsDivider from "../PktsDivider";

test.describe("ESDivider", () => {
  const { testTable, themes }: ComponentTestTableType<PktsDividerProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          variant: "primary",
        },
      },
      {
        name: "branded",
        props: {
          variant: "branded",
        },
      },
    ],
    actionStates: [],
    themes: ["light", "dark"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = <PktsDivider {...props} />;
      if (theme === "dark") {
        themedComponent = <div className="dark">{themedComponent}</div>;
      }
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(themedComponent);
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
