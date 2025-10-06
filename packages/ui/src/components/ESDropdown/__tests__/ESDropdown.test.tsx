import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import { ESDropdownProps } from "../ESDropdown.types";
import ESDropdown from "../ESDropdown";
import ESDropdownAnchor from "../ESDropdownAnchor";
import ESDropdownContent from "../ESDropdownContent";
test.describe("ESDropdown", () => {
  const { testTable, themes }: ComponentTestTableType<ESDropdownProps> = {
    testTable: [
      {
        name: "default",
        props: {
          children: [
            <ESDropdownAnchor key="a">
              <button data-testid="dropdown-button">open button</button>
            </ESDropdownAnchor>,
            <ESDropdownContent key="b" style={{ padding: 16 }}>
              dropdown content
            </ESDropdownContent>,
          ],
        },
      },
      {
        name: "carat",
        props: {
          carat: true,
          children: [
            <ESDropdownAnchor key="a">
              <button data-testid="dropdown-button">open button</button>
            </ESDropdownAnchor>,
            <ESDropdownContent key="b" style={{ padding: 16 }}>
              dropdown content
            </ESDropdownContent>,
          ],
        },
      },
    ],
    themes: ["light", "dark"],
    actionStates: ["hover"],
  };
  testTable.forEach(({ name, props }) => {
    themes.forEach((theme) => {
      const testBox = (
        <div className={theme} style={{ height: 60, width: 60 }}>
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
