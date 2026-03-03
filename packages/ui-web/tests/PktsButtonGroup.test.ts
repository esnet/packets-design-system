import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsButtonGroup Web Component", () => {
  test("horizontal-with-label", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-button-group label="Actions" direction="horizontal">
        <li><pkts-button>Button 1</pkts-button></li>
        <li><pkts-button>Button 2</pkts-button></li>
      </pkts-button-group>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-button-group");
    const group = page.locator("pkts-button-group > section").first();
    await expect(group).toHaveScreenshot("PktsButtonGroup-horizontal-with-label.png");
  });

  test("vertical", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-button-group direction="vertical">
        <li><pkts-button>Button 1</pkts-button></li>
        <li><pkts-button>Button 2</pkts-button></li>
      </pkts-button-group>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-button-group", { state: "attached" });
    await page.waitForTimeout(100);
    const group = page.locator("pkts-button-group > section").first();
    await expect(group).toHaveScreenshot("PktsButtonGroup-vertical.png");
  });

  test("hide-label", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-button-group label="Hidden" hide-label>
        <li><pkts-button>Button 1</pkts-button></li>
      </pkts-button-group>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-button-group", { state: "attached" });
    await page.waitForTimeout(100);
    const group = page.locator("pkts-button-group > section").first();
    await expect(group).toHaveScreenshot("PktsButtonGroup-hide-label.png");
  });
});
