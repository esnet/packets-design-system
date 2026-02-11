import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsModule } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsModule> = {
  title: 'Components/PktsModule',
  component: PktsModule.tagName,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsModule>;

export const Default: Story = {
  name: "PktsModule",
  args: {
    title: 'Module Title',
  },
};
