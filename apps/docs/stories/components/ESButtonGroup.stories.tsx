import type { Meta, StoryObj } from "@storybook/react";
import { ESButtonGroup, ESButton } from "@esnet/packets-ui";

const meta: Meta<typeof ESButtonGroup> = {
  title: "Components/ESButtonGroup",
  component: ESButtonGroup,
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Defaultbutton: Story = {
  render: (props) => <ESButtonGroup>{props.children}</ESButtonGroup>,
  name: "ES Button Group",
  args: {
    children: (
      <>
        <ESButton variant="primary">Button 1</ESButton>
        <ESButton variant="secondary">Button 2</ESButton>
        <ESButton variant="secondary">Button 3</ESButton>
        <ESButton variant="tertiary">Button 3</ESButton>
      </>
    ),
  },
};

export const VerticalButtonGroup: Story = {
  render: (props) => (
    <ESButtonGroup direction={props.direction}>{props.children}</ESButtonGroup>
  ),
  name: "Vertical ESButton Group",
  args: {
    children: (
      <>
        <ESButton variant="primary">Button 1</ESButton>
        <ESButton variant="secondary">Button 2</ESButton>
        <ESButton variant="secondary">Button 3</ESButton>
        <ESButton variant="tertiary">Button 3</ESButton>
      </>
    ),
    direction: "vertical",
  },
};
