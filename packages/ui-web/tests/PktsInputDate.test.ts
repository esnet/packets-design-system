import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputDate Web Component", () => {
  test("date-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date type="date" value="2025-09-15T00:00:00.000Z"></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-date-light.png");
  });

  test("date-dark", async ({ page }) => {
    const html = createTestHTML(
      "dark",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date type="date" value="2025-09-15T00:00:00.000Z"></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-date-dark.png");
  });

  test("time-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date type="time" value="2025-09-15T14:30:45.000Z"></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-time-light.png");
  });

  test("datetime-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 600px; height: 400px;">
          <pkts-input-date type="datetime" value="2025-09-15T14:30:45.000Z"></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-datetime-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px; height: 400px;">
          <pkts-input-date type="date" variant="branded" value="2025-09-15T00:00:00.000Z"></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    // Click to open picker
    await page.locator("pkts-input-date input").click();
    await page.waitForTimeout(300);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-branded-light.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px;">
          <pkts-input-date type="date" error></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-error-light.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML(
      "light",
      `
        <div id="container" style="width: 400px;">
          <pkts-input-date type="date" disabled value="2025-09-15T00:00:00.000Z"></pkts-input-date>
        </div>
      `
    );
    await page.setContent(html);
    await page.waitForSelector("pkts-input-date");
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("PktsInputDate-disabled-light.png");
  });
});
