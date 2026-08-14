import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputTextArea from "../PktsInputTextArea";

test.describe("PktsInputTextArea", () => {
  ["light", "dark"].forEach((theme: any) => {
    test(`PktsInputTextArea-variants-${theme}`, async ({ mount }) => {
      const component = await mount(
        <ComponentTestBox
          theme={theme}
          component={
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea variant="primary" placeholder="primary" />
                </div>
                <div id="hover-primary" style={{ width: "160px" }}>
                  <PktsInputTextArea variant="primary" defaultValue="primary" />
                </div>
                <div id="focus-primary" style={{ width: "160px" }}>
                  <PktsInputTextArea variant="primary" defaultValue="primary" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea
                    variant="primary"
                    placeholder="primary"
                    disabled
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea variant="branded" placeholder="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea variant="branded" defaultValue="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea variant="branded" defaultValue="branded" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea
                    variant="branded"
                    placeholder="branded"
                    disabled
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea error placeholder="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea error defaultValue="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea error defaultValue="error" />
                </div>
                <div style={{ width: "160px" }}>
                  <PktsInputTextArea error placeholder="error" disabled />
                </div>
              </div>
            </div>
          }
        />,
      );
      await component.locator("#focus-primary textarea").focus();
      await component.locator("#hover-primary textarea").hover();
      await expect(component).toHaveScreenshot(
        `PktsInputTextArea-variants-${theme}.png`,
      );
    });
  });
});
