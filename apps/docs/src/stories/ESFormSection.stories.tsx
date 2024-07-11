import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESFormSection, ESDatum } from "@esnet/packets-ui";

const meta: Meta<typeof ESFormSection> = {
  title: "Components/ESFormSection",
  component: ESFormSection,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
    },
    titleURL: {
      control: { control: "string" },
    },
    descriptionSlot: {
      control: { control: "string" },
    },
    useColumnLayout: {
      control: { control: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESFormSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultDatumExample: Story = {
  render: (props) => <ESFormSection {...props}>{props.children}</ESFormSection>,
  name: "ES Form Section Example",
  args: {
    title: "Section Title",
    descriptionSlot: (
      <>
        <p>Section description</p>
      </>
    ),
    children: (
      <>
        <ESDatum title="ID">ESNET-12345</ESDatum>
        <ESDatum title="Capacity">1000mbps</ESDatum>
        <ESDatum title={"Created"}>August 26, 1931</ESDatum>
      </>
    ),
  },
};

export const FormSectionWithDescrition: Story = {
  render: (props) => <ESFormSection {...props}>{props.children}</ESFormSection>,
  name: "ES Form Section with Description",
  args: {
    title: "Circuit",
    descriptionSlot: (
      <>
        <p>
          Circuit switching is a type of network configuration in which a
          physical path is obtained and dedicated to a single connection between
          two endpoints in the network for the duration of a dedicated
          connection.
        </p>
      </>
    ),
    children: (
      <>
        <ESDatum title="ID">ESNET-12345</ESDatum>
        <ESDatum title="Capacity">1000mbps</ESDatum>
        <ESDatum title={"Created"}>August 26, 1931</ESDatum>
      </>
    ),
  },
};

export const FormSectionWithTitleLikn: Story = {
  render: (props) => <ESFormSection {...props}>{props.children}</ESFormSection>,
  name: "With Title Link",
  args: {
    title: "I'm a link",
    titleURL: "http://www.es.net",
    children: (
      <>
        <ESDatum title="ID">ESNET-12345</ESDatum>
        <ESDatum title="Capacity">1000mbps</ESDatum>
        <ESDatum title={"Created"}>August 26, 1931</ESDatum>
      </>
    ),
  },
};
