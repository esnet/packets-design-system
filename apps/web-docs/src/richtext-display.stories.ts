import type { Meta, StoryObj } from '@storybook/web-components';

/**
 * Display provides large, attention-grabbing text styles for banners, landings, page titles, etc. Used with `<h1>` tags.
 */
const meta: Meta = {
  title: 'RichText/Display',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Displays: Story = {
  render: () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <h1 class="display">Display Text</h1>
      <h1 class="display branded">Display Text Branded</h1>
      <h1 class="display2">Display 2 Text</h1>
      <h1 class="display2 branded">Display 2 Text Branded</h1>
    `;
    return root;
  },
};

export const Example: Story = {
  render: () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <h1 class="display branded">Welcome to Packets</h1>
      <p>A design system created as a cross-organizational collaboration at ESnet.</p>
    `;
    return root;
  },
};
