import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("CSS Breadcrumbs Component", () => {
  test("breadcrumbs-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
      <div id="container" style="padding: 16px; width: 600px;">
        <ul class="pkts-breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Category</a></li>
          <li>Current Page</li>
        </ul>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("breadcrumbs-light.png");
  });

  test("breadcrumbs-dark", async ({ page }) => {
    const html = createCSSTestHTML(
      "dark",
      `
      <div id="container" style="padding: 16px; width: 600px;">
        <ul class="pkts-breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li>Current Page</li>
        </ul>
      </div>
    `,
    );
    await page.setContent(html);
    await page.waitForTimeout(100);

    const container = page.locator("#container");
    await expect(container).toHaveScreenshot("breadcrumbs-dark.png");
  });
});
