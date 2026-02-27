import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsSpinner } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsSpinner> = {
  title: 'Components/PktsSpinner',
  component: PktsSpinner.tagName,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PktsSpinner>;

export const Default: Story = {
  name: "PktsSpinner",
  args: {},
};
