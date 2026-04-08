import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { PktsButtonProps } from "../PktsButton.types";
import PktsButton from "../PktsButton";

test.describe("ESButton", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<PktsButtonProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          children: "Primary",
          variant: "primary",
        },
      },
      {
        name: "secondary",
        props: {
          children: "Secondary",
          variant: "secondary",
        },
      },
      {
        name: "branded",
        props: {
          children: "Branded",
          variant: "branded",
        },
      },
      {
        name: "tertiary",
        props: {
          children: "Tertiary",
          variant: "tertiary",
        },
      },
      {
        name: "destructive",
        props: {
          children: "Destructive",
          variant: "destructive",
        },
      },
      {
        name: "primary-disabled",
        props: {
          children: "Disabled",
          variant: "primary",
          disabled: true,
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };

  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<PktsButton {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          if ("disabled" in props && props.disabled) return; // skip if component is disabled

          const component = await mount(testBox);
          if (state === "hover") await component.hover();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });
});
