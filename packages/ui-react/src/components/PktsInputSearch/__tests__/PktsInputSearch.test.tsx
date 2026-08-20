import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputSearch from "../PktsInputSearch";

test.describe("PktsInputSearch", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsInputSearch-variants-${theme}`, async ({ mount }) => {
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
                  <PktsInputSearch placeholder="default" />
                </div>
                <div id="hover-default" style={{ width: "160px" }}>
                  <PktsInputSearch defaultValue="default" />
                </div>
                <div id="focus-default" style={{ width: "160px" }}>
                  <PktsInputSearch defaultValue="default" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch placeholder="default" disabled />
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <div style={{ width: "160px" }}>
                  <PktsInputSearch variant="branded" placeholder="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch variant="branded" defaultValue="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch variant="branded" defaultValue="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch
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
                  <PktsInputSearch error placeholder="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch error defaultValue="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch error defaultValue="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputSearch error placeholder="error" disabled />
                </div>
              </div>
            </div>
          }
        />,
      );
      await component.locator("#focus-default input").focus();
      await component.locator("#hover-default .pkts-input-text").hover();
      await expect(component).toHaveScreenshot(
        `PktsInputSearch-variants-${theme}.png`,
      );
    });
  });

  test("icon clears", async ({ mount }) => {
    const component = await mount(<PktsInputSearch />);
    const input = component.locator("input[type='search']");
    const clearIcon = component.locator("svg");
    await input.fill("test@example.com");
    await expect(input).toHaveValue("test@example.com");
    await clearIcon.click();
    await expect(input).toHaveValue("");
  });
});
