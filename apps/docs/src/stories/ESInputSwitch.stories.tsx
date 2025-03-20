import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESInputSwitch } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputSwitch> = {
  title: "Components/ESInputSwitch",
  component: ESInputSwitch,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputSwitch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultSwitch: Story = {
  render: (props) => <ESInputSwitch {...props} />,
  name: "Simple Example",
  args: {
    id: "a-switch",
    label: "A Label",
  },
};

export const SwitchWithNoLabel: Story = {
  render: (props) => <ESInputSwitch {...props} />,
  name: "Switch with No Label Example",
  args: {
    id: "a-switch",
  },
};

export const SwitchInitiallyChecked: Story = {
  render: (props) => <ESInputSwitch {...props} />,
  name: "Switch initially set to checked",
  args: {
    id: "a-switch",
    initiallyChecked: true,
  },
};

export const SwitchDisabled: Story = {
  render: (props) => <ESInputSwitch {...props} />,
  name: "Switch is disabled",
  args: {
    id: "a-switch",
    isDisabled: true,
    label: "A Disabled Switch",
  },
};

export const SwitchDisabledButTurnedOn: Story = {
  render: (props) => <ESInputSwitch {...props} />,
  name: "Switch is disabled but turned on",
  args: {
    id: "a-switch",
    isDisabled: true,
    initiallyChecked: true,
    label: "A Disabled Switch",
  },
};

export const NoIcons: Story = {
  render: (props) => <ESInputSwitch {...props} />,
  name: "Switch icons are disabled",
  args: {
    id: "a-switch",
    label: "Switch with No Icons",
    showIcon: false,
  },
};
