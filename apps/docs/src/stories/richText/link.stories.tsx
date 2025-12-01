import type { Meta, StoryObj } from "@storybook/react";

/**
 * Provide simple styling for link and link variants.
 */
const meta: Meta = {
  title: "RichText/Link",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<Meta>;

/**
 * Links have a hover and active/focus style. By default, they are blue and underlined.
 */
export const Links: Story = {
  render: () => <a href="/">Example Link</a>,
};

/**
 * If a link has no `href` set, it is considered "inactive" and styled gray.
 * You can also force this by applying the `inactive` class to a anchor tag.
 */
export const Inactive: Story = { render: () => <a>Inactive Link</a> };
