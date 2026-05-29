import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsButton from "../PktsButton";

const VARIANTS = [
  "primary",
  "secondary",
  "tertiary",
  "destructive",
  "branded",
] as const;

test.describe("PktsButton", () => {
  const themes: ("light" | "dark")[] = ["light", "dark"];
  themes.forEach((theme) => {
    VARIANTS.forEach((variant) => {
      test(`PktsButton-${variant}-${theme}`, async ({ mount }) => {
        const component = await mount(
          <ComponentTestBox
            theme={theme}
            component={
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <PktsButton variant={variant}>Button</PktsButton>
                <div id="hover-wrap">
                  <PktsButton variant={variant}>Button</PktsButton>
                </div>
                <div id="focus-wrap">
                  <PktsButton variant={variant}>Button</PktsButton>
                </div>
                <PktsButton variant={variant} disabled>
                  Button
                </PktsButton>
              </div>
            }
          />,
        );
        await component.locator("#focus-wrap .pkts-button").focus();
        await component.locator("#hover-wrap .pkts-button").hover();
        await expect(component).toHaveScreenshot(
          `PktsButton-${variant}-${theme}.png`,
        );
      });
    });
  });
});
