import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputPassword Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-password placeholder="Enter password"></es-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-password");
    const input = page.locator("es-input-password > div").first();
    await expect(input).toHaveScreenshot("ESInputPassword-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-password variant="branded" placeholder="Password"></es-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-password");
    const input = page.locator("es-input-password > div").first();
    await expect(input).toHaveScreenshot("ESInputPassword-branded-light.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-password error placeholder="Invalid password"></es-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-password");
    const input = page.locator("es-input-password > div").first();
    await expect(input).toHaveScreenshot("ESInputPassword-error-light.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-password value="secret123"></es-input-password>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-password");
    const input = page.locator("es-input-password > div").first();
    await expect(input).toHaveScreenshot("ESInputPassword-with-value.png");
  });
});
