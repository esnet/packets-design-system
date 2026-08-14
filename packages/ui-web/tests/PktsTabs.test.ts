import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

type Theme = "light" | "dark";

function buildTabsContent(): string {
  return `
    <div id="container" style="display: inline-flex; flex-direction: column; gap: 12px; padding: 8px;">
      <pkts-tabs>
        <li class="pkts-tab pkts-active"><a href="#">Tab 1</a></li>
        <li id="hover-tab" class="pkts-tab"><a href="#">Tab 2</a></li>
        <li class="pkts-tab"><a href="#">Tab 3</a></li>
      </pkts-tabs>
    </div>
  `;
}

test.describe("Pkts Tabs Web Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    test(`PktsTabs-${theme}`, async ({ page }) => {
      const html = createTestHTML(theme, buildTabsContent());
      await page.setContent(html);
      await page.waitForSelector("pkts-tabs");
      await page.waitForTimeout(200);
      await page.locator("#hover-tab").hover();
      await expect(page.locator("#container")).toHaveScreenshot(
        `PktsTabs-${theme}.png`,
      );
    });
  });
});
