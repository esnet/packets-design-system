import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESDatum',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
  render: (args) => {
    const datum = document.createElement('div');
    datum.className = 'es-datum';

    if (args.label) {
      const label = document.createElement('label');
      label.textContent = args.label;
      datum.appendChild(label);
    }

    if (args.value) {
      const value = document.createElement('span');
      value.textContent = args.value;
      datum.appendChild(value);
    }

    return datum;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Status',
    value: 'Active',
  },
};

export const WithLongValue: Story = {
  args: {
    label: 'Description',
    value: 'This is a longer value that demonstrates how the component handles extended text content',
  },
};
