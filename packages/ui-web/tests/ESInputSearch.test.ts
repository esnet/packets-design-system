import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESInputSearch Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-search placeholder="Search..."></es-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-search");
    const input = page.locator("es-input-search > div").first();
    await expect(input).toHaveScreenshot("ESInputSearch-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-search variant="branded" placeholder="Search"></es-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-search");
    const input = page.locator("es-input-search > div").first();
    await expect(input).toHaveScreenshot("ESInputSearch-branded-light.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-search value="search query"></es-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-search");
    const input = page.locator("es-input-search > div").first();
    await expect(input).toHaveScreenshot("ESInputSearch-with-value.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-input-search error placeholder="Invalid search"></es-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("es-input-search");
    const input = page.locator("es-input-search > div").first();
    await expect(input).toHaveScreenshot("ESInputSearch-error-light.png");
  });
});
