import type { Meta, StoryObj } from "@storybook/react";
import { ESDivider } from "@esnet/packets-ui";

const meta: Meta<typeof ESDivider> = {
  title: "Components/ESDivider",
  component: ESDivider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESDivider>;

export const Default: Story = {
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=5318-13030&t=eI8vufFgGxYSKAJ8-0",
    },
  },
};

export const Branded: Story = {
  args: {
    variant: "branded",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=5318-13030&t=eI8vufFgGxYSKAJ8-0",
    },
  },
};
