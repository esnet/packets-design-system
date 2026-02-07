import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESButtonGroup Web Component", () => {
  test("horizontal-with-label", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-button-group label="Actions" direction="horizontal">
        <li><es-button>Button 1</es-button></li>
        <li><es-button>Button 2</es-button></li>
      </es-button-group>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-button-group");
    const group = page.locator("es-button-group > section").first();
    await expect(group).toHaveScreenshot("ESButtonGroup-horizontal-with-label.png");
  });

  test("vertical", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-button-group direction="vertical">
        <li><es-button>Button 1</es-button></li>
        <li><es-button>Button 2</es-button></li>
      </es-button-group>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-button-group", { state: "attached" });
    await page.waitForTimeout(100);
    const group = page.locator("es-button-group > section").first();
    await expect(group).toHaveScreenshot("ESButtonGroup-vertical.png");
  });

  test("hide-label", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-button-group label="Hidden" hide-label>
        <li><es-button>Button 1</es-button></li>
      </es-button-group>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-button-group", { state: "attached" });
    await page.waitForTimeout(100);
    const group = page.locator("es-button-group > section").first();
    await expect(group).toHaveScreenshot("ESButtonGroup-hide-label.png");
  });
});
