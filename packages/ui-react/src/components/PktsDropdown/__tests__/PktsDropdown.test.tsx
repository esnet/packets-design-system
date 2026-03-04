import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestTableType } from "../../../lib/types/ComponentTestTableType";
import PktsDropdown from "../PktsDropdown";
import { PktsDropdownProps } from "../PktsDropdown.types";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

test.describe("PktsDropdown", () => {
  const { testTable, themes }: ComponentTestTableType<PktsDropdownProps> = {
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
        <ComponentTestBox
          theme={theme}
          style={{ height: 100 }}
          component={<PktsDropdown {...props} />}
        />
      );
      test(`${name}-${theme}`, async ({ mount }) => {
        const component = await mount(testBox);
        await component.getByTestId("dropdown-button").click();
        await expect(component).toHaveScreenshot();
      });
    });
  });
});
