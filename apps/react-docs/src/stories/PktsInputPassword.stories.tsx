import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputPassword } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputPassword> = {
  title: "Components/PktsInputPassword",
  component: PktsInputPassword,
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
          "An extension of ESInputText with some preset control buttons",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3286-1401&t=TognljsYJkwMjAAs-0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputPassword>;

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

export const BrandedDisabled: Story = {
  args: {
    variant: "branded",
    disabled: true,
  },
};
