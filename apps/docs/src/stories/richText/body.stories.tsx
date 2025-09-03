import type { Meta, StoryObj } from "@storybook/react";

/**
 * Provide default typography and color for text, as well as styling for paragraphs, highlighting, italics, bold, strikethrough.
 */
const meta: Meta = {
  title: "RichText/Body",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
  ),
};
