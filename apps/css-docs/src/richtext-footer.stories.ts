import type { Meta, StoryObj } from "@storybook/html";

/**
 * Provide default typography and color for footer text using the `<footer>` element or `.footer` class.
 */
const meta: Meta = {
  title: "RichText/Footer",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement("footer");
    el.textContent = "Footer text.";
    return el;
  },
};

/**
 * This example uses only the stylesheet provided by default from Packets, no additional inline styling was added.
 */
export const DefaultTextStyling: Story = {
  render: () => {
    const root = document.createElement("div");
    root.innerHTML = `
      <header><h1>Fake Text Header</h1></header>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <footer>Copyright &copy; 2025 Example. All Rights Reserved.</footer>
    `;
    return root;
  },
};
