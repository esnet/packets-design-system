import type { Meta, StoryObj } from '@storybook/web-components';
import { ESModule } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESModule> = {
  title: 'Components/ESModule',
  component: ESModule.tagName,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESModule>;

export const Default: Story = {
  name: "ESModule",
  args: {
    title: 'Module Title',
  },
};
