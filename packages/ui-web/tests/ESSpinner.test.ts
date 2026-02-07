import { test, expect } from "@playwright/test";
import { createTestHTML } from "./test-utils";

test.describe("ESSpinner Web Component", () => {
  const themes = ["light", "dark"] as const;

  for (const theme of themes) {
    test(`default-${theme}`, async ({ page }) => {
      const html = createTestHTML(theme, `<es-spinner></es-spinner>`);
      await page.setContent(html);
      await page.waitForSelector("es-spinner");
      await page.waitForTimeout(100);

      // Screenshot the inner div which has the actual styling
      const spinner = page.locator("es-spinner div");
      await expect(spinner).toHaveScreenshot(`ESSpinner-default-${theme}.png`);
    });
  }

  test("accessibility", async ({ page }) => {
    const html = createTestHTML("light", `<es-spinner></es-spinner>`);
    await page.setContent(html);
    await page.waitForSelector("es-spinner");

    const spinner = page.locator("es-spinner div");
    await expect(spinner).toHaveAttribute("aria-busy", "true");
    await expect(spinner).toHaveAttribute("role", "alert");
  });

  test("prefers-reduced-motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    const html = createTestHTML("light", `<es-spinner></es-spinner>`);
    await page.setContent(html);
    await page.waitForSelector("es-spinner");

    const spinner = page.locator("es-spinner div");

    // Disable animations for screenshot stability
    await spinner.evaluate((el) => {
      el.style.setProperty("animation", "none");
    });

    await expect(spinner).toHaveScreenshot("ESSpinner-prefers-reduced-motion.png");

    // Verify dots are hidden and message is visible
    const dots = page.locator("es-spinner .dot");
    const message = page.locator("es-spinner .no-motion-message");

    await expect(dots.first()).not.toBeVisible();
    await expect(message).toBeVisible();
  });
});
