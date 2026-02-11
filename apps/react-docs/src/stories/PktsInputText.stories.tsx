import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Apple } from "lucide-react";
import { PktsInputText } from "@esnet/packets-ui-react/src/components/PktsInputText/PktsInputText.tsx";

const meta = {
  title: "Components/PktsInputText",
  component: PktsInputText,
  tags: ["autodocs"],
} satisfies Meta<typeof PktsInputText>;

export default meta;

type Story = StoryObj<typeof PktsInputText>;

export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-13&p=f&t=TsBf9t3EVbQXYenU-0",
    },
  },
};

export const BrandedWithPlaceholder: Story = {
  args: {
    placeholder: "Branded placeholder",
    variant: "branded",
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
      <PktsInputText {...args} value={value} onChange={onChange} error={error} />
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
<PktsInputText {...args} value={value} onChange={onChange} error={error} />
        `.trim(),
      },
    },
  },
};

export const InputWithActionButtons: Story = {
  args: {
    placeholder: "Press the apple",
    variant: "branded",
    actionButtons: <Apple onClick={() => alert("Action button pressed")} />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1412-2695&t=bzfAloA7Ts1Yloyi-4",
    },
  },
};
