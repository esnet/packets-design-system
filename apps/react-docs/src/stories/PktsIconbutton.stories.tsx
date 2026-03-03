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


export const DefaultButton: Story = {
  args: {
    onClick={() => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Packets Design System!");
    }}
    children: <SettingsIcon />,
    type: "button",
  },
};

export const SquareRatioBranded: Story = {
  args: {
    children: <SettingsIcon />,
    variant: "branded",
    square: true,
  },
};

// TODO: Fix this story to use latest version of IconButton
/*
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "16px",
      }}
    >
      <PktsIconButton
        name="apple"
        variant="primary"
        onClick={() => alert("Primary")}
      />
      <PktsIconButton
        name="banana"
        variant="secondary"
        onClick={() => alert("Secondary")}
      />
      <PktsIconButton
        name="bookmark"
        variant="tertiary"
        onClick={() => alert("Tertiary")}
      />
      <PktsIconButton
        name="globe"
        variant="branded"
        onClick={() => alert("Branded")}
      />
      <PktsIconButton
        name="trash-2"
        variant="destructive"
        onClick={() => alert("Destructive")}
      />
      <PktsIconButton name="apple" variant="primary" disabled />
      <PktsIconButton name="banana" variant="secondary" disabled />
      <PktsIconButton name="bookmark" variant="tertiary" disabled />
      <PktsIconButton name="globe" variant="branded" disabled />
      <PktsIconButton name="trash-2" variant="destructive" disabled />
      <PktsIconButton name="apple" variant="primary" square />
      <PktsIconButton name="banana" variant="secondary" square />
      <PktsIconButton name="bookmark" variant="tertiary" square />
      <PktsIconButton name="globe" variant="branded" square />
      <PktsIconButton name="trash-2" variant="destructive" square />
    </div>
  ),
};*/
