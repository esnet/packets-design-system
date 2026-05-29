import { test, expect } from "@playwright/test";
import { createCSSTestHTML } from "./test-utils";

test.describe("RichText", () => {
  const themes = ["light", "dark"] as const;

  themes.forEach((theme) => {
    test(`${theme}-body`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <div id="container" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        No highlight
                        <span>Span text</span>
                        <strong>Bold text</strong>
                        <del>Strikethrough text</del>
                        <em>Italics text</em>
                        <hr>
                        <span class="body2">Span text</span>
                        <strong class="body2">Bold text</strong>
                        <del class="body2">Strikethrough text</del>
                        <em class="body2">Italics text</em>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        Blue Highlight
                        <span class="highlight">Span text</span>
                        <strong class="highlight">Bold text</strong>
                        <del class="highlight">Strikethrough text</del>
                        <em class="highlight">Italics text</em>
                        <hr>
                        <span class="body2 highlight">Span text</span>
                        <strong class="body2 highlight">Bold text</strong>
                        <del class="body2 highlight">Strikethrough text</del>
                        <em class="body2 highlight">Italics text</em>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        Yellow Highlight
                        <span class="highlight-yellow">Span text</span>
                        <strong class="highlight-yellow">Bold text</strong>
                        <del class="highlight-yellow">Strikethrough text</del>
                        <em class="highlight-yellow">Italics text</em>
                        <hr>
                        <span class="body2 highlight-yellow">Span text</span>
                        <strong class="body2 highlight-yellow">Bold text</strong>
                        <del class="body2 highlight-yellow">Strikethrough text</del>
                        <em class="body2 highlight-yellow">Italics text</em>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        Pink Highlight
                        <span class="highlight-pink">Span text</span>
                        <strong class="highlight-pink">Bold text</strong>
                        <del class="highlight-pink">Strikethrough text</del>
                        <em class="highlight-pink">Italics text</em>
                        <hr>
                        <span class="body2 highlight-pink">Span text</span>
                        <strong class="body2 highlight-pink">Bold text</strong>
                        <del class="body2 highlight-pink">Strikethrough text</del>
                        <em class="body2 highlight-pink">Italics text</em>
                    </div>
                </div>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `body-richtext-${theme}.png`,
      );
    });

    test(`${theme}-display`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <div id="container">
                    <h1 class="display">Display Text</h1>
                    <h1 class="display branded">Display Text Branded</h1>
                    <h1 class="display2">(Used in PktsTitleSection)</h1>
                    <h1 class="display2 branded">(Used in PktsTitleSection) Branded</h1>
                </div>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-display-${theme}.png`,
      );
    });

    test(`${theme}-anchor`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <div id="container" style="display: flex; flex-direction: column;">
                    <a href="/">Example Link (default), (${theme})</a>
                    <a href="/" data-testid="hover">Example Link (hover), (${theme})</a>
                    <a href="/" data-testid="focus">Example Link (focus), (${theme})</a>
                    <a>Example Link (inactive), (${theme})</a>
                </div>
            `,
      );
      await page.setContent(html);
      await page.locator('[data-testid="hover"]').hover();
      await page.locator('[data-testid="focus"]').focus();
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-anchor-${theme}.png`,
      );
    });

    test(`${theme}-header`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <div id="container" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(6, auto); gap: 2rem;">
                    <h1>Heading 1</h1>
                    <h1 class="accent">Heading 1</h1>
                    <h1 class="accent2">Heading 1</h1>

                    <h2>Heading 2</h2>
                    <h2 class="accent">Heading 2</h2>
                    <h2 class="accent2">Heading 2</h2>

                    <h3>Heading 3</h3>
                    <h3 class="accent">Heading 3</h3>
                    <h3 class="accent2">Heading 3</h3>

                    <h4>Heading 4</h4>
                    <h4 class="accent">Heading 4</h4>
                    <h4 class="accent2">Heading 4</h4>

                    <h5>Heading 5</h5>
                    <h5 class="accent">Heading 5</h5>
                    <h5 class="accent2">Heading 5</h5>

                    <h6>Heading 6</h6>
                    <h6 class="accent">Heading 6</h6>
                    <h6 class="accent2">Heading 6</h6>
                </div>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-header-${theme}.png`,
      );
    });

    test(`${theme}-footer`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <footer id="container">Footer text. Copyright text.</footer>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-footer-${theme}.png`,
      );
    });

    test(`${theme}-caption`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <figcaption id="container">Caption Text. Used in PktsFigure.</figcaption>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-caption-${theme}.png`,
      );
    });

    test(`${theme}-inline-code`, async ({ page }) => {
      const code = String.raw`console.log("For inline code, use the &lt;code&gt; tag. For blocks, use PktsCodeBlock.")`;
      const html = createCSSTestHTML(
        theme,
        `
                <code id="container">${code}</code>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-code-${theme}.png`,
      );
    });

    test(`${theme}-list`, async ({ page }) => {
      const html = createCSSTestHTML(
        theme,
        `
                <ol id="container">
                    <li>First item in ordered list</li>
                    <li>
                        Second item in ordered list
                        <ul>
                            <li>First item in nested ordered list</li>
                            <li>Second item in nested ordered list</li>
                        </ul>
                    </li>
                    <li>Third item in ordered list</li>
                </ol>
            `,
      );
      await page.setContent(html);
      await expect(page.locator("#container")).toHaveScreenshot(
        `richtext-list-${theme}.png`,
      );
    });
  });
});
