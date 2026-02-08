import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESInputRadioButton',
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
    },
    selectedValue: {
      control: 'text',
    },
    groupName: {
      control: 'text',
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    if (args.options && Array.isArray(args.options)) {
      args.options.forEach((option: { value: string; label: string; disabled?: boolean }) => {
        const labelWrapper = document.createElement('label');
        labelWrapper.style.display = 'flex';
        labelWrapper.style.alignItems = 'center';
        labelWrapper.style.gap = '8px';

        const radioWrapper = document.createElement('div');
        radioWrapper.className = 'es-input-radio';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.className = 'es-input-radio__input';
        radio.name = args.groupName || 'radio-group';
        radio.value = option.value;
        if (args.selectedValue === option.value) radio.checked = true;
        if (option.disabled) radio.disabled = true;

        radioWrapper.appendChild(radio);

        const labelText = document.createElement('span');
        labelText.textContent = option.label;

        labelWrapper.appendChild(radioWrapper);
        labelWrapper.appendChild(labelText);
        container.appendChild(labelWrapper);
      });
    }

    return container;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    groupName: 'example',
    selectedValue: 'option1',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    groupName: 'disabled-example',
    selectedValue: 'enabled1',
    options: [
      { value: 'enabled1', label: 'Enabled Option 1' },
      { value: 'disabled', label: 'Disabled Option', disabled: true },
      { value: 'enabled2', label: 'Enabled Option 2' },
    ],
  },
};
