import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>`;

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
      <button class="pkts-icon-button pkts-${variant}">${ICON_SVG}</button>
      <button id="hover-btn" class="pkts-icon-button pkts-${variant}">${ICON_SVG}</button>
      <button id="focus-btn" class="pkts-icon-button pkts-${variant}">${ICON_SVG}</button>
      <button class="pkts-icon-button pkts-${variant}" disabled>${ICON_SVG}</button>
    </div>
  `;
}

test.describe("Pkts IconButton Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach((variant) => {
      test(`icon-button-${variant}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildIconButtonRow(variant));
        await page.setContent(html);
        await page.locator("#focus-btn").focus();
        await page.locator("#hover-btn").hover();
        await expect(page.locator("#container")).toHaveScreenshot(
          `icon-button-${variant}-${theme}.png`,
        );
      });
    });
  });
});
