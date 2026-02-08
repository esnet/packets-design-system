import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESFormSection',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  render: (args) => {
    const section = document.createElement('section');
    section.className = 'es-form-section';

    if (args.title) {
      const title = document.createElement('h3');
      title.textContent = args.title;
      section.appendChild(title);
    }

    if (args.description) {
      const description = document.createElement('p');
      description.textContent = args.description;
      section.appendChild(description);
    }

    // Add sample form content
    const formContent = document.createElement('div');
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'es-input-text';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Sample input...';
    inputWrapper.appendChild(input);
    formContent.appendChild(inputWrapper);
    section.appendChild(formContent);

    return section;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Form Section',
    description: 'This is a form section description',
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Form Section',
  },
};
