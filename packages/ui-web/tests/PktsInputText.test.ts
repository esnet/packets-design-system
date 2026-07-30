import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "default", variant: null, error: false },
  { key: "branded", variant: "branded", error: false },
  { key: "error", variant: null, error: true },
] as const;

function buildInputRow(
  variant: string | null,
  error: boolean,
  key: string,
): string {
  const variantAttr = variant ? `variant="${variant}"` : "";
  const errorAttr = error ? "error" : "";
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-input-text style="width: 240px;" ${variantAttr} ${errorAttr} placeholder="${key}"></pkts-input-text>
      <div id="hover-input" style="width: 240px;"><pkts-input-text style="width: 100%;" ${variantAttr} ${errorAttr} value="${key}"></pkts-input-text></div>
      <div id="focus-input" style="width: 240px;"><pkts-input-text style="width: 100%;" ${variantAttr} ${errorAttr} value="${key}"></pkts-input-text></div>
      <pkts-input-text style="width: 240px;" ${variantAttr} ${errorAttr} placeholder="${key}" disabled></pkts-input-text>
    </div>
  `;
}

test.describe("Pkts InputText Web Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, variant, error }) => {
      test(`PktsInputText-${key}-${theme}`, async ({ page }) => {
        const html = createTestHTML(theme, buildInputRow(variant, error, key));
        await page.setContent(html);
        await page.waitForTimeout(200);
        await page.locator("#focus-input input").focus();
        await page.locator("#hover-input").hover();
        await expect(page.locator("#container")).toHaveScreenshot(
          `PktsInputText-${key}-${theme}.png`,
        );
      });
    });
  });
});
