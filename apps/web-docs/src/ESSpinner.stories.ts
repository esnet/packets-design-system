import type { Meta, StoryObj } from '@storybook/web-components';
import { ESSpinner } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESSpinner> = {
  title: 'Components/ESSpinner',
  component: ESSpinner.tagName,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ESSpinner>;

export const Default: Story = {
  name: "ESSpinner",
  args: {},
};
