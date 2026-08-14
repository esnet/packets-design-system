import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputCheckbox from "../PktsInputCheckbox";

test.describe("PktsInputCheckbox", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsInputCheckbox-variants-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputCheckbox variant="primary" />
                <div id="hover-unchecked">
                  <PktsInputCheckbox variant="primary" />
                </div>
                <div id="focus-unchecked">
                  <PktsInputCheckbox variant="primary" />
                </div>
                <PktsInputCheckbox variant="primary" disabled />
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputCheckbox variant="primary" defaultChecked />
                <PktsInputCheckbox variant="primary" defaultChecked />
                <PktsInputCheckbox variant="primary" defaultChecked />
                <PktsInputCheckbox variant="primary" defaultChecked disabled />
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputCheckbox variant="branded" />
                <PktsInputCheckbox variant="branded" />
                <PktsInputCheckbox variant="branded" />
                <PktsInputCheckbox variant="branded" disabled />
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputCheckbox variant="branded" defaultChecked />
                <PktsInputCheckbox variant="branded" defaultChecked />
                <PktsInputCheckbox variant="branded" defaultChecked />
                <PktsInputCheckbox variant="branded" defaultChecked disabled />
              </div>
            </div>
          }
        />,
      );
      await component
        .locator("#focus-unchecked input[type='checkbox']")
        .focus();
      await component
        .locator("#hover-unchecked input[type='checkbox']")
        .hover();
      await expect(component).toHaveScreenshot(
        `PktsInputCheckbox-variants-${theme}.png`,
      );
    });
  });
});
