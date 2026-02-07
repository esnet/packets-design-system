import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS ButtonGroup Component", () => {
  test("button-group-horizontal", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; width: 600px;">
        <section class="es-button-group es-horizontal">
          <ul class="list">
            <li><button class="es-button">Button 1</button></li>
            <li><button class="es-button">Button 2</button></li>
            <li><button class="es-button">Button 3</button></li>
          </ul>
        </section>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("button-group-horizontal.png");
  });

  test("button-group-vertical", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; width: 400px;">
        <section class="es-button-group es-vertical">
          <ul class="list">
            <li><button class="es-button">Button 1</button></li>
            <li><button class="es-button">Button 2</button></li>
            <li><button class="es-button">Button 3</button></li>
          </ul>
        </section>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("button-group-vertical.png");
  });
});
