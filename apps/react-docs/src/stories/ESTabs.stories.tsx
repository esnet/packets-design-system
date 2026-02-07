import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESTabs, ESTab } from "@esnet/packets-ui-react";

const meta: Meta<typeof ESTabs> = {
  title: "Components/ESTabs",
  component: ESTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESTabs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultTabsExample: Story = {
  render: (props) => (
    <>
      <ESTabs {...props}>
        <ESTab isActive={true}>
          <a href="#" target="_self">
            Link 1
          </a>
        </ESTab>
        <ESTab>
          <a href="#" target="_self">
            Link 2
          </a>
        </ESTab>
        <ESTab>
          <a href="#" target="_self">
            Link 3
          </a>
        </ESTab>
      </ESTabs>
    </>
  ),
  name: "ESTabs Example",
  args: {
    border: true,
    verticalPadding: true,
  },
};

export const NoBorderTabsExample: Story = {
  render: (props) => (
    <>
      <ESTabs {...props}>
        <ESTab isActive={true}>
          <a href="#" target="_self">
            Link 1
          </a>
        </ESTab>
        <ESTab>
          <a href="#" target="_self">
            Link 2
          </a>
        </ESTab>
        <ESTab>
          <a href="#" target="_self">
            Link 3
          </a>
        </ESTab>
      </ESTabs>
    </>
  ),
  name: "ESTabs No Border",
  args: {
    border: false,
    verticalPadding: true,
  },
};
