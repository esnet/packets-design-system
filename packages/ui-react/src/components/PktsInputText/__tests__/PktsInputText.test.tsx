import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputText from "../PktsInputText";

test.describe("PktsInputText", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsInputText-variants-${theme}`, async ({ mount }) => {
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
                <div style={{ width: "160px" }}>
                  <PktsInputText placeholder="default" />
                </div>
                <div id="hover-default" style={{ width: "160px" }}>
                  <PktsInputText defaultValue="default" />
                </div>
                <div id="focus-default" style={{ width: "160px" }}>
                  <PktsInputText defaultValue="default" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText placeholder="default" disabled />
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <div style={{ width: "160px" }}>
                  <PktsInputText variant="branded" placeholder="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText variant="branded" defaultValue="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText variant="branded" defaultValue="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText
                    variant="branded"
                    placeholder="branded"
                    disabled
                  />
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <div style={{ width: "160px" }}>
                  <PktsInputText error placeholder="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText error defaultValue="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText error defaultValue="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputText error placeholder="error" disabled />
                </div>
              </div>
            </div>
          }
        />,
      );
      await component.locator("#focus-default input").focus();
      await component.locator("#hover-default .pkts-input-text").hover();
      await expect(component).toHaveScreenshot(
        `PktsInputText-variants-${theme}.png`,
      );
    });
  });

  test("can change value", async ({ mount }) => {
    const component = await mount(<PktsInputText />);
    const input = component.locator("input");
    await input.clear();
    await expect(input).toHaveValue("");
  });
});
