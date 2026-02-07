import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESSkeletonSurface } from "@esnet/packets-ui-react";

const meta: Meta<typeof ESSkeletonSurface> = {
  title: "Components/ESSkeletonSurface",
  component: ESSkeletonSurface,
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

type Story = StoryObj<typeof ESSkeletonSurface>;

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
        <ESSkeletonSurface {...props} />
      </li>
      <li
        style={{
          minWidth: "200px",
        }}
      >
        <ESSkeletonSurface {...props} />
      </li>
      <li
        style={{
          minWidth: "75px",
        }}
      >
        <ESSkeletonSurface {...props} />
      </li>
      <li
        style={{
          minWidth: "150px",
        }}
      >
        <ESSkeletonSurface {...props} />
      </li>
    </ul>
  ),
  name: "ESSkeletonSurface Example",
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
        <ESSkeletonSurface {...props} />
      </li>
    </ul>
  ),
  args: {
    isSquare: true,
  },
  name: "ESSkeletonSurface Square Example",
};
