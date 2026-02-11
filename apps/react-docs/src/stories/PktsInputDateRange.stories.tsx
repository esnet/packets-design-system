import type { Meta, StoryObj } from "@storybook/react-vite";
import PktsInputDateRange from "@esnet/packets-ui-react/src/components/PktsInputDateRange/PktsInputDateRange.tsx";
import type { DateRange } from "@esnet/packets-ui-react";
import * as React from "react";

const meta: Meta<typeof PktsInputDateRange> = {
  title: "Components/PktsInputDateRange",
  component: PktsInputDateRange,
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

type Story = StoryObj<typeof PktsInputDateRange>;

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
        <PktsInputDateRange
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
