import { test, expect } from "@playwright/test";

test.describe("CSS Chip Component", () => {
  test("chip-primary-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div style="padding: 20px; background: white;">
        <button class="es-chip">Primary Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-primary-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div class="dark" style="padding: 20px; background: #252526;">
        <button class="es-chip">Primary Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-outline-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div style="padding: 20px; background: white;">
        <button class="es-chip es-outline">Outline Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-outline-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div class="dark" style="padding: 20px; background: #252526;">
        <button class="es-chip es-outline">Outline Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-rounded-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div style="padding: 20px; background: white;">
        <button class="es-chip es-rounded">Rounded Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-rounded-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div class="dark" style="padding: 20px; background: #252526;">
        <button class="es-chip es-rounded">Rounded Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-disabled-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div style="padding: 20px; background: white;">
        <button class="es-chip es-disabled" disabled>Disabled Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-disabled-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div class="dark" style="padding: 20px; background: #252526;">
        <button class="es-chip es-disabled" disabled>Disabled Chip</button>
      </div>
    `);
    await expect(page.locator("button.es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-hover-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div style="padding: 20px; background: white;">
        <button class="es-chip">Hover Chip</button>
      </div>
    `);
    await page.locator("button.es-chip").hover();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("chip-hover-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../src/index.css">
      <div class="dark" style="padding: 20px; background: #252526;">
        <button class="es-chip">Hover Chip</button>
      </div>
    `);
    await page.locator("button.es-chip").hover();
    await expect(page.locator("div")).toHaveScreenshot();
  });
});
