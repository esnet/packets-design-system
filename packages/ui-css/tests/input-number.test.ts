import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "default", classes: "" },
  { key: "branded", classes: " pkts-branded" },
  { key: "error", classes: " pkts-error" },
] as const;

function buildInputRow(classes: string): string {
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <div class="pkts-input-text pkts-input-number${classes}" style="width: 240px;"><input type="number" placeholder="0" /></div>
      <div id="hover-input" class="pkts-input-text pkts-input-number${classes}" style="width: 240px;"><input type="number" value="10" /></div>
      <div id="focus-input" class="pkts-input-text pkts-input-number${classes}" style="width: 240px;"><input type="number" value="10" /></div>
      <div class="pkts-input-text pkts-input-number${classes} pkts-disabled" style="width: 240px;"><input type="number" placeholder="0" disabled /></div>
    </div>
  `;
}

test.describe("Pkts InputNumber Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, classes }) => {
      test(`input-number-${key}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildInputRow(classes));
        await page.setContent(html);
        await page.locator("#focus-input input").focus();
        await page.locator("#hover-input").hover();
        await expect(page.locator("#container")).toHaveScreenshot(`input-number-${key}-${theme}.png`);
      });
    });
  });
});
