import type { Meta, StoryObj } from "@storybook/react";
import { ESIcon } from "@esnet/packets-ui";

const meta: Meta<typeof ESIcon> = {
  title: "Components/ESIcon",
  component: ESIcon,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6070-5684",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESIcon>;

export const Settings: Story = {
  args: {
    name: "settings",
  },
};

export const SearchIcon: Story = {
  args: {
    name: "search",
  },
};

export const BigRedApple: Story = {
  args: {
    name: "apple",
    size: 48,
    color: "red",
    fill: "red",
  },
};
