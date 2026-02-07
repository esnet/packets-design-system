import type { Meta, StoryObj } from '@storybook/web-components';
import { ESTitleSection } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESTitleSection> = {
  title: 'Components/ESTitleSection',
  component: ESTitleSection.tagName,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESTitleSection>;

export const Default: Story = {
  name: "ESTitleSection",
  args: {
    title: 'Page Title',
    subtitle: 'Page subtitle or description',
  },
};

export const WithoutSubtitle: Story = {
  name: "Without Subtitle",
  args: {
    title: 'Page Title',
  },
};
