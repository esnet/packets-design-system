import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsAvatar',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: {
      control: { type: 'radio' },
      options: ['grape', 'lime', 'berry', 'orange'],
    },
    initials: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
  },
  render: (args) => {
    const avatar = document.createElement('div');
    const classes = ['pkts-avatar'];

    if (args.size) classes.push(`pkts-${args.size}`);
    if (args.backgroundColor) classes.push(`pkts-${args.backgroundColor}`);

    avatar.className = classes.join(' ');

    if (args.src) {
      const img = document.createElement('img');
      img.src = args.src;
      img.alt = args.initials || '';
      avatar.appendChild(img);
    } else if (args.initials) {
      const span = document.createElement('span');
      span.textContent = args.initials;
      avatar.appendChild(span);
    }

    return avatar;
  },
};

export default meta;

type Story = StoryObj;

export const WithInitials: Story = {
  args: {
    initials: 'JD',
    size: 'medium',
    backgroundColor: 'grape',
  },
};

export const WithImage: Story = {
  args: {
    src: '/imgs/fpo-avatars/medium.png',
    size: 'medium',
  },
};

export const LimeColor: Story = {
  args: {
    initials: 'AB',
    size: 'medium',
    backgroundColor: 'lime',
  },
};

export const BerryColor: Story = {
  args: {
    initials: 'CD',
    size: 'medium',
    backgroundColor: 'berry',
  },
};

export const OrangeColor: Story = {
  args: {
    initials: 'EF',
    size: 'medium',
    backgroundColor: 'orange',
  },
};

export const Small: Story = {
  args: {
    src: '/imgs/fpo-avatars/small.png',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    src: '/imgs/fpo-avatars/large.png',
    size: 'large',
  },
};
