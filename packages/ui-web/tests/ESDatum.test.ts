import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESDatum Web Component", () => {
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    test(`default-${theme}`, async ({ page }) => {
      const html = createTestHTML(
        theme,
        `<es-datum title="Label">Value</es-datum>`,
      );
      await page.setContent(html);
      await page.waitForSelector("es-datum");
      await page.waitForTimeout(100);

      // Screenshot the inner div which has the actual styling
      const datum = page.locator("es-datum div");
      await expect(datum).toHaveScreenshot(`ESDatum-default-${theme}.png`);
    });

    test(`long-value-${theme}`, async ({ page }) => {
      const html = createTestHTML(
        theme,
        `<es-datum title="Status">This is a longer value to test text wrapping</es-datum>`,
      );
      await page.setContent(html);
      await page.waitForSelector("es-datum");
      await page.waitForTimeout(100);

      const datum = page.locator("es-datum div");
      await expect(datum).toHaveScreenshot(`ESDatum-long-value-${theme}.png`);
    });
  }
});
