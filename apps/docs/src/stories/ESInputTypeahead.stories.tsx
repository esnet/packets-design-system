import type { Meta, StoryObj } from "@storybook/react";
import { ESInputTypeahead } from "@esnet/packets-ui";

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
};

export default meta;

type Story = StoryObj<typeof ESInputTypeahead>;

export const Default: Story = {
  args: {
    error: false,
    variant: "default",
    disabled: false,
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
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "branded"],
    },
    error: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    options: {
      control: { type: "object" },
      description:
        "Options for the typeahead. An array of objects that have an `id` (string) and `value` (string) prop. See `ESInputTypeaheadOptionType`.",
    },
    defaultOptions: {
      control: { type: "object" },
      description: "Default options for the typeahead.",
    },
    selectedOptionsRef: {
      control: { type: "object" },
      description:
        "Ref to the selected options for the typeahead, which will always be a subset of options.",
    },
    onSelectedOptionsChange: {
      control: { type: "object" },
      description:
        "Callback function that is called when the selected options change. Takes an argument which is the selected options array, which is a subset of options. This arg is the same value found in the `selectedOptionsRef`.",
    },
  },
};
