import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESIconButton Web Component", () => {
  // Test all variants
  const variants = ['primary', 'secondary', 'branded', 'tertiary', 'destructive'];

  for (const variant of variants) {
    test(`${variant}-light`, async ({ page }) => {
      const html = createTestHTML("light", `
        <es-icon-button variant="${variant}">
          <es-icon name="Settings"></es-icon>
        </es-icon-button>
      `);
      await page.setContent(html);
      await page.waitForSelector("es-icon-button");
      const button = page.locator("es-icon-button > button").first();
      await expect(button).toHaveScreenshot(`ESIconButton-${variant}-light.png`);
    });

    test(`${variant}-dark`, async ({ page }) => {
      const html = createTestHTML("dark", `
        <es-icon-button variant="${variant}">
          <es-icon name="Settings"></es-icon>
        </es-icon-button>
      `);
      await page.setContent(html);
      await page.waitForSelector("es-icon-button");
      const button = page.locator("es-icon-button > button").first();
      await expect(button).toHaveScreenshot(`ESIconButton-${variant}-dark.png`);
    });
  }

  // Test disabled state
  test("disabled-light", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-icon-button disabled>
        <es-icon name="Settings"></es-icon>
      </es-icon-button>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-icon-button");
    const button = page.locator("es-icon-button > button").first();
    await expect(button).toHaveScreenshot("ESIconButton-disabled-light.png");
  });

  // Test square variant
  test("square-light", async ({ page }) => {
    const html = createTestHTML("light", `
      <es-icon-button square>
        <es-icon name="Settings"></es-icon>
      </es-icon-button>
    `);
    await page.setContent(html);
    await page.waitForSelector("es-icon-button");
    const button = page.locator("es-icon-button > button").first();
    await expect(button).toHaveScreenshot("ESIconButton-square-light.png");
  });
});
