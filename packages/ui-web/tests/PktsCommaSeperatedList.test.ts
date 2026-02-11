import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsCommaSeperatedList Web Component", () => {
  test("multiple-items", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-comma-seperated-list>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </pkts-comma-seperated-list>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-comma-seperated-list");
    const list = page.locator("pkts-comma-seperated-list > ul").first();
    await expect(list).toHaveScreenshot("PktsCommaSeperatedList-multiple-items.png");
  });

  test("single-item", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-comma-seperated-list>
        <li>Single Item</li>
      </pkts-comma-seperated-list>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-comma-seperated-list");
    const list = page.locator("pkts-comma-seperated-list > ul").first();
    await expect(list).toHaveScreenshot("PktsCommaSeperatedList-single-item.png");
  });
});
