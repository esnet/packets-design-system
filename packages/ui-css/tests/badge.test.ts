import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Badge Component", () => {
  test("badge-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; display: flex; gap: 8px;">
        <span class="es-badge">3</span>
        <span class="es-badge">12</span>
        <span class="es-badge">99+</span>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("badge-light.png");
  });

  test("badge-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 16px; display: flex; gap: 8px;">
        <span class="es-badge">3</span>
        <span class="es-badge">12</span>
        <span class="es-badge">99+</span>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("badge-dark.png");
  });
});
