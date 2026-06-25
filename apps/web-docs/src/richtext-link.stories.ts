import type { Meta, StoryObj } from '@storybook/web-components';

/**
 * Provide simple styling for link and link variants.
 */
const meta: Meta = {
  title: 'RichText/Link',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

/**
 * Links have a hover and active/focus style. By default, they are blue and underlined.
 */
export const Links: Story = {
  render: () => {
    const a = document.createElement('a');
    a.href = '/';
    a.textContent = 'Example Link';
    return a;
  },
};

/**
 * If a link has no `href` set, it is considered "inactive" and styled gray.
 * You can also force this by applying the `inactive` class to an anchor tag.
 */
export const Inactive: Story = {
  render: () => {
    const a = document.createElement('a');
    a.textContent = 'Inactive Link';
    return a;
  },
};
