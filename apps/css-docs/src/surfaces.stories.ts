import type { Meta, StoryObj } from '@storybook/html';

/**
 * By default, surface elements with surface parents will have a smooth visible separation.
 */
const meta: Meta = {
  title: 'Design Tokens/Surfaces',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;row-gap:8px;padding:0';
    root.innerHTML = `
      Background (from packets class)
      <div class="surface" style="display:flex;flex-direction:column;row-gap:8px;padding:16px;border-radius:16px">
        Surface 1 (class="surface")
        <div class="surface" style="display:flex;flex-direction:column;row-gap:8px;padding:16px;border-radius:16px">
          Surface 2 (class="surface")
          <footer>Footer text</footer>
        </div>
        <footer>Footer text</footer>
      </div>
      <footer>Footer text</footer>
    `;
    return root;
  },
};

/**
 * Avoid explicitly using the specific surface utility classes when possible.
 */
export const Explicit: Story = {
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;row-gap:8px';
    root.innerHTML = `
      <div class="surface1" style="padding:16px;border-radius:16px">
        Surface 1 (class="surface1")
        <div class="surface2" style="padding:16px;border-radius:16px;margin-top:8px">
          Surface 2 (class="surface2")
        </div>
      </div>
    `;
    return root;
  },
};
