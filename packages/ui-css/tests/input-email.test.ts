import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputEmail Component", () => {
  test("input-email-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text es-input-email">
          <input type="email" placeholder="Default email input" />
        </div>

        <div class="es-input-text es-input-email es-branded">
          <input type="email" placeholder="Branded email input" />
        </div>

        <div class="es-input-text es-input-email es-error">
          <input type="email" placeholder="Error email input" />
        </div>

        <div class="es-input-text es-input-email es-disabled">
          <input type="email" placeholder="Disabled email input" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-email-variants-light.png");
  });

  test("input-email-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text es-input-email">
          <input type="email" placeholder="Default email input" />
        </div>

        <div class="es-input-text es-input-email es-branded">
          <input type="email" placeholder="Branded email input" />
        </div>

        <div class="es-input-text es-input-email es-error">
          <input type="email" placeholder="Error email input" />
        </div>

        <div class="es-input-text es-input-email es-disabled">
          <input type="email" placeholder="Disabled email input" disabled />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-email-variants-dark.png");
  });
});
