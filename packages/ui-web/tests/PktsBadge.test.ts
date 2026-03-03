import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsBadge Web Component", () => {
  test("default-light", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-badge>Badge Text</pkts-badge>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-badge");
    const badge = page.locator("pkts-badge > span").first();
    await expect(badge).toHaveScreenshot("PktsBadge-default-light.png");
  });

  test("default-dark", async ({ page }) => {
    const html = createTestHTML("dark", `<pkts-badge>Badge Text</pkts-badge>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-badge");
    const badge = page.locator("pkts-badge > span").first();
    await expect(badge).toHaveScreenshot("PktsBadge-default-dark.png");
  });
});
