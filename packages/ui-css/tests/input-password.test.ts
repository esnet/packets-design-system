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
      <div class="pkts-input-text pkts-input-password${classes}" style="width: 240px;"><input type="password" placeholder="password" /></div>
      <div id="hover-input" class="pkts-input-text pkts-input-password${classes}" style="width: 240px;"><input type="password" value="password" /></div>
      <div id="focus-input" class="pkts-input-text pkts-input-password${classes}" style="width: 240px;"><input type="password" value="password" /></div>
      <div class="pkts-input-text pkts-input-password${classes} pkts-disabled" style="width: 240px;"><input type="password" placeholder="password" disabled /></div>
    </div>
  `;
}

test.describe("Pkts InputPassword Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, classes }) => {
      test(`input-password-${key}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildInputRow(classes));
        await page.setContent(html);
        await page.locator("#focus-input input").focus();
        await page.locator("#hover-input").hover();
        await expect(page.locator("#container")).toHaveScreenshot(
          `input-password-${key}-${theme}.png`,
        );
      });
    });
  });
});
