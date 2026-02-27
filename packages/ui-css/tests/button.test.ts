import { test, expect } from "@playwright/test";
import { createCSSTestHTML, createVariantGrid, createStateStack } from "./test-utils";

test.describe("CSS Button Component", () => {
  const themes = ["light", "dark"] as const;

  // Test all button variants in light theme
  test("button-variants-light", async ({ page }) => {
    const html = createVariantGrid("light", [
      '<button class="pkts-button pkts-primary pkts-medium">Primary</button>',
      '<button class="pkts-button pkts-secondary pkts-medium">Secondary</button>',
      '<button class="pkts-button pkts-branded pkts-medium">Branded</button>',
      '<button class="pkts-button pkts-tertiary pkts-medium">Tertiary</button>',
      '<button class="pkts-button pkts-destructive pkts-medium">Destructive</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-variants-light.png");
  });

  // Test all button variants in dark theme
  test("button-variants-dark", async ({ page }) => {
    const html = createVariantGrid("dark", [
      '<button class="pkts-button pkts-primary pkts-medium">Primary</button>',
      '<button class="pkts-button pkts-secondary pkts-medium">Secondary</button>',
      '<button class="pkts-button pkts-branded pkts-medium">Branded</button>',
      '<button class="pkts-button pkts-tertiary pkts-medium">Tertiary</button>',
      '<button class="pkts-button pkts-destructive pkts-medium">Destructive</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-variants-dark.png");
  });

  // Test button sizes
  test("button-sizes-light", async ({ page }) => {
    const html = createStateStack("light", [
      '<button class="pkts-button pkts-primary pkts-medium">Medium Size</button>',
      '<button class="pkts-button pkts-primary pkts-xxlarge">XX-Large Size</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-sizes-light.png");
  });

  // Test button states (disabled)
  test("button-states-light", async ({ page }) => {
    const html = createStateStack("light", [
      '<button class="pkts-button pkts-primary pkts-medium">Normal</button>',
      '<button class="pkts-button pkts-primary pkts-medium" disabled>Disabled</button>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-states-light.png");
  });

  // Test button with fill variants
  test("button-fill-variants-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      `
        <div style="width: 300px;">
          <div style="margin-bottom: 16px;">
            <button class="pkts-button pkts-primary pkts-medium pkts-fill">Fill Button</button>
          </div>
          <div>
            <button class="pkts-button pkts-primary pkts-medium pkts-nofill">No Fill Button</button>
          </div>
        </div>
      `
    );

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-fill-variants-light.png");
  });

  // Test button as link
  test("button-as-link-light", async ({ page }) => {
    const html = createStateStack("light", [
      '<button class="pkts-button pkts-primary pkts-medium">Button Element</button>',
      '<a href="#" class="pkts-button pkts-primary pkts-medium">Link Element</a>',
    ]);

    await page.setContent(html);
    await expect(page).toHaveScreenshot("button-as-link-light.png");
  });

  // Test hover state (requires interaction)
  test("button-hover-light", async ({ page }) => {
    const html = createCSSTestHTML(
      "light",
      '<button class="pkts-button pkts-primary pkts-medium">Hover Me</button>'
    );

    await page.setContent(html);
    const button = page.locator("button");

    // Hover over the button
    await button.hover();
    await expect(page).toHaveScreenshot("button-hover-light.png");
  });

  // Test comprehensive variant comparison (light vs dark)
  for (const variant of ["primary", "secondary", "branded", "tertiary", "destructive"] as const) {
    for (const theme of themes) {
      test(`button-${variant}-${theme}`, async ({ page }) => {
        const html = createCSSTestHTML(
          theme,
          `<button class="pkts-button pkts-${variant} pkts-medium">${variant.charAt(0).toUpperCase() + variant.slice(1)} Button</button>`
        );

        await page.setContent(html);
        await expect(page).toHaveScreenshot(`button-${variant}-${theme}.png`);
      });
    }
  }
});
