import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESTabsProps } from "../ESTabs.types";
import { ESTabs, ESTab } from "../index";

test.describe("ESTabs", () => {
  const tabs = [
    <ESTab active key={0}>
      Active Tab
    </ESTab>,
    <ESTab key={1}>Hover Tab 1</ESTab>,
    <ESTab key={2}>Focus Tab 2</ESTab>,
    <ESTab key={3}>Default Tab 2</ESTab>,
  ];
  const { testTable, themes }: ComponentTestTableType<ESTabsProps> = {
    testTable: [
      {
        name: "default",
        props: {
          children: tabs,
        },
      },
      {
        name: "branded-fullwidth",
        props: {
          children: tabs,
          branded: true,
          fullWidth: true,
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
          component={
            <div style={{ width: "600px" }}>
              <ESTabs {...props} />
            </div>
          }
          theme={theme}
        />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);

        await component.getByRole("button").nth(1).hover();
        await component.getByRole("button").nth(2).focus();

        await expect(component).toHaveScreenshot();
      });
    });
  });
});
