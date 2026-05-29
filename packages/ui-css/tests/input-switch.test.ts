import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "unchecked", checked: false, secondary: false },
  { key: "checked", checked: true, secondary: false },
  { key: "unchecked-secondary", checked: false, secondary: true },
  { key: "checked-secondary", checked: true, secondary: true },
] as const;

function buildSwitchRow(checked: boolean, secondary: boolean): string {
  const checkedAttr = checked ? "checked" : "";
  const secondaryClass = secondary ? " pkts-secondary" : "";
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <div class="pkts-input-switch${secondaryClass}">
        <input type="checkbox" ${checkedAttr} />
        <span class="indicator"></span>
      </div>
      <div id="hover-switch" class="pkts-input-switch${secondaryClass}">
        <input type="checkbox" ${checkedAttr} />
        <span class="indicator"></span>
      </div>
      <div id="focus-switch" class="pkts-input-switch${secondaryClass}">
        <input type="checkbox" ${checkedAttr} />
        <span class="indicator"></span>
      </div>
      <div class="pkts-input-switch${secondaryClass} pkts-disabled">
        <input type="checkbox" ${checkedAttr} disabled />
        <span class="indicator"></span>
      </div>
    </div>
  `;
}

test.describe("Pkts InputSwitch Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, checked, secondary }) => {
      test(`input-switch-${key}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildSwitchRow(checked, secondary));
        await page.setContent(html);
        await page.waitForTimeout(100);
        await page.locator("#focus-switch input").focus();
        await page.locator("#hover-switch").hover();
        await expect(page.locator("#container")).toHaveScreenshot(`input-switch-${key}-${theme}.png`);
      });
    });
  });
});
