import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { PktsChipGroupProps } from "../PktsChipGroup.types";
import PktsChipGroup from "../PktsChipGroup";
import PktsChip from "../../PktsChip/PktsChip";
import PktsAvatar from "../../PktsAvatar";
test.describe("PktsChipGroup", () => {
  const { testTable, themes }: ComponentTestTableType<PktsChipGroupProps> = {
    testTable: [
      {
        name: "example",
        props: {
          children: Array.from({ length: 10 }).map((_, i) => (
            <PktsChip
              variant={i % 2 === 0 ? "outline" : "primary"}
              rounded={i % 3 === 0}
              onDelete={i % 5 === 0 ? () => {} : undefined}
              prepend={
                i % 7 === 0 ? <PktsAvatar alt="CH" size="small" /> : undefined
              }
              key={i}
            >
              CHIP-XYZ{`${i}`.repeat(i + 1)}
            </PktsChip>
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
          component={<PktsChipGroup {...props} />}
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
