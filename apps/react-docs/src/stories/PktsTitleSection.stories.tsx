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

export const Default: Story = {
  name: "ESTitleSection Example",
  args: {
    title: "Lawrence Berkeley National Laboratory",
    subtitle: "Department of Energy Laboratory",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};

export const WithIcons: Story = {
  args: {
    title: (
      <>
        Accelerating Science <ZapIcon size={24} />
      </>
    ),
    subtitle: (
      <>
        Powering Science <MicroscopeIcon size={16} />
      </>
    ),
  },
};
