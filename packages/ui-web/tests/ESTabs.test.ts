import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESTabs Web Component", () => {
  test("basic-tabs", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-tabs>
        <li><a href="#tab1">Tab 1</a></li>
        <li><a href="#tab2">Tab 2</a></li>
        <li><a href="#tab3">Tab 3</a></li>
      </es-tabs>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-tabs");
    const tabs = page.locator("es-tabs > div").first();
    await expect(tabs).toHaveScreenshot("ESTabs-basic.png");
  });
});
