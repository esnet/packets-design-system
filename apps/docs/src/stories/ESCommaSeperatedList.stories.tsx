import React from "react";
import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { ESCommaSeperatedList } from "@esnet/packets-ui";

const meta: Meta<typeof ESCommaSeperatedList> = {
  title: "Components/ESCommaSeperatedList",
  component: ESCommaSeperatedList,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { control: "object" },
      defaultValue: [],
    },
    renderItem: {
      control: {
        control: "function",
      },
      defaultValue: (item: string) => <>{item}</>,
    },
  },
  args: { renderItem: fn() },
};

export default meta;

type Story = StoryObj<typeof ESCommaSeperatedList>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultCommaSeperatedList: Story = {
  render: (props) => <ESCommaSeperatedList items={props.items} />,
  name: "Comma Seperated List Example",
  args: {
    items: ["apples", "oranges", "lemons"],
  },
};
