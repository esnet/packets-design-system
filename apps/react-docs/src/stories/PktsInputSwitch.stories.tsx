import type { Meta, StoryObj } from "@storybook/react";
import { PktsInputSwitch } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsInputSwitch> = {
  title: "Components/PktsInputSwitch",
  component: PktsInputSwitch,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PktsInputSwitch>;

export const DefaultSwitch: Story = {};

export const NoIcons: Story = {
  args: {
    hideIcons: true,
  },
};

export const SecondaryStyle: Story = {
  args: {
    variant: "secondary",
    defaultChecked: true,
  },
};

export const SwitchInitiallyCheckedAndDisabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};
