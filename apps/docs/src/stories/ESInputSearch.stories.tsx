import type { Meta, StoryObj } from "@storybook/react";
import { ESInputSearch } from "@esnet/packets-ui";
import { Brain, SearchIcon, SearchX, X } from "lucide-react";

const meta: Meta<typeof ESInputSearch> = {
  title: "Components/ESInputSearch",
  component: ESInputSearch,
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
    onSearchClick: {
      control: { type: "object" },
    },
    onSearchXClick: {
      control: { type: "object" },
    },
    SearchIcon: {
      control: "object",
      description:
        "Lucide icon to represent search, default to Lucide's Search",
    },
    SearchXIcon: {
      control: "object",
      description:
        "Lucide icon to represent search, default to Lucide's SearchX",
    },
  },
  args: {
    error: false,
    variant: "default",
    disabled: false,
    SearchIcon: SearchIcon,
    SearchXIcon: SearchX,
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

export const CustomIcons: Story = {
  args: {
    SearchIcon: Brain,
    SearchXIcon: X,
    placeholder: "Lucide icon custom controls",
  },
};
