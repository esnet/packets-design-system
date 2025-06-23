import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESInputText } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputText> = {
  title: "Components/ESInputText",
  component: ESInputText,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
      defaultValue: "default",
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
  },
  args: {
    placeholder: "Placeholder Text",
    disabled: false,
    error: false,
    variant: "default",
  },
};

export default meta;

type Story = StoryObj<typeof ESInputText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
};

export const DefaultError: Story = {
  args: {
    error: true,
    placeholder: "Placeholder error text",
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
};

export const Branded: Story = {
  args: {
    placeholder: "Branded text",
    variant: "branded",
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
};
