import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputCheckbox Web Component", () => {
  test("default-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-checkbox></es-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-checkbox");
    const input = page.locator("es-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("ESInputCheckbox-default-unchecked.png");
  });

  test("default-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-checkbox checked></es-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-checkbox");
    const input = page.locator("es-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("ESInputCheckbox-default-checked.png");
  });

  test("branded-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-checkbox variant="branded"></es-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-checkbox");
    const input = page.locator("es-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("ESInputCheckbox-branded-unchecked.png");
  });

  test("branded-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-checkbox variant="branded" checked></es-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-checkbox");
    const input = page.locator("es-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("ESInputCheckbox-branded-checked.png");
  });

  test("disabled-unchecked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-checkbox disabled></es-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-checkbox");
    const input = page.locator("es-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("ESInputCheckbox-disabled-unchecked.png");
  });

  test("disabled-checked", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-checkbox disabled checked></es-input-checkbox>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-checkbox");
    const input = page.locator("es-input-checkbox > div").first();
    await expect(input).toHaveScreenshot("ESInputCheckbox-disabled-checked.png");
  });
});
