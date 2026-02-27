import type { Meta, StoryObj } from "@storybook/react";
import { PktsAvatar } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsAvatar> = {
  title: "Components/PktsAvatar",
  component: PktsAvatar,
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
    isHoverable: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    backgroundColor: {
      control: { type: "radio" },
      options: ["grape", "lime", "berry", "orange"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsAvatar>;

export const Default: Story = {
  name: "Basic Example",
  args: {
    alt: "Ernest Lawrence",
    src: "/imgs/fpo-avatars/large.png",
  },
};

export const Fallback: Story = {
  name: "Fallback Example",
  args: {
    alt: "echennau",
    src: "invalid image source",
    backgroundColor: "grape",
  },
};

export const HoverableAvatar: Story = {
  render: (props) => <PktsAvatar {...props}>{props.children}</PktsAvatar>,
  name: "Hoverable Example",
  args: {
    label: "Ernest Lawrence",
    size: "medium",
    src: "/imgs/fpo-avatars/large.png",
    isHoverable: true,
    srcSet:
      "/imgs/fpo-avatars/large.png, /imgs/fpo-avatars/large@2x.png 2x, /imgs/fpo-avatars/large@3x.png 3x",
  },
};

export const SmallAvatar: Story = {
  name: "Small Avatar Example",
  args: {
    alt: "Ernest Lawrence",
    size: "small",
    src: "/imgs/fpo-avatars/small.png",
    srcSet:
      "/imgs/fpo-avatars/small.png, /imgs/fpo-avatars/small@2x.png 2x, /imgs/fpo-avatars/small@3x.png 3x",
  },
};

export const LargeAvatar: Story = {
  name: "Large Avatar Example",
  args: {
    alt: "Ernest Lawrence",
    size: "large",
    src: "/imgs/fpo-avatars/large.png",
    srcSet:
      "/imgs/fpo-avatars/large.png, /imgs/fpo-avatars/large@2x.png 2x, /imgs/fpo-avatars/large@3x.png 3x",
  },
};

export const AllColorsAllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      <PktsAvatar alt="Ernest Lawrence" size="large" backgroundColor="grape" />
      <PktsAvatar alt="Ernest Lawrence" size="large" backgroundColor="lime" />
      <PktsAvatar alt="Ernest Lawrence" size="large" backgroundColor="berry" />
      <PktsAvatar alt="Ernest Lawrence" size="large" backgroundColor="orange" />
      <PktsAvatar
        alt="Ernest Lawrence"
        size="large"
        src="/imgs/fpo-avatars/large.png"
      />
      <PktsAvatar alt="Ernest Lawrence" size="medium" backgroundColor="grape" />
      <PktsAvatar alt="Ernest Lawrence" size="medium" backgroundColor="lime" />
      <PktsAvatar alt="Ernest Lawrence" size="medium" backgroundColor="berry" />
      <PktsAvatar alt="Ernest Lawrence" size="medium" backgroundColor="orange" />
      <PktsAvatar
        alt="Ernest Lawrence"
        size="medium"
        src="/imgs/fpo-avatars/large.png"
      />
      <PktsAvatar alt="Ernest Lawrence" size="small" backgroundColor="grape" />
      <PktsAvatar alt="Ernest Lawrence" size="small" backgroundColor="lime" />
      <PktsAvatar alt="Ernest Lawrence" size="small" backgroundColor="berry" />
      <PktsAvatar alt="Ernest Lawrence" size="small" backgroundColor="orange" />
      <PktsAvatar
        alt="Ernest Lawrence"
        size="small"
        src="/imgs/fpo-avatars/large.png"
      />
    </div>
  ),
  name: "All colors and sizes",
};
