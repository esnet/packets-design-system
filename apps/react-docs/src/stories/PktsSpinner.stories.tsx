import React from "react";
import Rive from "@rive-app/react-canvas-lite";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsSpinner } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsSpinner> = {
  title: "Components/PktsSpinner",
  component: PktsSpinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PktsSpinner>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultESSpinnerExample: Story = {
  render: () => <PktsSpinner />,
  name: "PktsSpinner Example",
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
  name: "PktsSpinner Branded RIVE",
  args: {
    size: "200px",
  },
};

export const BrandedESSpinnerRiveEasing: Story = {
  render: ({ size }: { size: string }) => (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <Rive src="/riv/esnetspinner_easing.riv" />
    </div>
  ),
  name: "PktsSpinner Branded RIVE with Easing",
  args: {
    size: "200px",
  },
};

export const BrandedESSpinnerExample: Story = {
  render: ({ size }: { size: string }) => (
    <>
      <img
        style={{
          width: size,
          height: size,
        }}
        src="/imgs/brandedSpinner.gif"
      />
    </>
  ),
  name: "PktsSpinner Branded GIF",
  args: {
    size: "200px",
  },
};

export const BrandedESSpinnerEasingExample: Story = {
  render: ({ size }: { size: string }) => (
    <>
      <img
        style={{
          width: size,
          height: size,
        }}
        src="/imgs/brandedSpinnerEasing.gif"
      />
    </>
  ),
  name: "PktsSpinner Branded GIF with Easing",
  args: {
    size: "200px",
  },
};
