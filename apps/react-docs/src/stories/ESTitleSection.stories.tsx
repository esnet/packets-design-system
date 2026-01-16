import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESTitleSection } from "@esnet/packets-ui";
import { MicroscopeIcon, ZapIcon } from "lucide-react";

const meta: Meta<typeof ESTitleSection> = {
  title: "Components/ESTitleSection",
  component: ESTitleSection,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESTitleSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.🔬
 */
export const DefaultESTitleSectionExample: Story = {
  render: (props) => <ESTitleSection {...props} />,
  name: "ESTitleSection Example",
  args: {
    title: "Lawrence Berkeley National Laboratory",
    subtitle: "Department of Energy Laboratory",
  },
};

export const DefaultESTitleSectionWithSlotsExample: Story = {
  render: (props) => <ESTitleSection {...props} />,
  name: "ESTitleSection with Slots",
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
