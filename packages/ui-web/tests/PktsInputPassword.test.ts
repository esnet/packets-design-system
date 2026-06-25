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
      <pkts-input-password style="width: 240px;" ${variantAttr} ${errorAttr} placeholder="password"></pkts-input-password>
      <div id="hover-input" style="width: 240px;"><pkts-input-password style="width: 100%;" ${variantAttr} ${errorAttr} value="password"></pkts-input-password></div>
      <div id="focus-input" style="width: 240px;"><pkts-input-password style="width: 100%;" ${variantAttr} ${errorAttr} value="password"></pkts-input-password></div>
      <pkts-input-password style="width: 240px;" ${variantAttr} ${errorAttr} placeholder="password" disabled></pkts-input-password>
    </div>
  `;
}

test.describe("Pkts InputPassword Web Component", () => {
    (["light", "dark"] as Theme[]).forEach((theme) => {
        VARIANTS.forEach(({ key, variant, error }) => {
            test(`PktsInputPassword-${key}-${theme}`, async ({ page }) => {
                const html = createTestHTML(theme, buildInputRow(variant, error));
                await page.setContent(html);
                await page.waitForTimeout(200);
                await page.locator("#focus-input input").focus();
                await page.locator("#hover-input").hover();
                await expect(page.locator("#container")).toHaveScreenshot(`PktsInputPassword-${key}-${theme}.png`);
            });
        });
    });
});
