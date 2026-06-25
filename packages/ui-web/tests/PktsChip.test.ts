import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
    { key: "default", attrs: "" },
    { key: "outline", attrs: `variant="outline"` },
    { key: "rounded", attrs: "rounded" },
] as const;

function buildChipRow(attrs: string): string {
    return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-chip ${attrs}>Chip</pkts-chip>
      <div id="hover-chip"><pkts-chip ${attrs}>Chip</pkts-chip></div>
      <div id="focus-chip"><pkts-chip ${attrs}>Chip</pkts-chip></div>
      <pkts-chip ${attrs} disabled>Chip</pkts-chip>
    </div>
  `;
}

test.describe("Pkts Chip Web Component", () => {
    (["light", "dark"] as Theme[]).forEach((theme) => {
        VARIANTS.forEach(({ key, attrs }) => {
            test(`PktsChip-${key}-${theme}`, async ({ page }) => {
                const html = createTestHTML(theme, buildChipRow(attrs));
                await page.setContent(html);
                await page.waitForSelector("pkts-chip");
                await page.waitForTimeout(200);
                await page.locator("#focus-chip .pkts-chip").focus();
                await page.locator("#hover-chip").hover();
                await expect(page.locator("#container")).toHaveScreenshot(`PktsChip-${key}-${theme}.png`);
            });
        });
    });
});
