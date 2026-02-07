import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESChipGroupProps } from "../ESChipGroup.types";
import ESChipGroup from "../ESChipGroup";
import ESChip from "../../ESChip/ESChip";
import ESAvatar from "../../ESAvatar";
test.describe("ESChipGroup", () => {
  const { testTable, themes }: ComponentTestTableType<ESChipGroupProps> = {
    testTable: [
      {
        name: "example",
        props: {
          children: Array.from({ length: 10 }).map((_, i) => (
            <ESChip
              variant={i % 2 === 0 ? "outline" : "primary"}
              rounded={i % 3 === 0}
              onDelete={i % 5 === 0 ? () => {} : undefined}
              prepend={
                i % 7 === 0 ? <ESAvatar alt="CH" size="small" /> : undefined
              }
              key={i}
            >
              CHIP-XYZ{`${i}`.repeat(i + 1)}
            </ESChip>
          )),
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
          size="large"
          component={<ESChipGroup {...props} />}
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
