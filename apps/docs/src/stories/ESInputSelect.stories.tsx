import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputSelect } from "@esnet/packets-ui/src/components/ESInputSelect/ESInputSelect.tsx";

const meta: Meta<typeof ESInputSelect> = {
  title: "Components/ESInputSelect",
  component: ESInputSelect,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=devl",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESInputSelect>;

export const Default: Story = {
  args: {
    options: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      "Excepteur sint occaecat cupidatat non proident",
      "sunt in culpa qui officia deserunt mollit anim id est laborum",
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 280 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const NoValues: Story = {
  args: {
    options: [],
    defaultValue: "No options provided in this dropdown",
    error: true,
  },
};

export const DisabledDropdown: Story = {
  args: {
    options: [],
    value: "Preset disabled value. Options are not able to be seen.",
    disabled: true,
  },
};

export const ControlledValue: Story = {
  args: {
    options: ["foo", "bar", "baz"],
    value: "foo",
    onChange: (next) => {
      alert(`registered click to ${next}."`);
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 120 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};
