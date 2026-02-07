import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe("CSS Avatar Component", () => {
  test("avatar-variants-light", async ({ page }, testInfo) => {
    const imagePath = pathToFileURL(path.join(__dirname, "test_avatar.png")).href;
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="display: flex; gap: 16px; align-items: center; padding: 16px;">
        <div class="es-avatar es-medium es-grape">
          <img src="${imagePath}" alt="Test">
        </div>
        <div class="es-avatar es-medium es-lime">
          <span>TU</span>
        </div>
        <div class="es-avatar es-small es-berry">
          <span>SM</span>
        </div>
        <div class="es-avatar es-large es-orange">
          <span>LG</span>
        </div>
      </div>
    `,
    );

    // Write HTML to temp file with unique name and navigate to it
    const tempFile = path.join(__dirname, `.avatar-test-light-${testInfo.project.name}.html`);
    fs.writeFileSync(tempFile, html);

    try {
      await page.goto(pathToFileURL(tempFile).href);
      await page.waitForTimeout(300);

      const container = page.locator("#container");
      await expect(container).toHaveScreenshot("avatar-variants-light.png");
    } finally {
      // Cleanup
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });

  test("avatar-variants-dark", async ({ page }, testInfo) => {
    const imagePath = pathToFileURL(path.join(__dirname, "test_avatar.png")).href;
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="display: flex; gap: 16px; align-items: center; padding: 16px;">
        <div class="es-avatar es-medium es-grape">
          <img src="${imagePath}" alt="Test">
        </div>
        <div class="es-avatar es-medium es-lime">
          <span>TU</span>
        </div>
        <div class="es-avatar es-small es-berry">
          <span>SM</span>
        </div>
        <div class="es-avatar es-large es-orange">
          <span>LG</span>
        </div>
      </div>
    `,
    );

    // Write HTML to temp file with unique name and navigate to it
    const tempFile = path.join(__dirname, `.avatar-test-dark-${testInfo.project.name}.html`);
    fs.writeFileSync(tempFile, html);

    try {
      await page.goto(pathToFileURL(tempFile).href);
      await page.waitForTimeout(300);

      const container = page.locator("#container");
      await expect(container).toHaveScreenshot("avatar-variants-dark.png");
    } finally {
      // Cleanup
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });
});
