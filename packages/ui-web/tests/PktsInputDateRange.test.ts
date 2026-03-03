import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputDateRange Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date-range></pkts-input-date-range>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date-range");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date-range input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDateRange-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date-range></pkts-input-date-range>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date-range");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date-range input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDateRange-default-dark.png");
  });

  test("with-values-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date-range
            value-start="2025-09-10T00:00:00.000Z"
            value-end="2025-09-20T00:00:00.000Z">
          </pkts-input-date-range>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date-range");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date-range input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDateRange-with-values-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date-range variant="branded"></pkts-input-date-range>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date-range");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date-range input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDateRange-branded-light.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px;">
          <pkts-input-date-range error></pkts-input-date-range>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date-range");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDateRange-error-light.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px;">
          <pkts-input-date-range
            disabled
            value-start="2025-09-10T00:00:00.000Z"
            value-end="2025-09-20T00:00:00.000Z">
          </pkts-input-date-range>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date-range");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDateRange-disabled-light.png");
  });
});
