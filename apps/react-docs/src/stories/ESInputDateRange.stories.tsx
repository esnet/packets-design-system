import type { Meta, StoryObj } from "@storybook/react-vite";
import ESInputDateRange from "@esnet/packets-ui-react/src/components/ESInputDateRange/ESInputDateRange.tsx";
import type { DateRange } from "@esnet/packets-ui-react";
import * as React from "react";

const meta: Meta<typeof ESInputDateRange> = {
  title: "Components/ESInputDateRange",
  component: ESInputDateRange,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "branded"],
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
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ESInputDateRange>;

export const Default: Story = {};

export const ControlledInputDateRange: Story = {
  render: () => {
    const [value, setValue] = React.useState<DateRange>();
    return (
      <>
        <span>
          The currently selected date is {value?.start?.toDateString()} to{" "}
          {value?.end?.toDateString()}
        </span>
        <ESInputDateRange
          placeholder="Select a date range"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </>
    );
  },
};

export const OnlyWithinAugust2025: Story = {
  args: {
    dateSettings: {
      min: new Date(2025, 7, 1),
      max: new Date(2025, 7, 31),
    },
    placeholder: "See ESInputDatePicker for details on date settings",
  },
};
