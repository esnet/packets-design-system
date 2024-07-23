import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESSkeletonChip } from "@esnet/packets-ui";

const meta: Meta<typeof ESSkeletonChip> = {
  title: "Components/ESSkeletonChip",
  component: ESSkeletonChip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESSkeletonChip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultESSkeletonChipExample: Story = {
  render: () => (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        gap: "16px",
        margin: "0",
        padding: "0",
        minWidth: "50px",
      }}
    >
      <li
        style={{
          minWidth: "150px",
        }}
      >
        <ESSkeletonChip />
      </li>
      <li
        style={{
          minWidth: "150px",
        }}
      >
        <ESSkeletonChip />
      </li>
      <li
        style={{
          minWidth: "150px",
        }}
      >
        <ESSkeletonChip />
      </li>
    </ul>
  ),
  name: "ESSkeletonChip Example",
};
