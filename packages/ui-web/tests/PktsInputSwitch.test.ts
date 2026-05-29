import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
    { key: "unchecked", checked: false, secondary: false },
    { key: "checked", checked: true, secondary: false },
    { key: "unchecked-secondary", checked: false, secondary: true },
    { key: "checked-secondary", checked: true, secondary: true },
] as const;

function buildSwitchRow(checked: boolean, secondary: boolean): string {
    const checkedAttr = checked ? "checked" : "";
    const variantAttr = secondary ? `variant="secondary"` : "";
    return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-input-switch ${variantAttr} ${checkedAttr}></pkts-input-switch>
      <div id="hover-switch"><pkts-input-switch ${variantAttr} ${checkedAttr}></pkts-input-switch></div>
      <div id="focus-switch"><pkts-input-switch ${variantAttr} ${checkedAttr}></pkts-input-switch></div>
      <pkts-input-switch ${variantAttr} ${checkedAttr} disabled></pkts-input-switch>
    </div>
  `;
}

test.describe("Pkts InputSwitch Web Component", () => {
    (["light", "dark"] as Theme[]).forEach((theme) => {
        VARIANTS.forEach(({ key, checked, secondary }) => {
            test(`PktsInputSwitch-${key}-${theme}`, async ({ page }) => {
                const html = createTestHTML(theme, buildSwitchRow(checked, secondary));
                await page.setContent(html);
                await page.waitForSelector("pkts-input-switch");
                await page.waitForTimeout(200);
                await page.locator("#focus-switch input").focus();
                await page.locator("#hover-switch").hover();
                await expect(page.locator("#container")).toHaveScreenshot(`PktsInputSwitch-${key}-${theme}.png`);
            });
        });
    });
});
