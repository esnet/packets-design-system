import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESInputSwitch } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputSwitch> = {
  title: "Components/ESInputSwitch",
  component: ESInputSwitch,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ESInputSwitch>;

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
