import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputTypeahead } from "@esnet/packets-ui/src/components/ESInputTypeahead/ESInputTypeahead.tsx";

const meta: Meta<typeof ESInputTypeahead> = {
  title: "Components/ESInputTypeahead",
  component: ESInputTypeahead,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4478-110&p=f&t=wFd5nwUZcysZsqKH-0",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely dropdown
    (Story) => (
      <div style={{ minHeight: 280 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ESInputTypeahead>;

export const Default: Story = {
  args: {
    options: [
      {
        id: "option-1",
        value: "Option 1",
      },
      {
        id: "option-2",
        value: "Extremely Long Winded Option 2",
      },
      {
        id: "option-3",
        value: "O3",
      },
      {
        id: "option-4",
        value:
          "Unnecessarily Long Option 4 that serves no purpose other than to test wrapping of text etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ",
      },
      {
        id: "option-5",
        value:
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      },
    ],
  },
  argTypes: {},
};
