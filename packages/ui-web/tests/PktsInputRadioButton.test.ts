import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputRadioButton Web Component", () => {
  test("default-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-radio></pkts-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-radio");
    const input = page.locator("pkts-input-radio > div").first();
    await expect(input).toHaveScreenshot("PktsInputRadioButton-default-unchecked.png");
  });

  test("default-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-radio checked></pkts-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-radio");
    const input = page.locator("pkts-input-radio > div").first();
    await expect(input).toHaveScreenshot("PktsInputRadioButton-default-checked.png");
  });

  test("disabled-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-radio disabled></pkts-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-radio");
    const input = page.locator("pkts-input-radio > div").first();
    await expect(input).toHaveScreenshot("PktsInputRadioButton-disabled-unchecked.png");
  });

  test("disabled-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-radio disabled checked></pkts-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-radio");
    const input = page.locator("pkts-input-radio > div").first();
    await expect(input).toHaveScreenshot("PktsInputRadioButton-disabled-checked.png");
  });
});
