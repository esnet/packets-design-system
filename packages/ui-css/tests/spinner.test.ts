import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Spinner Component", () => {
  test("spinner-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; align-items: center; padding: 16px;">
        <div role="alert" aria-busy="true" class="es-spinner">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="no-motion-message">Loading...</span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("spinner-light.png");
  });

  test("spinner-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; align-items: center; padding: 16px;">
        <div role="alert" aria-busy="true" class="es-spinner">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="no-motion-message">Loading...</span>
        </div>
      </div>
    `,
    );
    await page.setContent(html);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("spinner-dark.png");
  });
});
