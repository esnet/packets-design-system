import type { Meta, StoryObj } from "@storybook/react";
import { ESButton, ESIcon } from "@esnet/packets-ui";

// Typically we would use a type annotation of const meta: Meta<typeof ESButton>,
// but due to ESButtonProps being a discriminated union type,
// Storybook autodocs fails to process it correctly, thus we must use satisfies
const meta: unknown = {
  title: "Components/ESButton",
  component: ESButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "branded", "tertiary", "destructive"],
      defaultValue: "secondary",
    },
    as: {
      control: { type: "radio" },
      options: ["button", "a"],
      defaultValue: "button",
      description:
        "Whether to render as a button or anchor tag, with their respective props.",
    },
    append: {
      control: { type: "object" },
      description: "Appendable ESIcon, ESAvatar, or other React element",
    },
    prepend: {
      control: { type: "object" },
      description: "Prependable ESIcon, ESAvatar, or other React element",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-369&t=vvvFZvCMEJjFdQf6-4",
    },
  },
} satisfies Meta<typeof ESButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: "ESButton",
  },
};

export const BrandedButtonAsAnchor: Story = {
  args: {
    as: "a",
    href: "/",
    children: "Link to Packets Design System Home",
    append: <ESIcon name="link-2" />,
    variant: "branded",
  },
};

export const SecondaryButtonAsAnchorForExternalSite: Story = {
  args: {
    as: "a",
    href: "https://www.google.com",
    children: "Google",
    append: <ESIcon name="arrow-up-right-from-square" />,
    variant: "secondary",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "16px",
      }}
    >
      <ESButton variant="primary" onClick={() => alert("Primary")}>
        Primary
      </ESButton>
      <ESButton variant="secondary" onClick={() => alert("Secondary")}>
        Secondary
      </ESButton>
      <ESButton variant="tertiary" onClick={() => alert("Tertiary")}>
        Tertiary
      </ESButton>
      <ESButton variant="branded" onClick={() => alert("Branded")}>
        Branded
      </ESButton>
      <ESButton variant="destructive" onClick={() => alert("Destructive")}>
        Destructive
      </ESButton>
      <ESButton variant="primary" disabled>
        Primary Disabled
      </ESButton>
      <ESButton variant="secondary" disabled>
        Secondary Disabled
      </ESButton>
      <ESButton variant="tertiary" disabled>
        Tertiary Disabled
      </ESButton>
      <ESButton variant="branded" disabled>
        Branded Disabled
      </ESButton>
      <ESButton variant="destructive" disabled>
        Destructive Disabled
      </ESButton>
      <ESButton append={<ESIcon name="link" />} variant="primary">
        Appended
      </ESButton>
      <ESButton
        append={<ESIcon name="arrow-up-right-from-square" />}
        variant="secondary"
      >
        Appended
      </ESButton>
      <ESButton append={<ESIcon name="apple" />} variant="tertiary">
        Appended
      </ESButton>
      <ESButton append={<ESIcon name="globe" />} variant="branded">
        Appended
      </ESButton>
      <ESButton append={<ESIcon name="trash-2" />} variant="destructive">
        Appended
      </ESButton>
      <ESButton prepend={<ESIcon name="link" />} variant="primary">
        Prepended
      </ESButton>
      <ESButton
        prepend={<ESIcon name="arrow-up-right-from-square" />}
        variant="secondary"
      >
        Prepended
      </ESButton>
      <ESButton prepend={<ESIcon name="apple" />} variant="tertiary">
        Prepended
      </ESButton>
      <ESButton prepend={<ESIcon name="globe" />} variant="branded">
        Prepended
      </ESButton>
      <ESButton prepend={<ESIcon name="trash-2" />} variant="destructive">
        Prepended
      </ESButton>
    </div>
  ),
};
