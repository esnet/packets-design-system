import { test, expect } from "@playwright/test";
import { ESChip } from "../src/components/ESChip";

test.describe("ESChip Web Component", () => {
  const variants = ["primary", "outline"] as const;

  for (const variant of variants) {
    test(`${variant}-light`, async ({ page }) => {
      await page.setContent(`
        <link rel="stylesheet" href="../../ui-css/src/index.css">
        <script type="module" src="../src/index.ts"></script>
        <div style="padding: 20px; background: white;">
          <es-chip ${variant === "outline" ? 'variant="outline"' : ""}>${variant} Chip</es-chip>
        </div>
      `);
      await expect(page.locator("es-chip")).toBeVisible();
      await expect(page.locator("div")).toHaveScreenshot();
    });
  }

  for (const variant of variants) {
    test(`${variant}-dark`, async ({ page }) => {
      await page.setContent(`
        <link rel="stylesheet" href="../../ui-css/src/index.css">
        <script type="module" src="../src/index.ts"></script>
        <div class="dark" style="padding: 20px; background: #252526;">
          <es-chip ${variant === "outline" ? 'variant="outline"' : ""}>${variant} Chip</es-chip>
        </div>
      `);
      await expect(page.locator("es-chip")).toBeVisible();
      await expect(page.locator("div")).toHaveScreenshot();
    });
  }

  test("rounded-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white;">
        <es-chip rounded>Rounded Chip</es-chip>
      </div>
    `);
    await expect(page.locator("es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("rounded-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526;">
        <es-chip rounded>Rounded Chip</es-chip>
      </div>
    `);
    await expect(page.locator("es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("disabled-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white;">
        <es-chip disabled>Disabled Chip</es-chip>
      </div>
    `);
    await expect(page.locator("es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("disabled-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526;">
        <es-chip disabled>Disabled Chip</es-chip>
      </div>
    `);
    await expect(page.locator("es-chip")).toBeVisible();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("hover-light", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div style="padding: 20px; background: white;">
        <es-chip>Hover Chip</es-chip>
      </div>
    `);
    await page.locator("es-chip").hover();
    await expect(page.locator("div")).toHaveScreenshot();
  });

  test("hover-dark", async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="../../ui-css/src/index.css">
      <script type="module" src="../src/index.ts"></script>
      <div class="dark" style="padding: 20px; background: #252526;">
        <es-chip>Hover Chip</es-chip>
      </div>
    `);
    await page.locator("es-chip").hover();
    await expect(page.locator("div")).toHaveScreenshot();
  });
});
