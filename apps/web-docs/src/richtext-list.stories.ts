import type { Meta, StoryObj } from '@storybook/web-components';

/**
 * Provide simple styling for ordered and unordered lists.
 */
const meta: Meta = {
  title: 'RichText/List',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const NestedList: Story = {
  render: () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <ol>
        <li>First item in ordered list</li>
        <li>Second item in ordered list</li>
        <ul>
          <li>First item in single nest</li>
          <li>Second item in single nest</li>
          <li>
            <p>Nested list:</p>
            <ol>
              <li>First item in double nest</li>
              <li>Second item in double nest</li>
            </ol>
          </li>
        </ul>
        <li>Third item in ordered list</li>
      </ol>
    `;
    return root;
  },
};

export const UnorderedList: Story = {
  render: () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <ul>
        <li>First item in unordered list</li>
        <li>Second item in unordered list</li>
        <li>Third item in unordered list</li>
      </ul>
    `;
    return root;
  },
};

export const OrderedList: Story = {
  render: () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <ol>
        <li>First item in ordered list</li>
        <li>Second item in ordered list</li>
        <li>Third item in ordered list</li>
      </ol>
    `;
    return root;
  },
};
