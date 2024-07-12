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

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultESSpinnerExample: Story = {
  render: () => <ESSpinner />,
  name: "ESSpinner Example",
};
