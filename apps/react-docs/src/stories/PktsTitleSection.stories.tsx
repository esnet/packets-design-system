import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsTitleSection } from "@esnet/packets-ui-react";
import { MicroscopeIcon, ZapIcon } from "lucide-react";

const meta: Meta<typeof PktsTitleSection> = {
  title: "Components/PktsTitleSection",
  component: PktsTitleSection,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsTitleSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.🔬
 */
export const DefaultESTitleSectionExample: Story = {
  render: (props) => <PktsTitleSection {...props} />,
  name: "PktsTitleSection Example",
  args: {
    title: "Lawrence Berkeley National Laboratory",
    subtitle: "Department of Energy Laboratory",
  },
};

export const DefaultESTitleSectionWithSlotsExample: Story = {
  render: (props) => <PktsTitleSection {...props} />,
  name: "PktsTitleSection with Slots",
  args: {
    title: "ESnet",
    titleSlot: (
      <>
        <ZapIcon size={24} />
      </>
    ),
    subtitle: "Powering Science",
    subTitleSlot: (
      <>
        <MicroscopeIcon size={16} />
      </>
    ),
  },
};
