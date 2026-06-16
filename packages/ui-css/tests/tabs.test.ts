import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

function buildTabsContent(): string {
  return `
    <div id="container" style="display: inline-flex; padding: 8px;">
      <section class="pkts-tabs">
        <ul class="tab-list">
          <li class="pkts-tab pkts-active"><a href="#">Tab 1</a></li>
          <li id="hover-tab" class="pkts-tab"><a href="#">Tab 2</a></li>
          <li class="pkts-tab"><a href="#">Tab 3</a></li>
        </ul>
      </section>
    </div>
  `;
}

test.describe("Pkts Tabs Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    test(`tabs-${theme}`, async ({ page }) => {
      const html = createCSSTestHTML(theme, buildTabsContent());
      await page.setContent(html);
      await page.waitForTimeout(100);
      await page.locator("#hover-tab").hover();

      const container = page.locator("#container");
      await expect(container).toHaveScreenshot(`tabs-${theme}.png`);
    });
  });
});
