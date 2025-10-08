import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

test.describe("RichText", () => {
  const themes = ["light", "dark"];
  themes.forEach((theme) => {
    // typography test: body
    test(`${theme}-body`, async ({ mount }) => {
      const component = await mount(
        <body className={theme}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.5rem",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              No highlight
              <span>Span text</span>
              <strong>Bold text</strong>
              <del>Strikethrough text</del>
              <em>Italics text</em>
              <hr />
              <span className="body2">Span text</span>
              <strong className="body2">Bold text</strong>
              <del className="body2">Strikethrough text</del>
              <em className="body2">Italics text</em>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              Blue Highlight
              <span className="highlight">Span text</span>
              <strong className="highlight">Bold text</strong>
              <del className="highlight">Strikethrough text</del>
              <em className="highlight">Italics text</em>
              <hr />
              <span className="body2 highlight">Span text</span>
              <strong className="body2 highlight">Bold text</strong>
              <del className="body2 highlight">Strikethrough text</del>
              <em className="body2 highlight">Italics text</em>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              Yellow Highlight
              <span className="highlight-yellow">Span text</span>
              <strong className="highlight-yellow">Bold text</strong>
              <del className="highlight-yellow">Strikethrough text</del>
              <em className="highlight-yellow">Italics text</em>
              <hr />
              <span className="body2 highlight-yellow">Span text</span>
              <strong className="body2 highlight-yellow">Bold text</strong>
              <del className="body2 highlight-yellow">Strikethrough text</del>
              <em className="body2 highlight-yellow">Italics text</em>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              Yellow Highlight
              <span className="highlight-pink">Span text</span>
              <strong className="highlight-pink">Bold text</strong>
              <del className="highlight-pink">Strikethrough text</del>
              <em className="highlight-pink">Italics text</em>
              <hr />
              <span className="body2 highlight-pink">Span text</span>
              <strong className="body2 highlight-pink">Bold text</strong>
              <del className="body2 highlight-pink">Strikethrough text</del>
              <em className="body2 highlight-pink">Italics text</em>
            </div>
          </div>
        </body>
      );
      await expect(component).toHaveScreenshot();
    });

    // typography test: display
    test(`${theme}-display`, async ({ mount }) => {
      const component = await mount(
        <body className={theme}>
          <h1 className="display">Display Text</h1>
          <h1 className="display branded">Display Text Branded</h1>
          <h1 className="display2">(Used in ESTitleSection)</h1>
          <h1 className="display2 branded">(Used in ESTitleSection) Branded</h1>
        </body>
      );
      await expect(component).toHaveScreenshot();
    });

    // typography test: anchor
    ["default", "hover", "focus", "inactive"].forEach((actionState) => {
      test(`${theme}-anchor-${actionState}`, async ({ mount }) => {
        const component = await mount(
          <body className={theme}>
            <a href={actionState !== "inactive" ? "/" : undefined}>
              Example Link ({theme})
            </a>
          </body>
        );
        const anchor = component.locator("a");
        if (actionState === "hover") await anchor.hover();
        if (actionState === "focus") await anchor.focus();
        await expect(component).toHaveScreenshot();
      });
    });

    // typography test: header
    test(`${theme}-header`, async ({ mount }) => {
      const component = await mount(
        <body className={theme}>
          {" "}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(6, auto)",
              gap: "2rem",
            }}
          >
            <h1>Heading 1</h1>
            <h1 className="accent">Heading 1</h1>
            <h1 className="accent2">Heading 1</h1>

            <h2>Heading 2</h2>
            <h2 className="accent">Heading 2</h2>
            <h2 className="accent2">Heading 2</h2>

            <h3>Heading 3</h3>
            <h3 className="accent">Heading 3</h3>
            <h3 className="accent2">Heading 3</h3>

            <h4>Heading 4</h4>
            <h4 className="accent">Heading 4</h4>
            <h4 className="accent2">Heading 4</h4>

            <h5>Heading 5</h5>
            <h5 className="accent">Heading 5</h5>
            <h5 className="accent2">Heading 5</h5>

            <h6>Heading 6</h6>
            <h6 className="accent">Heading 6</h6>
            <h6 className="accent2">Heading 6</h6>
          </div>
        </body>
      );
      await expect(component).toHaveScreenshot();
    });

    // typography test: footer
    test(`${theme}-footer`, async ({ mount }) => {
      const component = await mount(
        <body className={theme}>
          <footer>Footer text. Copyright text.</footer>
        </body>
      );
      await expect(component).toHaveScreenshot();
    });

    // typography test: caption
    test(`${theme}-caption`, async ({ mount }) => {
      const component = await mount(
        <body className={theme}>
          <figcaption>Caption Text. Used in ESFigure.</figcaption>
        </body>
      );
      await expect(component).toHaveScreenshot();
    });

    // typography test: code
    test(`${theme}-inline-code`, async ({ mount }) => {
      const code =
        'console.log("For inline code, use the <code> tag. For blocks, use ESCodeBlock.")';
      const component = await mount(
        <body className={theme}>
          <code>{code}</code>
        </body>
      );
      await expect(component).toHaveScreenshot();
    });

    // typography test: list
    test(`${theme}-list`, async ({ mount }) => {
      const component = await mount(
        <body className={theme}>
          <ol>
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
        </body>
      );
      await expect(component).toHaveScreenshot();
    });
  });
});
