import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputSwitch Web Component", () => {
  test("primary-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-primary-unchecked.png");
  });

  test("primary-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch checked></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-primary-checked.png");
  });

  test("secondary-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch variant="secondary"></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-secondary-unchecked.png");
  });

  test("secondary-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch variant="secondary" checked></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-secondary-checked.png");
  });

  test("disabled-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch disabled></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-disabled-unchecked.png");
  });

  test("disabled-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch disabled checked></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-disabled-checked.png");
  });

  test("hide-icon-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch hide-icon></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-hide-icon-unchecked.png");
  });

  test("hide-icon-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-switch hide-icon checked></pkts-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-switch");
    const input = page.locator("pkts-input-switch > div").first();
    await expect(input).toHaveScreenshot("PktsInputSwitch-hide-icon-checked.png");
  });
});
