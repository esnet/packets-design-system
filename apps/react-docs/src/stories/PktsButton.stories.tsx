// TODO: Manually test, stop using render arg, show of all variants
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PktsButton } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsButton> = {
  title: "Components/PktsButton",
  component: PktsButton,
  tags: ["autodocs"],
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
      defaultValue: false,
    },
    as: {
      control: { type: "radio" },
      options: ["button", "a"],
      defaultValue: "button",
    },
    href: {
      control: "text",
      if: { arg: "as", eq: "a" },
    },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Defaultbutton: Story = {
  render: (props) => (
    <PktsButton {...props} variant={props.variant}>
      {props.children}
    </PktsButton>
  ),
  name: "PktsButton",
  args: {
    children: "PktsButton",
    type: "button",
    fill: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-350&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};

export const Primary: Story = {
  render: (props) => (
    <PktsButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsButton>
  ),
  name: "Primary ESButton",
  args: {
    children: "Primary ESButton",
    type: "button",
    variant: "primary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-363&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};

export const ButtonAsLinkTag: Story = {
  render: (props) => <PktsButton {...props}>{props.children}</PktsButton>,
  name: "Button As Link",
  args: {
    children: "Go to Google",
    variant: "primary",
    disabled: true,
    href: "http://www.google.com",
    as: "a",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-363&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};

export const DisabledPrimary: Story = {
  render: (props) => (
    <PktsButton
      disabled
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsButton>
  ),
  name: "Disabled Primary ESButton",
  args: {
    children: "Disabled Primary ESButton",
    type: "button",
    variant: "primary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-363&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};

export const Secondary: Story = {
  render: (props) => (
    <PktsButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsButton>
  ),
  name: "Secondary ESButton",
  args: {
    children: "Secondary ESButton",
    type: "button",
    variant: "secondary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-369&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};

export const SecondaryDisabled: Story = {
  render: (props) => (
    <PktsButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsButton>
  ),
  name: "Secondary ESButton Disabled",
  args: {
    children: "Secondary ESButton Disabled",
    type: "button",
    variant: "secondary",
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4-369&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};

export const Branded: Story = {
  render: (props) => (
    <PktsButton
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
      }}
      variant={props.variant}
    >
      {props.children}
    </PktsButton>
  ),
  name: "Branded ESButton",
  args: {
    children: "Branded ESButton",
    type: "button",
    variant: "branded",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=109-906&t=vvvFZvCMEJjFdQf6-4",
    },
  },
};
