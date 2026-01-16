import type { Meta, StoryObj } from "@storybook/react";
import { ESInputSearch } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputSearch> = {
  title: "Components/ESInputSearch",
  component: ESInputSearch,
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
    onSearchClick: {
      control: { type: "object" },
    },
    onXClick: {
      control: { type: "object" },
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
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=5266-1735&p=f&t=GM7I6Iu2ED85N1w0-0",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputSearch>;

export const Default: Story = {};

export const BrandedWithDefaultValueSet: Story = {
  args: {
    defaultValue: "Text already set",
    placeholder: "Placeholder search",
    variant: "branded",
  },
};

export const DisabledWithDefaultValue: Story = {
  args: {
    defaultValue: "Text already set",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: "Bad Query",
    error: true,
  },
};
