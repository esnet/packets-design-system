import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputRadio Component", () => {
  test("input-radio-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-radio">
          <input type="radio" name="radio-light" />
        </div>

        <div class="es-input-radio">
          <input type="radio" name="radio-light" checked />
        </div>

        <div class="es-input-radio">
          <input type="radio" name="radio-light-disabled" disabled />
        </div>

        <div class="es-input-radio">
          <input type="radio" name="radio-light-disabled" disabled checked />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-radio-variants-light.png");
  });

  test("input-radio-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-radio">
          <input type="radio" name="radio-dark" />
        </div>

        <div class="es-input-radio">
          <input type="radio" name="radio-dark" checked />
        </div>

        <div class="es-input-radio">
          <input type="radio" name="radio-dark-disabled" disabled />
        </div>

        <div class="es-input-radio">
          <input type="radio" name="radio-dark-disabled" disabled checked />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-radio-variants-dark.png");
  });
});
