import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS CommaSeperatedList Component", () => {
  test("comma-seperated-list-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; width: 400px;">
        <ul class="pkts-comma-seperated-list">
          <li class="comma-separated-list-item">Item 1</li>
          <li class="comma-separated-list-item">Item 2</li>
          <li class="comma-separated-list-item">Item 3</li>
          <li class="comma-separated-list-item">Item 4</li>
        </ul>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("comma-seperated-list-light.png");
  });
});
