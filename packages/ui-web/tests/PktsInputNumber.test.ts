import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputNumber Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-number placeholder="Enter number"></pkts-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-number");
    const input = page.locator("pkts-input-number > div").first();
    await expect(input).toHaveScreenshot("PktsInputNumber-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-number variant="branded" placeholder="0"></pkts-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-number");
    const input = page.locator("pkts-input-number > div").first();
    await expect(input).toHaveScreenshot("PktsInputNumber-branded-light.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-number value="42"></pkts-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-number");
    const input = page.locator("pkts-input-number > div").first();
    await expect(input).toHaveScreenshot("PktsInputNumber-with-value.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-number error placeholder="Invalid"></pkts-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-number");
    const input = page.locator("pkts-input-number > div").first();
    await expect(input).toHaveScreenshot("PktsInputNumber-error-light.png");
  });
});
