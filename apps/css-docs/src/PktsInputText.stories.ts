import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsInputText',
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
    const classes = ['pkts-input-text'];

    if (args.variant && args.variant !== 'default') classes.push(`pkts-${args.variant}`);
    if (args.error) classes.push('pkts-error');

    wrapper.className = classes.join(' ');

    const input = document.createElement('input');
    input.type = 'text';

    input.placeholder = args.placeholder || 'Enter text...';
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
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter text here...',
    variant: 'default',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Default Value',
    variant: 'branded',
  },
};

export const Branded: Story = {
  args: {
    placeholder: 'Branded placeholder',
    variant: 'branded',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Text already set',
    placeholder: 'Placeholder for Text Input',
    variant: 'branded',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: 'Text already set',
    placeholder: 'Placeholder for Text Input',
    error: true,
  },
};
