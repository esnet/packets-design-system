import React from "react";
import Rive from "@rive-app/react-canvas-lite";
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

export const BrandedESSpinnerRive: Story = {
  render: ({ size }: { size: string }) => (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <Rive src="/riv/esnetspinner.riv" />
    </div>
  ),
  name: "ESSpinner Branded RIVE",
  args: {
    size: "200px",
  },
};

export const BrandedESSpinnerExample: Story = {
  render: () => (
    <>
      <img src="/imgs/brandedSpinner.gif" />
    </>
  ),
  name: "ESSpinner Branded GIF",
};
