import * as React from "react";
import PktsInputSwitch from "../PktsInputSwitch";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";

test.describe("PktsInputSwitch", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsInputSwitch-variants-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {/* primary unchecked */}
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputSwitch variant="primary" />
                <div id="hover-primary">
                  <PktsInputSwitch variant="primary" />
                </div>
                <div id="focus-primary">
                  <PktsInputSwitch variant="primary" />
                </div>
                <PktsInputSwitch variant="primary" disabled />
              </div>
              {/* primary checked */}
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputSwitch variant="primary" defaultChecked />
                <PktsInputSwitch variant="primary" defaultChecked />
                <PktsInputSwitch variant="primary" defaultChecked />
                <PktsInputSwitch variant="primary" defaultChecked disabled />
              </div>
              {/* secondary unchecked */}
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputSwitch variant="secondary" />
                <PktsInputSwitch variant="secondary" />
                <PktsInputSwitch variant="secondary" />
                <PktsInputSwitch variant="secondary" disabled />
              </div>
              {/* secondary checked */}
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputSwitch variant="secondary" defaultChecked />
                <PktsInputSwitch variant="secondary" defaultChecked />
                <PktsInputSwitch variant="secondary" defaultChecked />
                <PktsInputSwitch variant="secondary" defaultChecked disabled />
              </div>
              {/* noIcon variants */}
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsInputSwitch variant="primary" noIcon />
                <PktsInputSwitch variant="primary" noIcon />
                <PktsInputSwitch variant="primary" noIcon defaultChecked />
                <PktsInputSwitch variant="primary" noIcon disabled />
              </div>
            </div>
          }
        />,
      );
      await component.locator("#focus-primary input").focus();
      await component.locator("#hover-primary input").hover();
      await expect(component).toHaveScreenshot(
        `PktsInputSwitch-variants-${theme}.png`,
      );
    });
  });

  test("functions", async ({ mount }) => {
    const component = (await mount(<PktsInputSwitch />)).locator("input");
    await component.click();
    await expect(component).toBeChecked();
    await component.click();
    await expect(component).not.toBeChecked();
  });
});
