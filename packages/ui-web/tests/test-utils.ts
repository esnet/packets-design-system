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
const LUCIDE_UMD_PATH = path.resolve(__dirname, "../node_modules/lucide/dist/umd/lucide.min.js");

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
  const lucideUMD = fs.readFileSync(LUCIDE_UMD_PATH, "utf-8");

  // Replace the ESM import with a shim that uses the UMD global
  // Match: import{icons as t,createElement as e}from"lucide";
  const fixedJS = jsContent.replace(
    /import\s*\{([^}]+)\}\s*from\s*["']lucide["'];?/g,
    (match, imports) => {
      // Handle imports with or without aliases: "icons as t, createElement as e" or "icons, createElement"
      const importList = imports.split(',').map((imp: string) => imp.trim());
      const mappings = importList.map((imp: string) => {
        // Check if this import has an alias (e.g., "icons as t")
        const aliasMatch = imp.match(/^(.+?)\s+as\s+(.+)$/);
        if (aliasMatch) {
          const [, original, alias] = aliasMatch;
          return `const ${alias.trim()}=window.lucide.${original.trim()};`;
        } else {
          return `const ${imp}=window.lucide.${imp};`;
        }
      }).join('');
      return mappings;
    }
  );

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${cssContent}</style>
      <script>
        ${lucideUMD}
      </script>
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
