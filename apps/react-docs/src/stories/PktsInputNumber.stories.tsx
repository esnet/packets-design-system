import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputNumber } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputNumber> = {
  title: "Components/PktsInputNumber",
  component: PktsInputNumber,
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

type Story = StoryObj<typeof PktsInputNumber>;

export const Default: Story = {};

/**
 * Can be bound with a min and max, and also rounds to the highest precision given amongst min, max, or step.
 */
export const BoundedAndPrecise: Story = {
  args: {
    min: "-1",
    max: "1",
    step: "0.0001",
  },
};

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
