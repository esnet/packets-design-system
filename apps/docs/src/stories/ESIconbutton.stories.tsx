import type { Meta, StoryObj } from "@storybook/react";
import { ESIconButton } from "@esnet/packets-ui";

const meta: Meta<typeof ESIconButton> = {
  title: "Components/ESIconButton",
  component: ESIconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "branded", "tertiary", "destructive"],
      defaultValue: "secondary",
    },
    square: {
      control: { type: "boolean" },
      description: "Whether to make the button a square ratio or not",
    },
    name: {
      description: "The name of the Lucide icon to use. Required.",
    },
  },
  args: {
    variant: "primary",
    square: false,
  },
};

export default meta;

type Story = StoryObj<typeof ESIconButton>;

export const Default: Story = {
  args: {
    name: "settings",
  },
};

export const SquareRatioBranded: Story = {
  args: {
    name: "settings",
    variant: "branded",
    square: true,
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
      <ESIconButton
        name="apple"
        variant="primary"
        onClick={() => alert("Primary")}
      />
      <ESIconButton
        name="banana"
        variant="secondary"
        onClick={() => alert("Secondary")}
      />
      <ESIconButton
        name="bookmark"
        variant="tertiary"
        onClick={() => alert("Tertiary")}
      />
      <ESIconButton
        name="globe"
        variant="branded"
        onClick={() => alert("Branded")}
      />
      <ESIconButton
        name="trash-2"
        variant="destructive"
        onClick={() => alert("Destructive")}
      />
      <ESIconButton name="apple" variant="primary" disabled />
      <ESIconButton name="banana" variant="secondary" disabled />
      <ESIconButton name="bookmark" variant="tertiary" disabled />
      <ESIconButton name="globe" variant="branded" disabled />
      <ESIconButton name="trash-2" variant="destructive" disabled />
      <ESIconButton name="apple" variant="primary" square />
      <ESIconButton name="banana" variant="secondary" square />
      <ESIconButton name="bookmark" variant="tertiary" square />
      <ESIconButton name="globe" variant="branded" square />
      <ESIconButton name="trash-2" variant="destructive" square />
    </div>
  ),
};
