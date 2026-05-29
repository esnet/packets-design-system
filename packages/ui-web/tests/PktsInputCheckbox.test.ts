import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
    { key: "unchecked", checked: false, branded: false },
    { key: "checked", checked: true, branded: false },
    { key: "unchecked-branded", checked: false, branded: true },
    { key: "checked-branded", checked: true, branded: true },
] as const;

function buildCheckboxRow(checked: boolean, branded: boolean): string {
    const checkedAttr = checked ? "checked" : "";
    const variantAttr = branded ? `variant="branded"` : "";
    return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <pkts-input-checkbox ${variantAttr} ${checkedAttr}></pkts-input-checkbox>
      <div id="hover-cb"><pkts-input-checkbox ${variantAttr} ${checkedAttr}></pkts-input-checkbox></div>
      <div id="focus-cb"><pkts-input-checkbox ${variantAttr} ${checkedAttr}></pkts-input-checkbox></div>
      <pkts-input-checkbox ${variantAttr} ${checkedAttr} disabled></pkts-input-checkbox>
    </div>
  `;
}

test.describe("Pkts InputCheckbox Web Component", () => {
    (["light", "dark"] as Theme[]).forEach((theme) => {
        VARIANTS.forEach(({ key, checked, branded }) => {
            test(`PktsInputCheckbox-${key}-${theme}`, async ({ page }) => {
                const html = createTestHTML(theme, buildCheckboxRow(checked, branded));
                await page.setContent(html);
                await page.waitForTimeout(200);
                await page.locator("#focus-cb input[type='checkbox']").focus();
                await page.locator("#hover-cb input[type='checkbox']").hover();
                await expect(page.locator("#container")).toHaveScreenshot(`PktsInputCheckbox-${key}-${theme}.png`);
            });
        });
    });
});
