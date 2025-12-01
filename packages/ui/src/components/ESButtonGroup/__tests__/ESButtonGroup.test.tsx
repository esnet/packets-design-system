import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESButtonGroupProps } from "../ESButtonGroup.types";
import ESButtonGroup from "../ESButtonGroup";
import ESButton from "../../ESButton/ESButton";
import ESIcon from "../../ESIcon";
import ESIconButton from "../../ESIconButton";

test.describe("ESButtonGroup", () => {
  const { testTable, themes }: ComponentTestTableType<ESButtonGroupProps> = {
    testTable: [
      {
        name: "horizontal",
        props: {
          children: (
            <>
              <ESButton variant="primary">Button 1</ESButton>
              <ESButton variant="secondary">Button 2</ESButton>
              <ESButton variant="tertiary">Button 3</ESButton>
              <ESButton variant="branded">Button 4</ESButton>
              <ESButton variant="destructive">Button 5</ESButton>
            </>
          ),
          direction: "horizontal",
        },
      },
      {
        name: "vertical",
        props: {
          children: (
            <>
              <ESButton variant="primary">Button 1</ESButton>
              <ESButton variant="secondary">Button 2</ESButton>
              <ESButton variant="tertiary">Button 3</ESButton>
              <ESButton variant="branded">Button 4</ESButton>
              <ESButton variant="destructive">Button 5</ESButton>
            </>
          ),
          direction: "vertical",
        },
      },
      {
        name: "label",
        props: {
          children: (
            <>
              <ESButton variant="primary">Button 1</ESButton>
              <ESButton variant="secondary">Button 2</ESButton>
              <ESButton variant="tertiary">Button 3</ESButton>
              <ESButton variant="branded">Button 4</ESButton>
              <ESButton variant="destructive">Button 5</ESButton>
            </>
          ),
          label: "A Collection of Buttons",
          direction: "vertical",
        },
      },
      {
        name: "icon",
        props: {
          children: (
            <>
              <ESButton variant="branded" append={<ESIcon name="link" />}>
                Button 1
              </ESButton>
              <ESIconButton variant="branded" name="settings" square />
              <ESIconButton variant="branded" name="bookmark" square />
            </>
          ),
          label: "Icon Buttons",
        },
      },
    ],
    themes: ["light"],
    actionStates: [],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <ComponentTestBox
          component={<ESButtonGroup {...props} />}
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
