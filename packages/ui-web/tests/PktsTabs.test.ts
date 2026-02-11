import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsTabs Web Component", () => {
  test("basic-tabs", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-tabs>
        <li><a href="#tab1">Tab 1</a></li>
        <li><a href="#tab2">Tab 2</a></li>
        <li><a href="#tab3">Tab 3</a></li>
      </pkts-tabs>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-tabs");
    const tabs = page.locator("pkts-tabs > div").first();
    await expect(tabs).toHaveScreenshot("PktsTabs-basic.png");
  });
});
