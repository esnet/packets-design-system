import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";

import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { PktsDatumProps } from "../PktsDatum.types";
import PktsDatum from "../PktsDatum";

test.describe("PktsDatum", () => {
  const { testTable, themes }: ComponentTestTableType<PktsDatumProps> = {
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
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(
          <ComponentTestBox
            theme={theme}
            size="fit"
            component={
              <div style={{ width: "120px" }}>
                <PktsDatum {...props} />
              </div>
            }
          />,
        );
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
