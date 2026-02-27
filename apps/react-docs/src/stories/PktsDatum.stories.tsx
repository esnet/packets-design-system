import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsDatum } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsDatum> = {
  title: "Components/PktsDatum",
  component: PktsDatum,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsDatum>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultDatumExample: Story = {
  render: (props) => <PktsDatum title={props.title}>{props.children}</PktsDatum>,
  name: "PktsDatum Example",
  args: {
    title: "Bandwidth",
    children: "1000mbps",
  },
};

export const DatumWithNoTitle: Story = {
  render: (props) => <PktsDatum title={props.title}>{props.children}</PktsDatum>,
  name: "PktsDatum No Title",
  args: {
    children: "100vh",
  },
};

export const DatumLIst: Story = {
  render: (props) => (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        gap: "16px",
        margin: "0",
        padding: "0",
      }}
    >
      <li>
        <PktsDatum title={props.title}>{props.children}</PktsDatum>
      </li>
      <li>
        <PktsDatum title={"Status"}>Up</PktsDatum>
      </li>
      <li>
        <PktsDatum title={"Created"}>August 26, 1931</PktsDatum>
      </li>
    </ul>
  ),
  name: "PktsDatum List",
  args: {
    title: "Bandwidth",
    children: "1000mbps",
  },
};
