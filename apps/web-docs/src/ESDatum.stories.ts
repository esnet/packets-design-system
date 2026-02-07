import type { Meta, StoryObj } from '@storybook/web-components';
import { ESDatum } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESDatum> = {
  title: 'Components/ESDatum',
  component: ESDatum.tagName,
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
    const datum = document.createElement(ESDatum.tagName) as InstanceType<typeof ESDatum>;
    if (args.label) datum.label = args.label;
    if (args.value) datum.textContent = args.value;
    return datum;
  },
};

export default meta;

type Story = StoryObj<typeof ESDatum>;

export const Default: Story = {
  name: "ESDatum",
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
