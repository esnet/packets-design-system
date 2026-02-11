import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsBreadcrumbs Web Component", () => {
  test("multiple-items", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-breadcrumbs>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Category</a></li>
        <li>Current Page</li>
      </pkts-breadcrumbs>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-breadcrumbs");
    const breadcrumbs = page.locator("pkts-breadcrumbs > ul").first();
    await expect(breadcrumbs).toHaveScreenshot("PktsBreadcrumbs-multiple-items.png");
  });

  test("single-item", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-breadcrumbs>
        <li>Home</li>
      </pkts-breadcrumbs>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-breadcrumbs");
    const breadcrumbs = page.locator("pkts-breadcrumbs > ul").first();
    await expect(breadcrumbs).toHaveScreenshot("PktsBreadcrumbs-single-item.png");
  });
});
