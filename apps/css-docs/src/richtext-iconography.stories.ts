import type { Meta, StoryObj } from "@storybook/html";

/**
 * Packets applies global styling to [Lucide icons](https://lucide.dev/) via the `.lucide` class to standardize color.
 * Install Lucide for your framework and apply the `.lucide` class, or use SVGs directly with that class.
 *
 * See Design Tokens / Icons for available icons.
 */
const meta: Meta = {
  title: "RichText/Iconography",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

const iconSvg = (label: string) => `
  <div style="display:contents">
    <span>${label}</span>
    <svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
    </svg>
  </div>
`;

export const Default: Story = {
  render: () => {
    const root = document.createElement("div");
    root.style.cssText =
      "display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;justify-items:center;align-items:center";
    root.innerHTML = `
      <span>Server</span>
      <svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      <span>Database</span>
      <svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
      <span>Cloud</span>
      <svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
      <span>Computer</span>
      <svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    `;
    return root;
  },
};
