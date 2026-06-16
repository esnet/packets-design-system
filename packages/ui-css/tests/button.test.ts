import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

type Theme = "light" | "dark";

const VARIANTS = ["primary", "secondary", "branded", "tertiary", "destructive"] as const;

function buildButtonRow(variant: string, element: "button" | "a" = "button"): string {
  const tag = element === "a" ? "a" : "button";
  const href = element === "a" ? ` href="#"` : "";
  return `
    <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
      <${tag}${href} class="pkts-button pkts-${variant} pkts-medium">Button</${tag}>
      <${tag}${href} id="hover-btn" class="pkts-button pkts-${variant} pkts-medium">Button</${tag}>
      <${tag}${href} id="focus-btn" class="pkts-button pkts-${variant} pkts-medium">Button</${tag}>
      <${tag}${href} class="pkts-button pkts-${variant} pkts-medium" disabled>Button</${tag}>
    </div>
  `;
}

test.describe("Pkts Button Component", () => {
  (["light", "dark"] as Theme[]).forEach((theme) => {
    VARIANTS.forEach((variant) => {
      test(`button-${variant}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(theme, buildButtonRow(variant));
        await page.setContent(html);
        await page.locator("#focus-btn").focus();
        await page.locator("#hover-btn").hover();
        await expect(page.locator("#container")).toHaveScreenshot(`button-${variant}-${theme}.png`);
      });
    });

    test(`button-as-link-${theme}`, async ({ page }) => {
      const html = createCSSTestHTML(theme, `
        <div id="container" style="display: inline-flex; gap: 8px; align-items: center; padding: 8px;">
          <a href="#" class="pkts-button pkts-primary pkts-medium">Button</a>
          <a href="#" id="hover-btn" class="pkts-button pkts-primary pkts-medium">Button</a>
          <a href="#" id="focus-btn" class="pkts-button pkts-primary pkts-medium">Button</a>
        </div>
      `);
      await page.setContent(html);
      await page.locator("#focus-btn").focus();
      await page.locator("#hover-btn").hover();
      await expect(page.locator("#container")).toHaveScreenshot(`button-as-link-${theme}.png`);
    });
  });
});
