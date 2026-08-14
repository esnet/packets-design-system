import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "default", variant: null, error: false },
  { key: "branded", variant: "branded", error: false },
  { key: "error", variant: null, error: true },
] as const;

function buildInputRow(variant: string | null, error: boolean): string {
  const variantAttr = variant ? `variant="${variant}"` : "";
  const errorAttr = error ? "error" : "";
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-input-number style="width: 240px;" ${variantAttr} ${errorAttr} placeholder="0"></pkts-input-number>
      <div id="hover-input" style="width: 240px;"><pkts-input-number style="width: 100%;" ${variantAttr} ${errorAttr} value="10"></pkts-input-number></div>
      <div id="focus-input" style="width: 240px;"><pkts-input-number style="width: 100%;" ${variantAttr} ${errorAttr} value="10"></pkts-input-number></div>
      <pkts-input-number style="width: 240px;" ${variantAttr} ${errorAttr} placeholder="0" disabled></pkts-input-number>
    </div>
  `;
}

test.describe("Pkts InputNumber Web Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, variant, error }) => {
      test(`PktsInputNumber-${key}-${theme}`, async ({ page }) => {
        const html = createTestHTML(theme, buildInputRow(variant, error));
        await page.setContent(html);
        await page.waitForTimeout(200);
        await page.locator("#focus-input input").focus();
        await page.locator("#hover-input").hover();
        await expect(page.locator("#container")).toHaveScreenshot(
          `PktsInputNumber-${key}-${theme}.png`,
        );
      });
    });
  });
});
