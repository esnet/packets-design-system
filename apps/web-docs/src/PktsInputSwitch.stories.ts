import type { Meta, StoryObj} from '@storybook/web-components';
import { PktsInputSwitch } from "@esnet/packets-ui-web";

const meta: Meta<typeof PktsInputSwitch> = {
    title: 'Components/PktsInputSwitch',
    component: PktsInputSwitch.tagName,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["primary", "secondary"],
            defaultValue: "default",
        },
        hideIcon: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
    },
};

export default meta;

type Story = StoryObj<typeof PktsInputSwitch>;

export const DefaultSwitch: Story = {};

export const NoIcons: Story = {
  args: {
    hideIcon: true,
  },
};

export const SecondaryStyle: Story = {
  args: {
    variant: "secondary",
    defaultChecked: true,
  },
};

export const SwitchInitiallyCheckedAndDisabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

