import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

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
      <pkts-input-radio name="${name}-default" ${checkedAttr}></pkts-input-radio>
      <div id="hover-radio"><pkts-input-radio name="${name}-hover" ${checkedAttr}></pkts-input-radio></div>
      <div id="focus-radio"><pkts-input-radio name="${name}-focus" ${checkedAttr}></pkts-input-radio></div>
      <pkts-input-radio name="${name}-disabled" ${checkedAttr} disabled></pkts-input-radio>
    </div>
  `;
}

test.describe("Pkts InputRadioButton Web Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach(({ key, checked }, rowIndex) => {
      test(`PktsInputRadioButton-${key}-${theme}`, async ({ page }) => {
        const html = createTestHTML(theme, buildRadioRow(checked, rowIndex));
        await page.setContent(html);
        await page.waitForTimeout(200);
        await page.locator("#focus-radio input[type='radio']").focus();
        await page.locator("#hover-radio input[type='radio']").hover();
        await expect(page.locator("#container")).toHaveScreenshot(
          `PktsInputRadioButton-${key}-${theme}.png`,
        );
      });
    });
  });
});
