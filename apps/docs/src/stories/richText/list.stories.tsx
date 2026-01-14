import type { Meta, StoryObj } from "@storybook/react";

/**
 * Provide simple styling for ordered and unordered lists.
 */
const meta: Meta = {
  title: "RichText/List",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const NestedList: Story = {
  render: () => (
    <div>
      <ol>
        <li>First item in ordered list</li>
        <li>Second item in ordered list</li>
        <ul>
          <li>First item in single nest</li>
          <li>Second item in single nest</li>
          <ol>
            <li>First item in double nest</li>
            <li>Second item in double nest</li>
          </ol>
        </ul>
        <li>Third item in ordered list</li>
      </ol>
    </div>
  ),
};

export const UnorderedList: Story = {
  render: () => (
    <div>
      <ul>
        <li>First item in unordered list</li>
        <li>Second item in unordered list</li>
        <li>Third item in unordered list</li>
      </ul>
    </div>
  ),
};

export const OrderedList: Story = {
  render: () => (
    <div>
      <ol>
        <li>First item in ordered list</li>
        <li>Second item in ordered list</li>
        <li>Third item in ordered list</li>
      </ol>
    </div>
  ),
};
