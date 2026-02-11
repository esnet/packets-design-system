import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsFormSection Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 800px;">
          <pkts-form-section title="Section Title">
            <p>Form content goes here</p>
          </pkts-form-section>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-form-section");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsFormSection-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="width: 800px;">
          <pkts-form-section title="Section Title">
            <p>Form content goes here</p>
          </pkts-form-section>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-form-section");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsFormSection-default-dark.png");
  });

  test("no-title-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 800px;">
          <pkts-form-section>
            <p>Form content without title</p>
          </pkts-form-section>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-form-section");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsFormSection-no-title-light.png");
  });

  test("no-column-layout-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 800px;">
          <pkts-form-section title="Section Title" use-column-layout="false">
            <p>Form content with no column layout</p>
          </pkts-form-section>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-form-section");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsFormSection-no-column-layout-light.png");
  });

  test("with-content-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 800px;">
          <pkts-form-section title="User Information">
            <div>
              <input type="text" placeholder="Name" style="width: 100%; padding: 8px; margin-bottom: 8px;">
              <input type="email" placeholder="Email" style="width: 100%; padding: 8px;">
            </div>
          </pkts-form-section>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-form-section");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsFormSection-with-content-light.png");
  });

  test("with-content-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="width: 800px;">
          <pkts-form-section title="User Information">
            <div>
              <input type="text" placeholder="Name" style="width: 100%; padding: 8px; margin-bottom: 8px;">
              <input type="email" placeholder="Email" style="width: 100%; padding: 8px;">
            </div>
          </pkts-form-section>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-form-section");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsFormSection-with-content-dark.png");
  });
});
