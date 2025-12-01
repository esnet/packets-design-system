import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESSpinner } from "@esnet/packets-ui";

const meta: Meta<typeof ESSpinner> = {
  title: "Components/ESSpinner",
  component: ESSpinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESSpinner>;

export const Default: Story = {};

// Find a way to export this story to showing the spinner with reduced motion
