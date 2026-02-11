import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsIconButton Web Component", () => {
  // Test all variants
  const variants = ['primary', 'secondary', 'branded', 'tertiary', 'destructive'];

  for (const variant of variants) {
    test(`${variant}-light`, async ({ page }) => {
      const html = createTestHTML("light", `
        <pkts-icon-button variant="${variant}">
          <pkts-icon name="Settings"></pkts-icon>
        </pkts-icon-button>
      `);
      await page.setContent(html);
      await page.waitForSelector("pkts-icon-button");
      const button = page.locator("pkts-icon-button > button").first();
      await expect(button).toHaveScreenshot(`PktsIconButton-${variant}-light.png`);
    });

    test(`${variant}-dark`, async ({ page }) => {
      const html = createTestHTML("dark", `
        <pkts-icon-button variant="${variant}">
          <pkts-icon name="Settings"></pkts-icon>
        </pkts-icon-button>
      `);
      await page.setContent(html);
      await page.waitForSelector("pkts-icon-button");
      const button = page.locator("pkts-icon-button > button").first();
      await expect(button).toHaveScreenshot(`PktsIconButton-${variant}-dark.png`);
    });
  }

  // Test disabled state
  test("disabled-light", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-icon-button disabled>
        <pkts-icon name="Settings"></pkts-icon>
      </pkts-icon-button>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-icon-button");
    const button = page.locator("pkts-icon-button > button").first();
    await expect(button).toHaveScreenshot("PktsIconButton-disabled-light.png");
  });

  // Test square variant
  test("square-light", async ({ page }) => {
    const html = createTestHTML("light", `
      <pkts-icon-button square>
        <pkts-icon name="Settings"></pkts-icon>
      </pkts-icon-button>
    `);
    await page.setContent(html);
    await page.waitForSelector("pkts-icon-button");
    const button = page.locator("pkts-icon-button > button").first();
    await expect(button).toHaveScreenshot("PktsIconButton-square-light.png");
  });
});
