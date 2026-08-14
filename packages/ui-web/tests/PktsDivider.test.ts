import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

function buildDividerContent(): string {
  return `
    <div id="container" style="display: inline-flex; flex-direction: column; gap: 12px; padding: 8px; width: 320px;">
      <pkts-divider></pkts-divider>
      <pkts-divider variant="branded"></pkts-divider>
    </div>
  `;
}

test.describe("Pkts Divider Web Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    test(`PktsDivider-variants-${theme}`, async ({ page }) => {
      const html = createTestHTML(theme, buildDividerContent());
      await page.setContent(html);
      await page.waitForTimeout(200);
      await expect(page.locator("#container")).toHaveScreenshot(
        `PktsDivider-variants-${theme}.png`,
      );
    });
  });
});
