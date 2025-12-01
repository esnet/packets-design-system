import type { Meta, StoryObj } from "@storybook/react";
import { ESTableOfContents } from "@esnet/packets-ui";

const meta: Meta<typeof ESTableOfContents> = {
  title: "Components/ESTableOfContents",
  component: ESTableOfContents,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESTableOfContents>;

export const Default: Story = {
  args: {
    title: "Design Tokens",
    links: [
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

export const FooterTableOfContents: Story = {
  render: () => {
    return (
      <footer style={{ display: "flex" }}>
        <ESTableOfContents
          title="About"
          links={[
            { href: "#", children: "Core Mission" },
            { href: "#", children: "News" },
            { href: "#", children: "Team" },
            { href: "#", children: "Blog" },
            { href: "#", children: "Careers" },
          ]}
        />
        <ESTableOfContents
          title="Contact"
          links={[
            { href: "#", children: "Contact" },
            { href: "#", children: "Support" },
            { href: "#", children: "Social Media" },
          ]}
        />
        <ESTableOfContents
          title="Legal"
          links={[
            { href: "#", children: "Privacy" },
            { href: "#", children: "Terms of Use" },
            { href: "#", children: "Legal" },
            { href: "#", children: "Cookie Notice" },
            { href: "#", children: "Feedback" },
          ]}
        />
      </footer>
    );
  },
  args: {
    title: "Design Tokens",
    links: [
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
