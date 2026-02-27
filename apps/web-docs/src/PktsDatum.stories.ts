import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsDatum } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsDatum> = {
  title: 'Components/PktsDatum',
  component: PktsDatum.tagName,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
  render: (args) => {
    const datum = document.createElement(PktsDatum.tagName) as InstanceType<typeof PktsDatum>;
    if (args.label) datum.label = args.label;
    if (args.value) datum.textContent = args.value;
    return datum;
  },
};

export default meta;

type Story = StoryObj<typeof PktsDatum>;

export const Default: Story = {
  name: "PktsDatum",
  args: {
    label: 'Status',
    value: 'Active',
  },
};

export const WithLongValue: Story = {
  name: "ESDatum With Long Value",
  args: {
    label: 'Description',
    value: 'This is a longer value that demonstrates how the component handles extended text content',
  },
};
