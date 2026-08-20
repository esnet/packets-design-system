import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

function buildDropdownContent(caret: boolean): string {
  const caretHtml = caret
    ? `<div class="pkts-dropdown-caret" style="left: 80px; top: 0;"></div>`
    : "";

  return `
    <div id="container" style="display: inline-block; padding: 8px; padding-bottom: 200px; position: relative;">
      <div class="pkts-dropdown" style="width: 160px;">
        <button class="pkts-button pkts-primary" style="width: 160px;">Open Menu</button>
        <div class="pkts-dropdown-content" style="width: 160px; top: calc(100% + 4px); left: 0; position: absolute;">
          ${caretHtml}
          <div class="pkts-button-group pkts-vertical">
            <ul class="list">
              <li><button class="pkts-button pkts-primary" style="width: 160px;">Option 1</button></li>
              <li><button class="pkts-button pkts-secondary" style="width: 160px;">Option 2</button></li>
              <li><button class="pkts-button pkts-tertiary" style="width: 160px;">Option 3</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

test.describe("Pkts Dropdown Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    test(`dropdown-default-${theme}`, async ({ page }) => {
      const html = createCSSTestHTML(theme, buildDropdownContent(false));
      await page.setContent(html);
      await page.waitForTimeout(100);
      await expect(page.locator("#container")).toHaveScreenshot(
        `dropdown-default-${theme}.png`,
      );
    });

    test(`dropdown-caret-${theme}`, async ({ page }) => {
      const html = createCSSTestHTML(theme, buildDropdownContent(true));
      await page.setContent(html);
      await page.waitForTimeout(100);
      await expect(page.locator("#container")).toHaveScreenshot(
        `dropdown-caret-${theme}.png`,
      );
    });
  });
});
