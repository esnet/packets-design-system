import {
  PktsInputText,
  PktsInputSwitch,
  PktsInputCheckbox,
  PktsModule,
  PktsInputEmail,
  PktsInputPassword,
} from "@esnet/packets-ui-react";
import { PktsInputRow } from "@esnet/packets-ui-react/src/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PktsInputRow> = {
  title: "Components/PktsInputRow",
  component: PktsInputRow,
  tags: ["autodocs"],
  argTypes: {
    success: {
      control: "text",
    },
    error: {
      control: "text",
    },
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=1-15",
    },
  },
  render: (args: any) => {
    return (
      <PktsInputRow {...args}>
        {args.children || (
          <PktsInputText
            placeholder="This input element can be replaced with any PktsInput*"
            disabled={args.disabled}
            error={!!args.error}
          />
        )}
      </PktsInputRow>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PktsInputRow>;

export const Default: Story = {
  args: {
    label: "Input Label",
  },
};

export const RequiredTooltip: Story = {
  args: {
    label: "SSN",
    tooltip: "This is required",
    required: true,
    disabled: false,
  },
};

/**
 * Even with switches, consider using `labelPlacement` as top. Below is set to left.
 */
export const LabelPlacementLeftWithSwitch: Story = {
  args: {
    label: "Agree to Terms",
    tooltip: "See terms elsewhere",
    required: true,
    children: <PktsInputSwitch />,
    labelPlacement: "left",
    success: "success/error message would be placed here",
  },
};

export const LabelPlacementRightWithCheckbox: Story = {
  args: {
    label: "Agree to Terms",
    tooltip: "See terms elsewhere",
    required: true,
    labelPlacement: "right",
    children: <PktsInputCheckbox />,
    error: "success/error message would be placed here",
  },
};

export const ExampleForm: Story = {
  render: (props: any) => {
    return (
      <PktsModule title="Create Account">
        <PktsInputRow
          {...props}
          label="Email"
          required
          tooltip="Must be in @es.net domain."
          success
        >
          <PktsInputEmail
            placeholder="Email"
            required
            name="Email"
            defaultValue="echennau@es.net"
            disabled={props.disabled}
            error={!!props.error}
          />
        </PktsInputRow>
        <PktsInputRow
          {...props}
          label="Password"
          required
          tooltip="Must be at least 10 characters long."
          error="Must be at least 10 characters long."
        >
          <PktsInputPassword
            placeholder="Password"
            required
            defaultValue="123"
            name="Password"
            disabled={props.disabled}
            error={!!props.error}
          />
        </PktsInputRow>
        <PktsInputRow
          {...props}
          label="Username"
          tooltip="Username, e.g. echennau."
          success="Username available"
        >
          <PktsInputText
            placeholder="Username"
            defaultValue="echennau"
            disabled={props.disabled}
            error={!!props.error}
            name="Username"
          />
        </PktsInputRow>
      </PktsModule>
    );
  },
};
