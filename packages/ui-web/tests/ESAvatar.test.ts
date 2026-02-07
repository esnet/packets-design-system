import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe("ESAvatar Web Component", () => {
  test("default-image", async ({ page }, testInfo) => {
    const imagePath = pathToFileURL(path.join(__dirname, "test_avatar.png")).href;
    const html = createTestHTML(
      "light",
      `<es-avatar src="${imagePath}" alt="Test User" background-color="grape"></es-avatar>`,
    );

    // Write HTML to temp file and navigate to it
    const tempFile = path.join(__dirname, `.avatar-test-default-image-${testInfo.project.name}.html`);
    fs.writeFileSync(tempFile, html);

    try {
      await page.goto(pathToFileURL(tempFile).href);
      await page.waitForSelector("es-avatar");
      await page.waitForTimeout(300);

      const avatar = page.locator("es-avatar div");
      await expect(avatar).toHaveScreenshot("ESAvatar-default-image.png");
    } finally {
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });

  test("fallback-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-avatar alt="Test User" background-color="grape"></es-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("es-avatar div");
    await expect(avatar).toHaveScreenshot("ESAvatar-fallback-light.png");
  });

  test("fallback-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<es-avatar alt="Test User" background-color="lime"></es-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("es-avatar div");
    await expect(avatar).toHaveScreenshot("ESAvatar-fallback-dark.png");
  });

  test("size-small", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-avatar size="small" alt="Test User" background-color="berry"></es-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("es-avatar div");
    await expect(avatar).toHaveScreenshot("ESAvatar-size-small.png");
  });

  test("size-large", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<es-avatar size="large" alt="Test User" background-color="orange"></es-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("es-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("es-avatar div");
    await expect(avatar).toHaveScreenshot("ESAvatar-size-large.png");
  });
});
