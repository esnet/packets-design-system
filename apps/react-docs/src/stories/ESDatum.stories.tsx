import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESDatum } from "@esnet/packets-ui-react";

const meta: Meta<typeof ESDatum> = {
  title: "Components/ESDatum",
  component: ESDatum,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESDatum>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultDatumExample: Story = {
  render: (props) => <ESDatum title={props.title}>{props.children}</ESDatum>,
  name: "ESDatum Example",
  args: {
    title: "Bandwidth",
    children: "1000mbps",
  },
};

export const DatumWithNoTitle: Story = {
  render: (props) => <ESDatum title={props.title}>{props.children}</ESDatum>,
  name: "ESDatum No Title",
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
        <ESDatum title={props.title}>{props.children}</ESDatum>
      </li>
      <li>
        <ESDatum title={"Status"}>Up</ESDatum>
      </li>
      <li>
        <ESDatum title={"Created"}>August 26, 1931</ESDatum>
      </li>
    </ul>
  ),
  name: "ESDatum List",
  args: {
    title: "Bandwidth",
    children: "1000mbps",
  },
};
