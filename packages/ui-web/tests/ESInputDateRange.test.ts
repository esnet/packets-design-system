import { test, expect } from "@playwright/test";

test.describe("ESInputDateRange Web Component", () => {
  test("default-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 400px;">
        <es-input-date-range></es-input-date-range>
      </div>
    `);
    await expect(page.locator("es-input-date-range")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date-range input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("default-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 400px; height: 400px;">
        <es-input-date-range></es-input-date-range>
      </div>
    `);
    await expect(page.locator("es-input-date-range")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date-range input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("with-values-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 400px;">
        <es-input-date-range
          value-start="2025-09-10T00:00:00.000Z"
          value-end="2025-09-20T00:00:00.000Z">
        </es-input-date-range>
      </div>
    `);
    await expect(page.locator("es-input-date-range")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date-range input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("branded-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 400px;">
        <es-input-date-range variant="branded"></es-input-date-range>
      </div>
    `);
    await expect(page.locator("es-input-date-range")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date-range input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("error-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px;">
        <es-input-date-range error></es-input-date-range>
      </div>
    `);
    await expect(page.locator("es-input-date-range")).toBeVisible();
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("disabled-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px;">
        <es-input-date-range
          disabled
          value-start="2025-09-10T00:00:00.000Z"
          value-end="2025-09-20T00:00:00.000Z">
        </es-input-date-range>
      </div>
    `);
    await expect(page.locator("es-input-date-range")).toBeVisible();
    await expect(page.locator("div").first()).toHaveScreenshot();
  });
});
