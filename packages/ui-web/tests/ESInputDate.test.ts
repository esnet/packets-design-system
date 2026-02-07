import { test, expect } from "@playwright/test";

test.describe("ESInputDate Web Component", () => {
  test("date-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 400px;">
        <es-input-date type="date" value="2025-09-15T00:00:00.000Z"></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("date-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 400px; height: 400px;">
        <es-input-date type="date" value="2025-09-15T00:00:00.000Z"></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("time-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 400px;">
        <es-input-date type="time" value="2025-09-15T14:30:45.000Z"></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("datetime-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 600px; height: 400px;">
        <es-input-date type="datetime" value="2025-09-15T14:30:45.000Z"></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("branded-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px; height: 400px;">
        <es-input-date type="date" variant="branded" value="2025-09-15T00:00:00.000Z"></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();

    // Click to open picker
    await page.locator("es-input-date input").click();
    await page.waitForTimeout(300);

    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("error-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px;">
        <es-input-date type="date" error></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("disabled-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 400px;">
        <es-input-date type="date" disabled value="2025-09-15T00:00:00.000Z"></es-input-date>
      </div>
    `);
    await expect(page.locator("es-input-date")).toBeVisible();
    await expect(page.locator("div").first()).toHaveScreenshot();
  });
});
