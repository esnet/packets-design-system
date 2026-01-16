import type { Meta, StoryObj } from "@storybook/react";

/**
 * Display provides large, attention-grabbing text styles for banners, landings, page titles, etc. Used with `<h1>` tags
 */
const meta: Meta = {
  title: "RichText/Display",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Displays: Story = {
  render: () => (
    <div>
      <h1 className="display">Display Text</h1>
      <h1 className="display branded">Display Text Branded</h1>
      <h1 className="display2">Display 2 Text</h1>
      <h1 className="display2 branded">Display 2 Text Branded</h1>
    </div>
  ),
};

export const Example: Story = {
  render: () => (
    <div>
      <h1 className="display branded">Welcome to Terranova</h1>
      <p>
        Terranova is a suite of tools to create network map representations.
      </p>
    </div>
  ),
};
