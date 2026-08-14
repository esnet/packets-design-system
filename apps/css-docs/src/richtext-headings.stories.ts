import type { Meta, StoryObj } from "@storybook/html";

/**
 * Demonstrates the default styling for h1-h6 elements as provided by the design system stylesheet.
 */
const meta: Meta = {
  title: "RichText/Headings",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Headings: Story = {
  render: () => {
    const root = document.createElement("div");
    root.style.cssText =
      "display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(6,auto);gap:2rem";
    root.innerHTML = `
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
    `;
    return root;
  },
};

export const HeadingLink: Story = {
  render: () => {
    const root = document.createElement("h3");
    root.innerHTML = '<a href="/">Packets</a>';
    return root;
  },
};

export const Example: Story = {
  render: () => {
    const root = document.createElement("div");
    root.innerHTML = `
      <h1>Parts of Packets Docs</h1>
      <h2>Key Concepts</h2>
      <h3>Design Tokens</h3>
      <p>Design tokens are the foundation of the Packets design system, providing consistent color, spacing, and typography values.</p>
      <h2>FAQ</h2>
      <h3>How do I install Packets?</h3>
      <p>Install via npm: <code>npm install @esnet/packets-ui-css</code></p>
    `;
    return root;
  },
};
