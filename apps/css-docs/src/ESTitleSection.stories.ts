import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESTitleSection',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
  },
  render: (args) => {
    const section = document.createElement('div');
    section.className = 'es-title-section';

    if (args.title) {
      const title = document.createElement('h1');
      title.textContent = args.title;
      section.appendChild(title);
    }

    if (args.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.textContent = args.subtitle;
      section.appendChild(subtitle);
    }

    return section;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Page Title',
    subtitle: 'Page subtitle or description',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'Page Title',
  },
};
