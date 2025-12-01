import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESButtonProps } from "../ESButton.types";
import ESButton from "../ESButton";
import ESIcon from "../../ESIcon";

test.describe("ESButton", () => {
  const {
    testTable,
    themes,
    actionStates,
  }: ComponentTestTableType<ESButtonProps> = {
    testTable: [
      {
        name: "primary",
        props: {
          variant: "primary",
          children: "primary",
        },
      },
      {
        name: "secondary",
        props: {
          variant: "secondary",
          children: "secondary",
        },
      },
      {
        name: "branded",
        props: {
          variant: "branded",
          children: "branded",
        },
      },
      {
        name: "tertiary",
        props: {
          variant: "tertiary",
          children: "tertiary",
        },
      },
      {
        name: "destructive",
        props: {
          variant: "destructive",
          children: "destructive",
        },
      },
      {
        name: "disabled",
        props: {
          variant: "primary",
          children: "disabled",
          disabled: true,
        },
      },
      {
        name: "prepend-append",
        props: {
          variant: "primary",
          children: "surrounded by icons",
          append: <ESIcon name="link" />,
          prepend: <ESIcon name="arrow-up-right-from-square" />,
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox component={<ESButton {...props} />} theme={theme} />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await expect(component).toHaveScreenshot();
      });
      actionStates.forEach((state) => {
        test(`${name}-${theme}-${state}`, async ({ mount }) => {
          // @ts-ignore
          if (props.disabled) return; // skip if component is disabled

          const component = await mount(testBox);
          if (state === "hover") await component.hover();
          await expect(component).toHaveScreenshot();
        });
      });
    });
  });
});
