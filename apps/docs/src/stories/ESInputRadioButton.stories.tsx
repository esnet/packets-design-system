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
      url: "figma url",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputRadioButton>;

export const Default: Story = {};
