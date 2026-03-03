import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe("PktsAvatar Web Component", () => {
  test("default-image", async ({ page }, testInfo) => {
    const imagePath = pathToFileURL(path.join(__dirname, "test_avatar.png")).href;
    const html = createTestHTML(
      "light",
      `<pkts-avatar src="${imagePath}" alt="Test User" background-color="grape"></pkts-avatar>`,
    );

    // Write HTML to temp file and navigate to it
    const tempFile = path.join(__dirname, `.avatar-test-default-image-${testInfo.project.name}.html`);
    fs.writeFileSync(tempFile, html);

    try {
      await page.goto(pathToFileURL(tempFile).href);
      await page.waitForSelector("pkts-avatar");
      await page.waitForTimeout(300);

      const avatar = page.locator("pkts-avatar div");
      await expect(avatar).toHaveScreenshot("PktsAvatar-default-image.png");
    } finally {
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });

  test("fallback-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-avatar alt="Test User" background-color="grape"></pkts-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("pkts-avatar div");
    await expect(avatar).toHaveScreenshot("PktsAvatar-fallback-light.png");
  });

  test("fallback-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `<pkts-avatar alt="Test User" background-color="lime"></pkts-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("pkts-avatar div");
    await expect(avatar).toHaveScreenshot("PktsAvatar-fallback-dark.png");
  });

  test("size-small", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-avatar size="small" alt="Test User" background-color="berry"></pkts-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("pkts-avatar div");
    await expect(avatar).toHaveScreenshot("PktsAvatar-size-small.png");
  });

  test("size-large", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `<pkts-avatar size="large" alt="Test User" background-color="orange"></pkts-avatar>`,
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-avatar");
    await page.waitForTimeout(100);

    const avatar = page.locator("pkts-avatar div");
    await expect(avatar).toHaveScreenshot("PktsAvatar-size-large.png");
  });
});
