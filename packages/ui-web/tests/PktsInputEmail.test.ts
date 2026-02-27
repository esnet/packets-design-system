import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputEmail Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-email placeholder="Enter email"></pkts-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-email");
    const input = page.locator("pkts-input-email > div").first();
    await expect(input).toHaveScreenshot("PktsInputEmail-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-email variant="branded" placeholder="email@example.com"></pkts-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-email");
    const input = page.locator("pkts-input-email > div").first();
    await expect(input).toHaveScreenshot("PktsInputEmail-branded-light.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-email error placeholder="Invalid email"></pkts-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-email");
    const input = page.locator("pkts-input-email > div").first();
    await expect(input).toHaveScreenshot("PktsInputEmail-error-light.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-email disabled placeholder="Disabled"></pkts-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-email");
    const input = page.locator("pkts-input-email > div").first();
    await expect(input).toHaveScreenshot("PktsInputEmail-disabled-light.png");
  });
});
