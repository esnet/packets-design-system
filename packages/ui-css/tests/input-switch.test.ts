import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputSwitch Component", () => {
  test("input-switch-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-switch">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-secondary">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-secondary es-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-disabled">
          <input type="checkbox" disabled />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-disabled es-checked">
          <input type="checkbox" disabled checked />
          <span class="indicator"></span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-switch-variants-light.png");
  });

  test("input-switch-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-switch">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-secondary">
          <input type="checkbox" />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-secondary es-checked">
          <input type="checkbox" checked />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-disabled">
          <input type="checkbox" disabled />
          <span class="indicator"></span>
        </div>

        <div class="es-input-switch es-disabled es-checked">
          <input type="checkbox" disabled checked />
          <span class="indicator"></span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-switch-variants-dark.png");
  });
});
