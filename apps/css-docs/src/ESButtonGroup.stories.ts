import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESButtonGroup',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
  render: (args) => {
    const container = document.createElement('div');

    if (args.label) {
      const label = document.createElement('label');
      label.textContent = args.label;
      label.style.display = 'block';
      label.style.marginBottom = '8px';
      container.appendChild(label);
    }

    const section = document.createElement('section');
    section.className = `es-button-group es-${args.direction || 'horizontal'}`;

    const ul = document.createElement('ul');
    ul.className = 'list';

    const buttons = ['Option 1', 'Option 2', 'Option 3'];
    buttons.forEach((text) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.className = 'es-button es-secondary';
      button.textContent = text;
      li.appendChild(button);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    container.appendChild(section);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const Horizontal: Story = {
  args: {
    label: 'Actions',
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Choose an Option',
    direction: 'horizontal',
  },
};
