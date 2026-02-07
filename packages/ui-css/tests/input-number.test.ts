import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputNumber Component", () => {
  test("input-number-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text es-input-number">
          <input type="number" placeholder="Default number" />
        </div>

        <div class="es-input-text es-input-number es-branded">
          <input type="number" placeholder="Branded number" />
        </div>

        <div class="es-input-text es-input-number es-error">
          <input type="number" placeholder="Error number" />
        </div>

        <div class="es-input-text es-input-number es-disabled">
          <input type="number" placeholder="Disabled number" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-number-variants-light.png");
  });

  test("input-number-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text es-input-number">
          <input type="number" placeholder="Default number" />
        </div>

        <div class="es-input-text es-input-number es-branded">
          <input type="number" placeholder="Branded number" />
        </div>

        <div class="es-input-text es-input-number es-error">
          <input type="number" placeholder="Error number" />
        </div>

        <div class="es-input-text es-input-number es-disabled">
          <input type="number" placeholder="Disabled number" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-number-variants-dark.png");
  });
});
