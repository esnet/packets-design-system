/**
 * Test utilities for CSS-only component visual regression testing
 */

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSS_PATH = path.resolve(__dirname, "../dist/styles.css");

/**
 * Creates a complete HTML document for testing CSS-only components
 * @param theme - Theme to apply ('light' or 'dark')
 * @param content - HTML content to render (pure HTML with CSS classes)
 * @returns Complete HTML document as string
 */
export function createCSSTestHTML(
  theme: "light" | "dark",
  content: string
): string {
  // Read CSS content to inject inline
  const cssContent = fs.readFileSync(CSS_PATH, "utf-8");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Signika:wght@300..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
        rel="stylesheet"
      />
      <style>${cssContent}</style>
    </head>
    <body class="packets ${theme}" style="padding: 16px; margin: 0;">
      ${content}
    </body>
    </html>
  `;
}

/**
 * Creates a grid layout for testing multiple variants side-by-side
 * Useful for comprehensive component variant testing
 */
export function createVariantGrid(
  theme: "light" | "dark",
  items: string[]
): string {
  const gridContent = items
    .map((item) => `<div style="margin: 8px;">${item}</div>`)
    .join("");

  return createCSSTestHTML(
    theme,
    `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        ${gridContent}
      </div>
    `
  );
}

/**
 * Creates a vertical stack for testing component states
 */
export function createStateStack(
  theme: "light" | "dark",
  items: string[]
): string {
  const stackContent = items
    .map((item) => `<div style="margin-bottom: 16px;">${item}</div>`)
    .join("");

  return createCSSTestHTML(
    theme,
    `<div style="display: flex; flex-direction: column;">${stackContent}</div>`
  );
}
