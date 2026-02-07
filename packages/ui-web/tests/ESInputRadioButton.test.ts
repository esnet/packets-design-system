import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputRadioButton Web Component", () => {
  test("default-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-radio></es-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-radio");
    const input = page.locator("es-input-radio > div").first();
    await expect(input).toHaveScreenshot("ESInputRadioButton-default-unchecked.png");
  });

  test("default-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-radio checked></es-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-radio");
    const input = page.locator("es-input-radio > div").first();
    await expect(input).toHaveScreenshot("ESInputRadioButton-default-checked.png");
  });

  test("disabled-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-radio disabled></es-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-radio");
    const input = page.locator("es-input-radio > div").first();
    await expect(input).toHaveScreenshot("ESInputRadioButton-disabled-unchecked.png");
  });

  test("disabled-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-radio disabled checked></es-input-radio>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-radio");
    const input = page.locator("es-input-radio > div").first();
    await expect(input).toHaveScreenshot("ESInputRadioButton-disabled-checked.png");
  });
});
