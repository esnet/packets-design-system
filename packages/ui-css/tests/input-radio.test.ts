import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = [
  { key: "unselected", checked: false },
  { key: "selected", checked: true },
] as const;

function buildRadioRow(checked: boolean, rowIndex: number): string {
  const checkedAttr = checked ? "checked" : "";
  const name = `radio-group-${rowIndex}`;
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <div class="pkts-input-radio"><input type="radio" name="${name}-default" ${checkedAttr} /></div>
      <div id="hover-radio" class="pkts-input-radio"><input type="radio" name="${name}-hover" ${checkedAttr} /></div>
      <div id="focus-radio" class="pkts-input-radio"><input type="radio" name="${name}-focus" ${checkedAttr} /></div>
      <div class="pkts-input-radio"><input type="radio" name="${name}-disabled" ${checkedAttr} disabled /></div>
    </div>
  `;
}

test.describe("Pkts InputRadio Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, checked }, rowIndex) => {
      test(`input-radio-${key}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildRadioRow(checked, rowIndex));
        await page.setContent(html);
        await page.locator("#focus-radio input[type='radio']").focus();
        await page.locator("#hover-radio input[type='radio']").hover();
        await expect(page.locator("#container")).toHaveScreenshot(`input-radio-${key}-${theme}.png`);
      });
    });
  });
});
