import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS InputText Component", () => {
  test("input-text-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text">
          <input type="text" placeholder="Default input" />
        </div>

        <div class="es-input-text es-branded">
          <input type="text" placeholder="Branded input" />
        </div>

        <div class="es-input-text es-error">
          <input type="text" placeholder="Error input" />
        </div>

        <div class="es-input-text es-disabled">
          <input type="text" placeholder="Disabled input" disabled />
        </div>

        <div class="es-input-text">
          <input type="text" value="Input with value" />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-text-variants-light.png");
  });

  test("input-text-variants-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text">
          <input type="text" placeholder="Default input" />
        </div>

        <div class="es-input-text es-branded">
          <input type="text" placeholder="Branded input" />
        </div>

        <div class="es-input-text es-error">
          <input type="text" placeholder="Error input" />
        </div>

        <div class="es-input-text es-disabled">
          <input type="text" placeholder="Disabled input" disabled />
        </div>

        <div class="es-input-text">
          <input type="text" value="Input with value" />
        </div>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-text-variants-dark.png");
  });

  test("input-text-states-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text">
          <input type="text" placeholder="Normal state" />
        </div>

        <div class="es-input-text">
          <input type="text" placeholder="Focus this input" id="focus-input" />
        </div>

        <div class="es-input-text es-error">
          <input type="text" placeholder="Error state" />
        </div>
      </div>
    `,
    );
    await page.setContent(html);

    // Focus the second input
    await page.locator("#focus-input").focus();
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-text-states-light.png");
  });

  test("input-text-states-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; flex-direction: column; gap: 16px; padding: 16px; width: 400px;">
        <div class="es-input-text">
          <input type="text" placeholder="Normal state" />
        </div>

        <div class="es-input-text">
          <input type="text" placeholder="Focus this input" id="focus-input" />
        </div>

        <div class="es-input-text es-error">
          <input type="text" placeholder="Error state" />
        </div>
      </div>
    `,
    );
    await page.setContent(html);

    // Focus the second input
    await page.locator("#focus-input").focus();
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("input-text-states-dark.png");
  });
});
