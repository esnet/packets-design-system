import type { Meta, StoryObj } from "@storybook/react";
import { ESInputDate } from "@esnet/packets-ui";

const meta: Meta<typeof ESInputDate> = {
  title: "Components/ESInputDate",
  component: ESInputDate,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
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
