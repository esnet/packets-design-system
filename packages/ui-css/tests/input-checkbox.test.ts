import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "unchecked", checked: false, branded: false },
  { key: "checked", checked: true, branded: false },
  { key: "unchecked-branded", checked: false, branded: true },
  { key: "checked-branded", checked: true, branded: true },
] as const;

function buildCheckboxRow(checked: boolean, branded: boolean): string {
  const checkedAttr = checked ? "checked" : "";
  const brandedClass = branded ? " pkts-branded" : "";
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <div class="pkts-input-checkbox${brandedClass}"><input type="checkbox" ${checkedAttr} /></div>
      <div id="hover-cb" class="pkts-input-checkbox${brandedClass}"><input type="checkbox" ${checkedAttr} /></div>
      <div id="focus-cb" class="pkts-input-checkbox${brandedClass}"><input type="checkbox" ${checkedAttr} /></div>
      <div class="pkts-input-checkbox${brandedClass}"><input type="checkbox" ${checkedAttr} disabled /></div>
    </div>
  `;
}

test.describe("Pkts InputCheckbox Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, checked, branded }) => {
      test(`input-checkbox-${key}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildCheckboxRow(checked, branded));
        await page.setContent(html);
        await page.locator("#focus-cb input[type='checkbox']").focus();
        await page.locator("#hover-cb input[type='checkbox']").hover();
        await expect(page.locator("#container")).toHaveScreenshot(`input-checkbox-${key}-${theme}.png`);
      });
    });
  });
});
