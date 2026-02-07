import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESBreadcrumbs Web Component", () => {
  test("multiple-items", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-breadcrumbs>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Category</a></li>
        <li>Current Page</li>
      </es-breadcrumbs>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-breadcrumbs");
    const breadcrumbs = page.locator("es-breadcrumbs > ul").first();
    await expect(breadcrumbs).toHaveScreenshot("ESBreadcrumbs-multiple-items.png");
  });

  test("single-item", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-breadcrumbs>
        <li>Home</li>
      </es-breadcrumbs>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-breadcrumbs");
    const breadcrumbs = page.locator("es-breadcrumbs > ul").first();
    await expect(breadcrumbs).toHaveScreenshot("ESBreadcrumbs-single-item.png");
  });
});
