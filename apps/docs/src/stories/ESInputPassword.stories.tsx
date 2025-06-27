import type { Meta, StoryObj } from "@storybook/react";
import { ESInputPassword } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputPassword> = {
  title: "Components/ESInputPassword",
  component: ESInputPassword,
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

type Story = StoryObj<typeof ESInputPassword>;

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
