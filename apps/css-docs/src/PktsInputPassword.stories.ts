import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsInputPassword',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'branded'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    const classes = ['pkts-input-text', 'pkts-input-password'];

    if (args.variant && args.variant !== 'default') classes.push(`pkts-${args.variant}`);
    if (args.error) classes.push('pkts-error');

    wrapper.className = classes.join(' ');

    const input = document.createElement('input');
    input.type = 'password';

    input.placeholder = args.placeholder || 'Enter password...';
    if (args.value) input.value = args.value;
    if (args.disabled) input.disabled = true;

    wrapper.appendChild(input);
    return wrapper;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Enter password',
  },
};

export const Branded: Story = {
  args: {
    variant: 'branded',
    placeholder: 'Password',
  },
};

export const WithValue: Story = {
  args: {
    value: 'secretpassword',
    variant: 'default',
  },
};

export const Disabled: Story = {
  args: {
    value: 'secretpassword',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: 'weak',
    error: true,
  },
};
