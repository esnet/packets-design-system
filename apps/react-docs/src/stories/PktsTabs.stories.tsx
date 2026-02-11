import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsTabs, PktsTab } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsTabs> = {
  title: "Components/PktsTabs",
  component: PktsTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PktsTabs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultTabsExample: Story = {
  render: (props) => (
    <>
      <PktsTabs {...props}>
        <PktsTab isActive={true}>
          <a href="#" target="_self">
            Link 1
          </a>
        </PktsTab>
        <PktsTab>
          <a href="#" target="_self">
            Link 2
          </a>
        </PktsTab>
        <PktsTab>
          <a href="#" target="_self">
            Link 3
          </a>
        </PktsTab>
      </PktsTabs>
    </>
  ),
  name: "PktsTabs Example",
  args: {
    border: true,
    verticalPadding: true,
  },
};

export const NoBorderTabsExample: Story = {
  render: (props) => (
    <>
      <PktsTabs {...props}>
        <PktsTab isActive={true}>
          <a href="#" target="_self">
            Link 1
          </a>
        </PktsTab>
        <PktsTab>
          <a href="#" target="_self">
            Link 2
          </a>
        </PktsTab>
        <PktsTab>
          <a href="#" target="_self">
            Link 3
          </a>
        </PktsTab>
      </PktsTabs>
    </>
  ),
  name: "PktsTabs No Border",
  args: {
    border: false,
    verticalPadding: true,
  },
};
