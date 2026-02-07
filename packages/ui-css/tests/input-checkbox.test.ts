import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputCheckbox Component", () => {
  test("input-checkbox-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-checkbox">
          <input type="checkbox" />
        </div>

        <div class="es-input-checkbox">
          <input type="checkbox" checked />
        </div>

        <div class="es-input-checkbox es-branded">
          <input type="checkbox" />
        </div>

        <div class="es-input-checkbox es-branded">
          <input type="checkbox" checked />
        </div>

        <div class="es-input-checkbox">
          <input type="checkbox" disabled />
        </div>

        <div class="es-input-checkbox">
          <input type="checkbox" disabled checked />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-checkbox-variants-light.png");
  });

  test("input-checkbox-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-checkbox">
          <input type="checkbox" />
        </div>

        <div class="es-input-checkbox">
          <input type="checkbox" checked />
        </div>

        <div class="es-input-checkbox es-branded">
          <input type="checkbox" />
        </div>

        <div class="es-input-checkbox es-branded">
          <input type="checkbox" checked />
        </div>

        <div class="es-input-checkbox">
          <input type="checkbox" disabled />
        </div>

        <div class="es-input-checkbox">
          <input type="checkbox" disabled checked />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-checkbox-variants-dark.png");
  });
});
