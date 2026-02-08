import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESModule',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
  render: (args) => {
    const module = document.createElement('div');
    module.className = 'es-module';

    if (args.title) {
      const title = document.createElement('h2');
      title.textContent = args.title;
      module.appendChild(title);
    }

    const content = document.createElement('p');
    content.textContent = 'Module content goes here.';
    module.appendChild(content);

    return module;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Module Title',
  },
};
