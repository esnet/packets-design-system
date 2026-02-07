import { test, expect } from "@playwright/test";

test.describe("ESFormSection Web Component", () => {
  test("default-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 800px;">
        <es-form-section title="Section Title">
          <p>Form content goes here</p>
        </es-form-section>
      </div>
    `);
    await expect(page.locator("es-form-section")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("default-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 800px;">
        <es-form-section title="Section Title">
          <p>Form content goes here</p>
        </es-form-section>
      </div>
    `);
    await expect(page.locator("es-form-section")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("no-title-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 800px;">
        <es-form-section>
          <p>Form content without title</p>
        </es-form-section>
      </div>
    `);
    await expect(page.locator("es-form-section")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("no-column-layout-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 800px;">
        <es-form-section title="Section Title" use-column-layout="false">
          <p>Form content with no column layout</p>
        </es-form-section>
      </div>
    `);
    await expect(page.locator("es-form-section")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("with-content-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white; width: 800px;">
        <es-form-section title="User Information">
          <div>
            <input type="text" placeholder="Name" style="width: 100%; padding: 8px; margin-bottom: 8px;">
            <input type="email" placeholder="Email" style="width: 100%; padding: 8px;">
          </div>
        </es-form-section>
      </div>
    `);
    await expect(page.locator("es-form-section")).toBeVisible();
    await expect(page.locator("div").first()).toHaveScreenshot();
  });

  test("with-content-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526; width: 800px;">
        <es-form-section title="User Information">
          <div>
            <input type="text" placeholder="Name" style="width: 100%; padding: 8px; margin-bottom: 8px;">
            <input type="email" placeholder="Email" style="width: 100%; padding: 8px;">
          </div>
        </es-form-section>
      </div>
    `);
    await expect(page.locator("es-form-section")).toBeVisible();
    await expect(page.locator("div").first()).toHaveScreenshot();
  });
});
