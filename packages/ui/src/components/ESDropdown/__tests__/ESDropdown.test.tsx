import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ESDropdownProps } from "../ESDropdown.types";
import ESDropdown from "../ESDropdown";
test.describe("ESDropdown", () => {
  const { testTable, themes }: ComponentTestTableType<ESDropdownProps> = {
    testTable: [
      {
        name: "default",
        props: {
          anchor: <button data-testid="dropdown-button">open button</button>,
          children: <div>dropdown content</div>,
        },
      },
      {
        name: "caret",
        props: {
          anchor: <button data-testid="dropdown-button">open button</button>,
          caret: true,
          children: <div>dropdown content</div>,
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <div className={theme} style={{ height: 160, width: 160 }}>
          <ESDropdown {...props} />
        </div>
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await component.getByTestId("dropdown-button").click();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
