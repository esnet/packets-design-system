import { test, expect } from "@playwright/test";

test.describe("ESInputDatePicker Web Component", () => {
  test("date-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 350px;">
        <es-input-date-picker type="date" value="2025-09-15T00:00:00.000Z"></es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("date-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 400px; height: 350px;">
        <es-input-date-picker type="date" value="2025-09-15T00:00:00.000Z"></es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("time-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 300px; height: 350px;">
        <es-input-date-picker type="time" value="2025-09-15T14:30:45.000Z"></es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("time-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 300px; height: 350px;">
        <es-input-date-picker type="time" value="2025-09-15T14:30:45.000Z"></es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("datetime-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 600px; height: 350px;">
        <es-input-date-picker type="datetime" value="2025-09-15T14:30:45.000Z"></es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("datetime-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 600px; height: 350px;">
        <es-input-date-picker type="datetime" value="2025-09-15T14:30:45.000Z"></es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("daterange-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 350px;">
        <es-input-date-picker
          type="daterange"
          value="2025-09-10T00:00:00.000Z"
          range-end-value="2025-09-20T00:00:00.000Z">
        </es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("daterange-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 400px; height: 350px;">
        <es-input-date-picker
          type="daterange"
          value="2025-09-10T00:00:00.000Z"
          range-end-value="2025-09-20T00:00:00.000Z">
        </es-input-date-picker>
      </div>
    `);
    await expect(page.locator("es-input-date-picker")).toBeVisible();
    await page.waitForTimeout(300);
    await expect(page.locator("div").first()).toHaveScreenshot();
  });
});
