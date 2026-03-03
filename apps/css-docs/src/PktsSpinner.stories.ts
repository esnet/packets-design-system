import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsSpinner',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
  render: (args) => {
    const spinner = document.createElement('div');
    spinner.className = `pkts-spinner pkts-${args.size || 'medium'}`;

    // Add the 4 dots
    for (let i = 0; i < 4; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      spinner.appendChild(dot);
    }

    // Add no-motion message
    const noMotionMessage = document.createElement('span');
    noMotionMessage.className = 'no-motion-message';
    noMotionMessage.textContent = 'Loading...';
    spinner.appendChild(noMotionMessage);

    return spinner;
  },
};

export default meta;

type Story = StoryObj;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
