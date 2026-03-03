import type { Meta, StoryObj } from '@storybook/web-components';
import { PktsInputRadioButton } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsInputRadioButton> = {
  title: 'Components/PktsInputRadioButton',
  component: PktsInputRadioButton.tagName,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: "object",
    },
    selectedValue: {
      control: "text",
    },
    groupName: {
      control: "text",
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    if (args.options && Array.isArray(args.options)) {
      args.options.forEach((option: any) => {
        const wrapper = document.createElement('label');
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.gap = '8px';
        wrapper.style.cursor = option.disabled ? 'not-allowed' : 'pointer';
        if (option.disabled) wrapper.style.opacity = '0.5';

        const radio = document.createElement(PktsInputRadioButton.tagName) as InstanceType<typeof PktsInputRadioButton>;
        radio.name = args.groupName || 'radio-group';
        radio.value = option.value;
        if (args.selectedValue === option.value) radio.checked = true;
        if (option.disabled) radio.disabled = true;

        const labelText = document.createElement('span');
        labelText.textContent = option.label;

        wrapper.appendChild(radio);
        wrapper.appendChild(labelText);
        container.appendChild(wrapper);
      });
    }

    return container;
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputRadioButton>;

export const Default: Story = {
  name: "Radio Button Group",
  args: {
    groupName: 'demo-group',
    selectedValue: 'option1',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ],
  },
};

export const SizeOptions: Story = {
  name: "Size Selection",
  args: {
    groupName: 'size-group',
    selectedValue: 'medium',
    options: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
      { label: 'Extra Large', value: 'xlarge' }
    ],
  },
};

export const WithDisabled: Story = {
  name: "With Disabled Option",
  args: {
    groupName: 'disabled-group',
    selectedValue: 'option1',
    options: [
      { label: 'Available Option 1', value: 'option1' },
      { label: 'Available Option 2', value: 'option2' },
      { label: 'Disabled Option', value: 'option3', disabled: true }
    ],
  },
};
