import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputEmail } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputEmail> = {
  title: "Components/PktsInputEmail",
  component: PktsInputEmail,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "branded"],
      defaultValue: "primary",
    },
    error: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    error: false,
    variant: "primary",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          "An extension of ESInputText with some preset control buttons to increment and decrement.",
      },
    },
    design: {
      type: "figma",
      url: "",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputEmail>;

export const Default: Story = {};

export const Branded: Story = {
  args: {
    variant: "branded",
    placeholder: "Branded",
  },
};

export const Error: Story = {
  args: {
    error: true,
    defaultValue: "Bad value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "disabled-email",
  },
};
