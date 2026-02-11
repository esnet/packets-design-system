import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsIconButton } from "@esnet/packets-ui-react";
import { SettingsIcon } from "lucide-react";

const meta: Meta<typeof PktsIconButton> = {
  title: "Components/PktsIconButton",
  component: PktsIconButton,
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

type Story = StoryObj<typeof PktsIconButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Defaultbutton: Story = {
  render: (props) => (
    <PktsIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsIconButton>
  ),
  name: "PktsIconButton",
  args: {
    children: <SettingsIcon />,
    type: "button",
  },
};

export const Primary: Story = {
  render: (props) => (
    <PktsIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsIconButton>
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
    <PktsIconButton
      disabled
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsIconButton>
  ),
  name: "Disabled Primary ESIconButton",
  args: {
    children: <SettingsIcon />,
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: (props) => (
    <PktsIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsIconButton>
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
    <PktsIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsIconButton>
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
    <PktsIconButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsIconButton>
  ),
  name: "Branded ESIconButton",
  args: {
    children: <SettingsIcon />,
    type: "button",
    variant: "branded",
  },
};
