import type { Meta, StoryObj } from "@storybook/react";
import { ESInputEmail } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputEmail> = {
  title: "Components/ESInputEmail",
  component: ESInputEmail,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
      defaultValue: "default",
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
    variant: "default",
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

type Story = StoryObj<typeof ESInputEmail>;

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
