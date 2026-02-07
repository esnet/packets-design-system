/**
 * Test utilities for Web Component visual regression testing
 */

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSS_PATH = path.resolve(__dirname, "../../ui-css/dist/styles.css");
const JS_PATH = path.resolve(__dirname, "../dist/esm/bundle.js");

/**
 * Creates a complete HTML document for testing Web Components
 * @param theme - Theme to apply ('light' or 'dark')
 * @param content - HTML content to render (Web Component markup)
 * @returns Complete HTML document as string
 */
export function createTestHTML(
  theme: "light" | "dark",
  content: string
): string {
  const cssContent = fs.readFileSync(CSS_PATH, "utf-8");
  const jsContent = fs.readFileSync(JS_PATH, "utf-8");

  // Simple mock for lucide - just provide empty objects
  const mockLucide = 'const t = {}, e = () => document.createElement("span");';

  // Replace the lucide import line with the mock
  const fixedJS = jsContent.replace(
    /import\s*\{[^}]+\}\s*from\s*["']lucide["']\s*;?/,
    mockLucide
  );

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${cssContent}</style>
      <script type="module">
        ${fixedJS}
      </script>
    </head>
    <body class="packets ${theme}" style="padding: 16px; margin: 0;">
      ${content}
    </body>
    </html>
  `;
}

/**
 * Creates a themed container div for testing
 * Useful for wrapping multiple components
 */
export function createThemedContainer(
  theme: "light" | "dark",
  content: string
): string {
  return `<div class="${theme}" style="padding: 16px;">${content}</div>`;
}
