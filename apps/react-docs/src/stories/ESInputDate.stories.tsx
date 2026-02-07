import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputDate } from "@esnet/packets-ui-react/src/components/ESInputDate/ESInputDate.tsx";
import * as React from "react";

const meta: Meta<typeof ESInputDate> = {
  title: "Components/ESInputDate",
  component: ESInputDate,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "branded"],
    },
    type: {
      control: "radio",
      options: ["date", "time", "datetime"],
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

type Story = StoryObj<typeof ESInputDate>;

export const Default: Story = {};

export const ControlledInputDate: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date>(new Date());
    return (
      <>
        <span>The currently selected date is {value.toLocaleDateString()}</span>
        <ESInputDate
          placeholder="Select a date"
          value={value}
          type="date"
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </>
    );
  },
};

export const DatePickerWithTimeSettings: Story = {
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
    placeholder: "See ESInputDatePicker for time and date settings",
  },
};
