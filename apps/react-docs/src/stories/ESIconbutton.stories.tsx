import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESIconButton } from "@esnet/packets-ui-react";
import { SettingsIcon } from "lucide-react";

const meta: Meta<typeof ESIconButton> = {
  title: "Components/ESIconButton",
  component: ESIconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "branded", "tertiary", "destructive"],
      defaultValue: "secondary",
    },
    disabled: {
      control: { type: "boolean" },
    },
    square: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESIconButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Defaultbutton: Story = {
  render: (props) => (
    <ESIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESIconButton>
  ),
  name: "ESIconButton",
  args: {
    children: <SettingsIcon />,
    type: "button",
  },
};

export const Primary: Story = {
  render: (props) => (
    <ESIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESIconButton>
  ),
  name: "Primary ESIconButton",
  args: {
    children: <SettingsIcon />,
    type: "button",
    variant: "primary",
  },
};

export const DisabledPrimary: Story = {
  render: (props) => (
    <ESIconButton
      disabled
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESIconButton>
  ),
  name: "Disabled Primary ESIconButton",
  args: {
    children: <SettingsIcon />,
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: (props) => (
    <ESIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESIconButton>
  ),
  name: "Secondary ESIconButton",
  args: {
    children: <SettingsIcon />,
    type: "button",
    variant: "secondary",
  },
};

export const SecondaryDisabled: Story = {
  render: (props) => (
    <ESIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESIconButton>
  ),
  name: "Secondary ESIconButton Disabled",
  args: {
    children: <SettingsIcon />,
    type: "button",
    variant: "secondary",
    disabled: true,
  },
};

export const Branded: Story = {
  render: (props) => (
    <ESIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESIconButton>
  ),
  name: "Branded ESIconButton",
  args: {
    children: <SettingsIcon />,
    type: "button",
    variant: "branded",
  },
};
