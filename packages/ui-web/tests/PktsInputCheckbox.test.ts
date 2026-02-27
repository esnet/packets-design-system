import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputCheckbox Web Component", () => {
  test("default-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-checkbox></pkts-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-checkbox");
    const input = page.locator("pkts-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("PktsInputCheckbox-default-unchecked.png");
  });

  test("default-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-checkbox checked></pkts-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-checkbox");
    const input = page.locator("pkts-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("PktsInputCheckbox-default-checked.png");
  });

  test("branded-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-checkbox variant="branded"></pkts-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-checkbox");
    const input = page.locator("pkts-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("PktsInputCheckbox-branded-unchecked.png");
  });

  test("branded-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-checkbox variant="branded" checked></pkts-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-checkbox");
    const input = page.locator("pkts-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("PktsInputCheckbox-branded-checked.png");
  });

  test("disabled-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-checkbox disabled></pkts-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-checkbox");
    const input = page.locator("pkts-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("PktsInputCheckbox-disabled-unchecked.png");
  });

  test("disabled-checked", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-checkbox disabled checked></pkts-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-checkbox");
    const input = page.locator("pkts-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("PktsInputCheckbox-disabled-checked.png");
  });
});
