import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsDivider } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsDivider> = {
  title: 'Components/PktsDivider',
  component: PktsDivider.tagName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "branded"],
      defaultValue: "primary",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsDivider>;

export const Primary: Story = {
  name: "Primary ESDivider",
  args: {
    variant: 'primary',
  },
};

export const Branded: Story = {
  name: "Branded ESDivider",
  args: {
    variant: 'branded',
  },
};
