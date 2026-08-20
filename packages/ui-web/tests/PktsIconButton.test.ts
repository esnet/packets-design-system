import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  "primary",
  "secondary",
  "branded",
  "tertiary",
  "destructive",
] as const;

function buildIconButtonRow(variant: string): string {
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-icon-button variant="${variant}"><pkts-icon name="ArrowUp"></pkts-icon></pkts-icon-button>
      <div id="hover-btn"><pkts-icon-button variant="${variant}"><pkts-icon name="ArrowUp"></pkts-icon></pkts-icon-button></div>
      <div id="focus-btn"><pkts-icon-button variant="${variant}"><pkts-icon name="ArrowUp"></pkts-icon></pkts-icon-button></div>
      <pkts-icon-button variant="${variant}" disabled><pkts-icon name="ArrowUp"></pkts-icon></pkts-icon-button>
    </div>
  `;
}

test.describe("Pkts IconButton Web Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach((variant) => {
      test(`PktsIconButton-${variant}-${theme}`, async ({ page }) => {
        const html = createTestHTML(theme, buildIconButtonRow(variant));
        await page.setContent(html);
        await page.waitForSelector("pkts-icon-button");
        await page.waitForTimeout(200);
        await page.locator("#focus-btn .pkts-icon-button").focus();
        await page.locator("#hover-btn").hover();
        await expect(page.locator("#container")).toHaveScreenshot(
          `PktsIconButton-${variant}-${theme}.png`,
        );
      });
    });
  });
});
