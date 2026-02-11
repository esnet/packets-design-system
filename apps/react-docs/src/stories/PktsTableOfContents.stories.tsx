import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsTableOfContents } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsTableOfContents> = {
  title: "Components/PktsTableOfContents",
  component: PktsTableOfContents,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsTableOfContents>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultTableOfContentsExample: Story = {
  render: (props) => <PktsTableOfContents {...props} />,
  name: "PktsTableOfContents Example",
  args: {
    title: "Design Tokens",
    sections: [
      {
        href: "/?path=/docs/design-tokens-breakpoints--docs",
        children: "Colors",
      },
      {
        href: "/?path=/docs/design-tokens-elevation-and-shadows--docs",
        children: "Elevation and Shadows",
      },
      {
        href: "/?path=/docs/design-tokens-icons--docs",
        children: "Icons",
      },
    ],
  },
};
