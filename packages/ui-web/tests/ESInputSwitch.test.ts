import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputSwitch Web Component", () => {
  test("primary-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-primary-unchecked.png");
  });

  test("primary-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch checked></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-primary-checked.png");
  });

  test("secondary-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch variant="secondary"></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-secondary-unchecked.png");
  });

  test("secondary-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch variant="secondary" checked></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-secondary-checked.png");
  });

  test("disabled-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch disabled></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-disabled-unchecked.png");
  });

  test("disabled-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch disabled checked></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-disabled-checked.png");
  });

  test("hide-icon-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch hide-icon></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-hide-icon-unchecked.png");
  });

  test("hide-icon-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-switch hide-icon checked></es-input-switch>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-switch");
    const input = page.locator("es-input-switch > div").first();
    await expect(input).toHaveScreenshot("ESInputSwitch-hide-icon-checked.png");
  });
});
