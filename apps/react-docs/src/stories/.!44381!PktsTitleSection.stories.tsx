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
