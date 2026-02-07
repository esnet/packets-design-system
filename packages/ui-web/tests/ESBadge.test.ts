import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESBadge Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<es-badge>Badge Text</es-badge>`);
    await page.setContent(html);
    await page.waitForSelector("es-badge");
    const badge = page.locator("es-badge > span").first();
    await expect(badge).toHaveScreenshot("ESBadge-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML("dark", `<es-badge>Badge Text</es-badge>`);
    await page.setContent(html);
    await page.waitForSelector("es-badge");
    const badge = page.locator("es-badge > span").first();
    await expect(badge).toHaveScreenshot("ESBadge-default-dark.png");
  });
});
