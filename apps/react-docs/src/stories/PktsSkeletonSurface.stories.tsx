import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsSkeletonSurface } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsSkeletonSurface> = {
  title: "Components/PktsSkeletonSurface",
  component: PktsSkeletonSurface,
  tags: ["autodocs"],
  argTypes: {
    isSquare: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If the surface should render square or rounded (default).",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsSkeletonSurface>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultESSkeletonSurfaceExample: Story = {
  render: (props) => (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        gap: "8px",
        margin: "0",
        padding: "0",
        minWidth: "50px",
      }}
    >
      <li
        style={{
          minWidth: "32px",
        }}
      >
        <PktsSkeletonSurface {...props} />
      </li>
      <li
        style={{
          minWidth: "200px",
        }}
      >
        <PktsSkeletonSurface {...props} />
      </li>
      <li
        style={{
          minWidth: "75px",
        }}
      >
        <PktsSkeletonSurface {...props} />
      </li>
      <li
        style={{
          minWidth: "150px",
        }}
      >
        <PktsSkeletonSurface {...props} />
      </li>
    </ul>
  ),
  name: "PktsSkeletonSurface Example",
};

export const SquareSkeletonExample: Story = {
  render: (props) => (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        gap: "8px",
        margin: "0",
        padding: "0",
        minWidth: "50px",
      }}
    >
      <li
        style={{
          minWidth: "32px",
        }}
      >
        <PktsSkeletonSurface {...props} />
      </li>
    </ul>
  ),
  args: {
    isSquare: true,
  },
  name: "PktsSkeletonSurface Square Example",
};
