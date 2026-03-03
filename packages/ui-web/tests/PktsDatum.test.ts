import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsDatum Web Component", () => {
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    test(`default-${theme}`, async ({ page }) => {
      const html = createTestHTML(
        theme,
        `<pkts-datum title="Label">Value</pkts-datum>`,
      );
      await page.setContent(html);
      await page.waitForSelector("pkts-datum");
      await page.waitForTimeout(100);

      // Screenshot the inner div which has the actual styling
      const datum = page.locator("pkts-datum div");
      await expect(datum).toHaveScreenshot(`PktsDatum-default-${theme}.png`);
    });

    test(`long-value-${theme}`, async ({ page }) => {
      const html = createTestHTML(
        theme,
        `<pkts-datum title="Status">This is a longer value to test text wrapping</pkts-datum>`,
      );
      await page.setContent(html);
      await page.waitForSelector("pkts-datum");
      await page.waitForTimeout(100);

      const datum = page.locator("pkts-datum div");
      await expect(datum).toHaveScreenshot(`PktsDatum-long-value-${theme}.png`);
    });
  }
});
