import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESDatumProps } from "../ESDatum.types";
import ESDatum from "../ESDatum";

test.describe("ESDatum", () => {
  const { testTable, themes }: ComponentTestTableType<ESDatumProps> = {
    testTable: [
      {
        name: "default",
        props: {
          title: "Label",
          children: "Value",
        },
      },
      {
        name: "long-value",
        props: {
          title: "Status",
          children: "This is a longer value to test text wrapping",
        },
      },
    ],
    actionStates: [],
    themes: ["light", "dark"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      let themedComponent = <ESDatum {...props} />;
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
