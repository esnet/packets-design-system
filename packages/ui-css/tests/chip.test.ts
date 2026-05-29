import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "default", classes: "" },
  { key: "outline", classes: " pkts-outline" },
  { key: "rounded", classes: " pkts-rounded" },
] as const;

function buildChipRow(classes: string): string {
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <button class="pkts-chip${classes}">Chip</button>
      <button id="hover-chip" class="pkts-chip${classes}">Chip</button>
      <button id="focus-chip" class="pkts-chip${classes}">Chip</button>
      <button class="pkts-chip${classes}" disabled>Chip</button>
    </div>
  `;
}

test.describe("Pkts Chip Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, classes }) => {
      test(`chip-${key}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildChipRow(classes));
        await page.setContent(html);
        await page.locator("#focus-chip").focus();
        await page.locator("#hover-chip").hover();
        await expect(page.locator("#container")).toHaveScreenshot(`chip-${key}-${theme}.png`);
      });
    });
  });
});
