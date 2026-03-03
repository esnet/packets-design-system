import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("PktsSpinner Web Component", () => {
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    test(`default-${theme}`, async ({ page }) => {
      const html = createTestHTML(theme, `<pkts-spinner></pkts-spinner>`);
      await page.setContent(html);
      await page.waitForSelector("pkts-spinner");
      await page.waitForTimeout(100);

      // Screenshot the inner div which has the actual styling
      const spinner = page.locator("pkts-spinner div");
      await expect(spinner).toHaveScreenshot(`PktsSpinner-default-${theme}.png`);
    });
  }

  test("accessibility", async ({ page }) => {
    const html = createTestHTML("light", `<pkts-spinner></pkts-spinner>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-spinner");

    const spinner = page.locator("pkts-spinner div");
    await expect(spinner).toHaveAttribute("aria-busy", "true");
    await expect(spinner).toHaveAttribute("role", "alert");
  });

  test("prefers-reduced-motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    const html = createTestHTML("light", `<pkts-spinner></pkts-spinner>`);
    await page.setContent(html);
    await page.waitForSelector("pkts-spinner");

    const spinner = page.locator("pkts-spinner div");

    // Disable animations for screenshot stability
    await spinner.evaluate((el) => {
      el.style.setProperty("animation", "none");
    });

    await expect(spinner).toHaveScreenshot("PktsSpinner-prefers-reduced-motion.png");

    // Verify dots are hidden and message is visible
    const dots = page.locator("pkts-spinner .dot");
    const message = page.locator("pkts-spinner .no-motion-message");

    await expect(dots.first()).not.toBeVisible();
    await expect(message).toBeVisible();
  });
});
