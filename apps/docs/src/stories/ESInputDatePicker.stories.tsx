import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputDatePicker } from "@esnet/packets-ui/src/components/ESInputDatePicker/ESInputDatePicker.tsx";

const meta: Meta<typeof ESInputDatePicker> = {
  title: "Components/ESInputDatePicker",
  component: ESInputDatePicker,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["date", "time", "datetime", "daterange"],
    },
  },
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3934-2385&t=p43proMm9mofqk9U-0",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely positioned calendar prompt
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

type Story = StoryObj<typeof ESInputDatePicker>;

export const Default: Story = {};

export const TwentyFourHourClockWith1IntervalsTimePicker: Story = {
  args: {
    type: "time",
    timeSettings: {
      format: "24-hour",
      second: {
        step: 1,
      },
      minute: {
        step: 1,
      },
    },
  },
};

export const TimePicker20MinuteStepNoSeconds: Story = {
  args: {
    type: "datetime",
    timeSettings: {
      second: false,
      minute: {
        step: 20,
      },
    },
  },
};

export const OnlyWithinAugust2025: Story = {
  args: {
    dateSettings: {
      min: new Date(2025, 7, 1),
      max: new Date(2025, 7, 31),
    },
  },
};
