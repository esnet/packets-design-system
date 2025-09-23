import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ESInputEmail,
  ESInputPassword,
  ESInputSwitch,
  ESInputText,
  ESModule,
} from "@esnet/packets-ui";
import { ESInputRow } from "@esnet/packets-ui/src/components/ESInputRow/ESInputRow.tsx";

const meta: Meta<typeof ESInputRow> = {
  title: "Components/ESInputRow",
  component: ESInputRow,
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
  render: (args) => {
    return (
      <ESInputRow {...args}>
        {args.children || (
          <ESInputText
            placeholder="This input element can be replaced with any ESInput*"
            disabled={args.disabled}
            error={!!args.error}
          />
        )}
      </ESInputRow>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ESInputRow>;

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
export const LabelPlacementWithSwitch: Story = {
  args: {
    label: "Agree to Terms",
    tooltip: "See terms elsewhere",
    required: true,
    children: <ESInputSwitch />,
    labelPlacement: "left",
  },
};

export const ExampleForm: Story = {
  render: (props) => {
    return (
      <ESModule title="Create Account">
        <ESInputRow
          {...props}
          label="Email"
          required
          tooltip="Must be in @es.net domain."
          success
        >
          <ESInputEmail
            placeholder="Email"
            required
            name="Email"
            defaultValue="echennau@es.net"
            disabled={props.disabled}
            error={!!props.error}
          />
        </ESInputRow>
        <ESInputRow
          {...props}
          label="Password"
          required
          tooltip="Must be at least 10 characters long."
          error="Must be at least 10 characters long."
        >
          <ESInputPassword
            placeholder="Password"
            required
            defaultValue="123"
            name="Password"
            disabled={props.disabled}
            error={!!props.error}
          />
        </ESInputRow>
        <ESInputRow
          {...props}
          label="Username"
          tooltip="Username, e.g. echennau."
          success="Username available"
        >
          <ESInputText
            placeholder="Username"
            defaultValue="echennau"
            disabled={props.disabled}
            error={!!props.error}
            name="Username"
          />
        </ESInputRow>
      </ESModule>
    );
  },
};
