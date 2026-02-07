import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Datum Component", () => {
  test("datum-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div class="es-datum">
          <label>Label</label>
          <span>Value</span>
        </div>
        <div class="es-datum">
          <label>Status</label>
          <span>This is a longer value to test text wrapping</span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("datum-variants-light.png");
  });

  test("datum-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <div class="es-datum">
          <label>Label</label>
          <span>Value</span>
        </div>
        <div class="es-datum">
          <label>Status</label>
          <span>This is a longer value to test text wrapping</span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("datum-variants-dark.png");
  });
});
