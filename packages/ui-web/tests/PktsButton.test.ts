import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = ["primary", "secondary", "branded", "tertiary", "destructive"] as const;

function buildButtonRow(variant: string): string {
    return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-button variant="${variant}">Button</pkts-button>
      <div id="hover-btn"><pkts-button variant="${variant}">Button</pkts-button></div>
      <div id="focus-btn"><pkts-button variant="${variant}">Button</pkts-button></div>
      <pkts-button variant="${variant}" disabled>Button</pkts-button>
    </div>
  `;
}

test.describe("Pkts Button Web Component", () => {
    (["light", "dark"] as Theme[]).forEach((theme) => {
        VARIANTS.forEach((variant) => {
            test(`PktsButton-${variant}-${theme}`, async ({ page }) => {
                const html = createTestHTML(theme, buildButtonRow(variant));
                await page.setContent(html);
                await page.waitForTimeout(200);
                await page.locator("#focus-btn .pkts-button").focus();
                await page.locator("#hover-btn").hover();
                await expect(page.locator("#container")).toHaveScreenshot(`PktsButton-${variant}-${theme}.png`);
            });
        });
    });
});
