import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESAvatar } from "@esnet/packets-ui";

const meta: Meta<typeof ESAvatar> = {
  title: "Components/ESAvatar",
  component: ESAvatar,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    src: {
      control: { type: "text" },
    },
    srcSrc: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: "info",
    },
    backgroundColor: {
      control: { type: "radio" },
      options: ["grape", "lime", "berry", "orange"],
      defaultValue: "grape",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESAvatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "Basic Example",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
    src: "/imgs/fpo-avatars/large.png",
    srcSet:
      "/imgs/fpo-avatars/large.png, /imgs/fpo-avatars/large@2x.png 2x, /imgs/fpo-avatars/large@3x.png 3x",
  },
};

export const SmallAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "Small Avatar Example",
  args: {
    label: "Ernest Lawrence",
    size: "small",
    src: "/imgs/fpo-avatars/small.png",
    srcSet:
      "/imgs/fpo-avatars/small.png, /imgs/fpo-avatars/small@2x.png 2x, /imgs/fpo-avatars/small@3x.png 3x",
  },
};

export const LargeAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "Large Avatar Example",
  args: {
    label: "Ernest Lawrence",
    size: "large",
    src: "/imgs/fpo-avatars/large.png",
    srcSet:
      "/imgs/fpo-avatars/large.png, /imgs/fpo-avatars/large@2x.png 2x, /imgs/fpo-avatars/large@3x.png 3x",
  },
};

export const NoImageAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "No Image Example, Randomized Color",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
  },
};

export const BerryAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "No Image Example, Berry Color",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
    backgroundColor: "berry",
  },
};

export const GrapeAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "No Image Example, Grape Color",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
    backgroundColor: "grape",
  },
};

export const LimeAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "No Image Example, Lime Color",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
    backgroundColor: "lime",
  },
};

export const OrangeAvatar: Story = {
  render: (props) => <ESAvatar {...props}>{props.children}</ESAvatar>,
  name: "No Image Example, Orange Color",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
    backgroundColor: "orange",
  },
};
