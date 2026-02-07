import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputNumber Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-number placeholder="Enter number"></es-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-number");
    const input = page.locator("es-input-number > div").first();
    await expect(input).toHaveScreenshot("ESInputNumber-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-number variant="branded" placeholder="0"></es-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-number");
    const input = page.locator("es-input-number > div").first();
    await expect(input).toHaveScreenshot("ESInputNumber-branded-light.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-number value="42"></es-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-number");
    const input = page.locator("es-input-number > div").first();
    await expect(input).toHaveScreenshot("ESInputNumber-with-value.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-number error placeholder="Invalid"></es-input-number>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-number");
    const input = page.locator("es-input-number > div").first();
    await expect(input).toHaveScreenshot("ESInputNumber-error-light.png");
  });
});
