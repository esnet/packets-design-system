import type { Meta, StoryObj } from "@storybook/react";
import { ESButton } from "@esnet/packets-ui";

const meta: Meta<typeof ESButton> = {
  title: "Components/ESButton",
  component: ESButton,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "branded", "tertiary", "destructive"],
      defaultValue: "secondary",
    },
    fill: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Defaultbutton: Story = {
  render: (props) => (
    <ESButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESButton>
  ),
  name: "ESButton",
  args: {
    children: "ESButton",
    type: "button",
    fill: false,
  },
};

export const Primary: Story = {
  render: (props) => (
    <ESButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESButton>
  ),
  name: "Primary ESButton",
  args: {
    children: "Primary ESButton",
    type: "button",
    variant: "primary",
  },
};

export const DisabledPrimary: Story = {
  render: (props) => (
    <ESButton
      disabled
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESButton>
  ),
  name: "Disabled Primary ESButton",
  args: {
    children: "Disabled Primary ESButton",
    type: "button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: (props) => (
    <ESButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESButton>
  ),
  name: "Secondary ESButton",
  args: {
    children: "Secondary ESButton",
    type: "button",
    variant: "secondary",
  },
};

export const SecondaryDisabled: Story = {
  render: (props) => (
    <ESButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESButton>
  ),
  name: "Secondary ESButton Disabled",
  args: {
    children: "Secondary ESButton Disabled",
    type: "button",
    variant: "secondary",
    disabled: true,
  },
};

export const Branded: Story = {
  render: (props) => (
    <ESButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </ESButton>
  ),
  name: "Branded ESButton",
  args: {
    children: "Branded ESButton",
    type: "button",
    variant: "branded",
  },
};
