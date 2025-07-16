import type { Meta, StoryObj } from "@storybook/react";
import { ESInputRadioButton } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputRadioButton> = {
  title: "Components/ESInputRadioButton",
  component: ESInputRadioButton,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6077-1904&t=bYmaTE26LRvhzkPD-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputRadioButton>;

export const Default: Story = {};

export const BrandedDisabledFilled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
