import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsDropdown from "../PktsDropdown";

test.describe("PktsDropdown", () => {
  const themes: ("light" | "dark")[] = ["light", "dark"];
  themes.forEach((theme) => {
    test(`dropdown-default-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          style={{ minHeight: "200px" }}
          component={
            <PktsDropdown anchor={<button data-testid="btn">Open Menu</button>}>
              <div style={{ padding: "8px" }}>Dropdown content</div>
            </PktsDropdown>
          }
        />,
      );
      await component.getByTestId("btn").click();
      await expect(component).toHaveScreenshot(
        `PktsDropdown-default-${theme}.png`,
      );
    });

    test(`dropdown-caret-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          style={{ minHeight: "200px" }}
          component={
            <PktsDropdown
              caret
              anchor={<button data-testid="btn">Open Menu</button>}
            >
              <div style={{ padding: "8px" }}>Dropdown content</div>
            </PktsDropdown>
          }
        />,
      );
      await component.getByTestId("btn").click();
      await expect(component).toHaveScreenshot(
        `PktsDropdown-caret-${theme}.png`,
      );
    });
  });
});
