import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsInputSearch Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-search placeholder="Search..."></pkts-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-search");
    const input = page.locator("pkts-input-search > div").first();
    await expect(input).toHaveScreenshot("PktsInputSearch-default-light.png");
  });

  test("branded-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-search variant="branded" placeholder="Search"></pkts-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-search");
    const input = page.locator("pkts-input-search > div").first();
    await expect(input).toHaveScreenshot("PktsInputSearch-branded-light.png");
  });

  test("with-value", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-search value="search query"></pkts-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-search");
    const input = page.locator("pkts-input-search > div").first();
    await expect(input).toHaveScreenshot("PktsInputSearch-with-value.png");
  });

  test("error-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-input-search error placeholder="Invalid search"></pkts-input-search>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-input-search");
    const input = page.locator("pkts-input-search > div").first();
    await expect(input).toHaveScreenshot("PktsInputSearch-error-light.png");
  });
});
