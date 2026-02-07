import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputEmail Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-email placeholder="Enter email"></es-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-email");
    const input = page.locator("es-input-email > div").first();
    await expect(input).toHaveScreenshot("ESInputEmail-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-email variant="branded" placeholder="email@example.com"></es-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-email");
    const input = page.locator("es-input-email > div").first();
    await expect(input).toHaveScreenshot("ESInputEmail-branded-light.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-email error placeholder="Invalid email"></es-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-email");
    const input = page.locator("es-input-email > div").first();
    await expect(input).toHaveScreenshot("ESInputEmail-error-light.png");
  });

  test("disabled-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-email disabled placeholder="Disabled"></es-input-email>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-email");
    const input = page.locator("es-input-email > div").first();
    await expect(input).toHaveScreenshot("ESInputEmail-disabled-light.png");
  });
});
