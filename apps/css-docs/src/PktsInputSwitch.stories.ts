import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsInputSwitch',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'branded'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    const classes = ['pkts-input-switch'];

    if (args.variant && args.variant !== 'default') classes.push(`pkts-${args.variant}`);

    wrapper.className = classes.join(' ');

    const input = document.createElement('input');
    input.type = 'checkbox';

    if (args.disabled) input.disabled = true;
    if (args.checked) input.checked = true;

    const indicator = document.createElement('div');
    indicator.className = 'indicator';

    wrapper.appendChild(input);
    wrapper.appendChild(indicator);

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

export const Branded: Story = {
  args: {
    variant: 'branded',
  },
};

export const Checked: Story = {
  args: {
    variant: 'default',
    checked: true,
  },
};

export const BrandedChecked: Story = {
  args: {
    variant: 'branded',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true,
  },
};
