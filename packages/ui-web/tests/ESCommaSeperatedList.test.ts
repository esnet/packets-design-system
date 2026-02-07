import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESCommaSeperatedList Web Component", () => {
  test("multiple-items", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-comma-seperated-list>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </es-comma-seperated-list>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-comma-seperated-list");
    const list = page.locator("es-comma-seperated-list > ul").first();
    await expect(list).toHaveScreenshot("ESCommaSeperatedList-multiple-items.png");
  });

  test("single-item", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-comma-seperated-list>
        <li>Single Item</li>
      </es-comma-seperated-list>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-comma-seperated-list");
    const list = page.locator("es-comma-seperated-list > ul").first();
    await expect(list).toHaveScreenshot("ESCommaSeperatedList-single-item.png");
  });
});
