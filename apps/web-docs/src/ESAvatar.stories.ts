import type { Meta, StoryObj } from '@storybook/web-components';
import { ESAvatar } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESAvatar> = {
  title: 'Components/ESAvatar',
  component: ESAvatar.tagName,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    backgroundColor: {
      control: { type: "radio" },
      options: ["grape", "lime", "berry", "orange"],
      defaultValue: "grape",
    },
    initials: {
      control: "text",
    },
    src: {
      control: "text",
    },
  },
  render: (args) => {
    const avatar = document.createElement(ESAvatar.tagName) as InstanceType<typeof ESAvatar>;
    if (args.size) avatar.size = args.size;
    if (args.src) avatar.src = args.src;
    if (args.initials) avatar.alt = args.initials;
    if (args.backgroundColor) avatar.backgroundColor = args.backgroundColor;
    return avatar;
  },
};

export default meta;

type Story = StoryObj<typeof ESAvatar>;

export const WithInitials: Story = {
  name: "ESAvatar With Initials",
  args: {
    initials: 'JD',
    size: 'medium',
    backgroundColor: 'grape',
  },
};

export const WithImage: Story = {
  name: "ESAvatar With Image",
  args: {
    src: '/imgs/fpo-avatars/medium.png',
    size: 'medium',
  },
};

export const LimeColor: Story = {
  name: "Lime Color Avatar",
  args: {
    initials: 'AB',
    size: 'medium',
    backgroundColor: 'lime',
  },
};

export const BerryColor: Story = {
  name: "Berry Color Avatar",
  args: {
    initials: 'CD',
    size: 'medium',
    backgroundColor: 'berry',
  },
};

export const OrangeColor: Story = {
  name: "Orange Color Avatar",
  args: {
    initials: 'EF',
    size: 'medium',
    backgroundColor: 'orange',
  },
};

export const Small: Story = {
  name: "Small ESAvatar",
  args: {
    src: '/imgs/fpo-avatars/small.png',
    size: 'small',
  },
};

export const Large: Story = {
  name: "Large ESAvatar",
  args: {
    src: '/imgs/fpo-avatars/large.png',
    size: 'large',
  },
};
