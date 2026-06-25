import type { Meta, StoryObj } from '@storybook/web-components';

/**
 * Provide default typography and color for text, as well as styling for paragraphs, highlighting, italics, bold, strikethrough.
 */
const meta: Meta = {
  title: 'RichText/Body',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem';
    root.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:1rem">
        No highlight
        <span>Span text</span>
        <strong>Bold text</strong>
        <del>Strikethrough text</del>
        <em>Italics text</em>
        <hr />
        <span class="body2">Span text</span>
        <strong class="body2">Bold text</strong>
        <del class="body2">Strikethrough text</del>
        <em class="body2">Italics text</em>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        Blue Highlight
        <span class="highlight">Span text</span>
        <strong class="highlight">Bold text</strong>
        <del class="highlight">Strikethrough text</del>
        <em class="highlight">Italics text</em>
        <hr />
        <span class="body2 highlight">Span text</span>
        <strong class="body2 highlight">Bold text</strong>
        <del class="body2 highlight">Strikethrough text</del>
        <em class="body2 highlight">Italics text</em>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        Yellow Highlight
        <span class="highlight-yellow">Span text</span>
        <strong class="highlight-yellow">Bold text</strong>
        <del class="highlight-yellow">Strikethrough text</del>
        <em class="highlight-yellow">Italics text</em>
        <hr />
        <span class="body2 highlight-yellow">Span text</span>
        <strong class="body2 highlight-yellow">Bold text</strong>
        <del class="body2 highlight-yellow">Strikethrough text</del>
        <em class="body2 highlight-yellow">Italics text</em>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem">
        Pink Highlight
        <span class="highlight-pink">Span text</span>
        <strong class="highlight-pink">Bold text</strong>
        <del class="highlight-pink">Strikethrough text</del>
        <em class="highlight-pink">Italics text</em>
        <hr />
        <span class="body2 highlight-pink">Span text</span>
        <strong class="body2 highlight-pink">Bold text</strong>
        <del class="body2 highlight-pink">Strikethrough text</del>
        <em class="body2 highlight-pink">Italics text</em>
      </div>
    `;
    return root;
  },
};

export const DefaultTextStyling: Story = {
  render: () => {
    const root = document.createElement('span');
    root.textContent = 'This is how text is styled as default, with this font and this size. There are no additional stylings added to this text, no tag wrapped it to apply styling.';
    return root;
  },
};
