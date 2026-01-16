import type { Meta, StoryObj } from "@storybook/react";

/**
 * Provide default typography and color for text, as well as styling for paragraphs, highlighting, italics, bold, strikethrough.
 */
const meta: Meta = {
  title: "RichText/Footer",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <footer>Footer text.</footer>,
};

/**
 * This example uses only the stylesheet provided by default from packets, no additional inline styling was added.
 */
export const DefaultTextStyling: Story = {
  render: () => (
    <>
      <body>
        <header>
          <h1>Fake Text Header</h1>
        </header>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <footer>
          Copyright © 2025 Fake Not A Real Thing. All Rights Reserved.
        </footer>
      </body>
    </>
  ),
};
