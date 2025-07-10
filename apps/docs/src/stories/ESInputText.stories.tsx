import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Apple } from "lucide-react";
import { ESInputText } from "@esnet/packets-ui/src";
// import { ESInputText } from "../../../../packages/ui/src/components/ESInputText";

const meta = {
  title: "Components/ESInputText",
  component: ESInputText,
  tags: ["autodocs"],
} satisfies Meta<typeof ESInputText>;

export default meta;

type Story = StoryObj<typeof ESInputText>;

export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-13&p=f&t=TsBf9t3EVbQXYenU-0",
    },
  },
};

export const BrandedWithPlaceholderAndLargerWidth: Story = {
  args: {
    placeholder: "Branded placeholder",
    variant: "branded",
    style: { width: "250px" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-13&p=f&t=TsBf9t3EVbQXYenU-0",
    },
  },
};

export const BrandedWithValueSetAndDisabled: Story = {
  args: {
    value: "Text already set",
    placeholder: "Placeholder for Text Input",
    variant: "branded",
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1412-2695&t=bzfAloA7Ts1Yloyi-4",
    },
  },
};

export const ErrorClearsOnChange: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => {
    const [error, setError] = React.useState(args.error);
    const [value, setValue] = React.useState(args.value);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setError(false);
      setValue(event.target.value);
    };
    return (
      <ESInputText {...args} value={value} onChange={onChange} error={error} />
    );
  },
  args: {
    error: true,
    value: "Initially invalid value",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-13&p=f&t=TsBf9t3EVbQXYenU-0",
    },
    docs: {
      source: {
        code: `const [error, setError] = React.useState(args.error);
const [value, setValue] = React.useState(args.value);
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setValue(event.target.value);
};
// ...
<ESInputText {...args} value={value} onChange={onChange} error={error} />
        `.trim(),
      },
    },
  },
};

export const InputWithActionButtons: Story = {
  args: {
    placeholder: "Press the apple",
    variant: "branded",
    actionButtons: [<Apple onClick={() => alert("Action button pressed")} />],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1412-2695&t=bzfAloA7Ts1Yloyi-4",
    },
  },
};
