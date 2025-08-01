import type { Meta, StoryObj } from "@storybook/react";
import { ESInputNumber } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputNumber> = {
  title: "Components/ESInputNumber",
  component: ESInputNumber,
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
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
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

type Story = StoryObj<typeof ESInputNumber>;

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
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "disabled-password",
  },
};

export const WithMinMaxStep: Story = {
  args: {
    min: "-10",
    max: "10",
    step: "3",
  },
};
