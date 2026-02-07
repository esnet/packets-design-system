import type { Meta, StoryObj } from '@storybook/web-components';
import { ESDivider } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESDivider> = {
  title: 'Components/ESDivider',
  component: ESDivider.tagName,
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

type Story = StoryObj<typeof ESDivider>;

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
