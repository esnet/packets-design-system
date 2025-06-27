import type { Meta, StoryObj } from "@storybook/react";
import { ESInputPassword } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputPassword> = {
  title: "Components/ESInputPassword",
  component: ESInputPassword,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof ESInputPassword>;

export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
};
