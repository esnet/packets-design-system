import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsButtonGroup, PktsButton } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsButtonGroup> = {
  title: "Components/PktsButtonGroup",
  component: PktsButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    labelCopy: {
      control: { type: "text" },
    },
    direction: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Defaultbutton: Story = {
  render: (props) => (
    <PktsButtonGroup direction={props.direction} labelCopy={props.labelCopy}>
      {props.children}
    </PktsButtonGroup>
  ),
  name: "ES Button Group",
  args: {
    children: (
      <>
        <PktsButton variant="primary" size="medium" type="button">
          Button 1
        </PktsButton>
        <PktsButton variant="secondary" size="medium" type="button">
          Button 2
        </PktsButton>
        <PktsButton variant="secondary" size="medium" type="button">
          Button 3
        </PktsButton>
        <PktsButton variant="tertiary" size="medium" type="button">
          Button 3
        </PktsButton>
      </>
    ),
    labelCopy: "A Collection of Buttons",
  },
};

export const VerticalButtonGroup: Story = {
  render: (props) => (
    <PktsButtonGroup direction={props.direction} labelCopy={props.labelCopy}>
      {props.children}
    </PktsButtonGroup>
  ),
  name: "Vertical ESButton Group",
  args: {
    children: (
      <>
        <PktsButton variant="primary">Button 1</PktsButton>
        <PktsButton variant="secondary">Button 2</PktsButton>
        <PktsButton variant="secondary">Button 3</PktsButton>
        <PktsButton variant="tertiary">Button 3</PktsButton>
      </>
    ),
    direction: "vertical",
  },
};

export const SmallGroup: Story = {
  args: {
    children: (
      <>
        <PktsButton variant="primary">Button 1</PktsButton>
        <div style={{ width: "400px" }}>
          <PktsButton variant="secondary">Button 2</PktsButton>
        </div>
      </>
    ),
  },
};
