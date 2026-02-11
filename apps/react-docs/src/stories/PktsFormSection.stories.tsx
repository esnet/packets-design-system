import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsFormSection, PktsDatum } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsFormSection> = {
  title: "Components/PktsFormSection",
  component: PktsFormSection,
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

type Story = StoryObj<typeof PktsFormSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultDatumExample: Story = {
  render: (props) => <PktsFormSection {...props}>{props.children}</PktsFormSection>,
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
        <PktsDatum title="ID">ESNET-12345</PktsDatum>
        <PktsDatum title="Capacity">1000mbps</PktsDatum>
        <PktsDatum title={"Created"}>August 26, 1931</PktsDatum>
      </>
    ),
  },
};

export const FormSectionWithDescrition: Story = {
  render: (props) => <PktsFormSection {...props}>{props.children}</PktsFormSection>,
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
        <PktsDatum title="ID">ESNET-12345</PktsDatum>
        <PktsDatum title="Capacity">1000mbps</PktsDatum>
        <PktsDatum title={"Created"}>August 26, 1931</PktsDatum>
      </>
    ),
  },
};

export const FormSectionWithTitleLikn: Story = {
  render: (props) => <PktsFormSection {...props}>{props.children}</PktsFormSection>,
  name: "With Title Link",
  args: {
    title: "I'm a link",
    titleURL: "http://www.es.net",
    children: (
      <>
        <PktsDatum title="ID">ESNET-12345</PktsDatum>
        <PktsDatum title="Capacity">1000mbps</PktsDatum>
        <PktsDatum title={"Created"}>August 26, 1931</PktsDatum>
      </>
    ),
  },
};
