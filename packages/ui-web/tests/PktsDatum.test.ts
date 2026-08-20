import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("Pkts Datum Web Component", () => {
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    test(`PktsDatum-variants-${theme}`, async ({ page }) => {
      const html = createTestHTML(
        theme,
        `
        <div id="container" style="display: inline-flex; flex-direction: column; gap: 16px; padding: 8px; width: 120px;">
          <pkts-datum title="Label">Value</pkts-datum>
          <pkts-datum title="Status">This is a longer value to test text wrapping</pkts-datum>
        </div>
      `,
      );
      await page.setContent(html);
      await page.waitForSelector("pkts-datum");
      await page.waitForTimeout(200);
      await expect(page.locator("#container")).toHaveScreenshot(
        `PktsDatum-variants-${theme}.png`,
      );
    });
  }
});
