import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { PktsChipProps } from "../PktsChip.types";
import PktsChip from "../PktsChip";
test.describe("ESChip", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<PktsChipProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          children: "Primary Label",
        },
      },
      {
        name: "outline",
        props: {
          children: "Outline Label",
          variant: "outline",
        },
      },
      {
        name: "not-rounded",
        props: {
          children: "Not Rounded Label",
          rounded: false,
        },
      },
      {
        name: "delete",
        props: {
          children: "Delete Label",
          onDelete: () => {},
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<PktsChip {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          if (props.disabled) return; // skip if component is disabled

          const component = await mount(testBox);
          if (state === "hover") await component.hover();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });
});
