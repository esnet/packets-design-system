import { PktsButton, PktsInputRow } from "@esnet/packets-ui-react";
import {
  PktsInputSelect,
  PktsInputOption,
} from "@esnet/packets-ui-react/src/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
const meta: Meta<typeof PktsInputSelect> = {
  title: "Components/PktsInputSelect",
  component: PktsInputSelect,
  subcomponents: { PktsInputOption },
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=devl",
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ minHeight: 240 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PktsInputSelect>;

export const Default: Story = {
  args: {
    children: [
      <PktsInputOption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </PktsInputOption>,
      <PktsInputOption>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </PktsInputOption>,
      <PktsInputOption>Ut enim ad minim veniam</PktsInputOption>,
      <PktsInputOption>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat
      </PktsInputOption>,
      <PktsInputOption>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </PktsInputOption>,
      <PktsInputOption>
        Excepteur sint occaecat cupidatat non proident
      </PktsInputOption>,
      <PktsInputOption>
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </PktsInputOption>,
    ],
  },
};

export const NoValues: Story = {
  args: {
    defaultValue: "No options provided in this dropdown",
    error: true,
  },
};

export const DisabledDropdown: Story = {
  args: {
    placeholder: "Placeholder value. Options are not able to be seen.",
    disabled: true,
  },
};

export const DifferentValueSameText: Story = {
  args: {
    name: "Select Input",
    defaultValue: "All options shown as the same, but have different values.",
    children: [
      <PktsInputOption value="FOO">
        Same text, only way to distinguish is the value prop.
      </PktsInputOption>,
      <PktsInputOption value="BAR">
        Same text, only way to distinguish is the value prop.
      </PktsInputOption>,
      <PktsInputOption value="BAZ">
        Same text, only way to distinguish is the value prop.
      </PktsInputOption>,
    ],
    onChange: (event: any) => {
      alert(
        `Changed to Select Input ${event.target.name} to ${event.target.value}`,
      );
    },
  },
};

/**
 * Using a controlled input state is recommended by React for various reasons.
 */
export const ControlledExample: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>();

    return (
      <div>
        <div>
          <strong>Live Value:</strong> {selectedValue}
        </div>
        <PktsInputRow label="PktsInputSelect Controlled Example">
          <PktsInputSelect
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
          >
            <PktsInputOption>React</PktsInputOption>
            <PktsInputOption>Vue</PktsInputOption>
            <PktsInputOption>Svelte</PktsInputOption>
            <PktsInputOption>HTMX</PktsInputOption>
          </PktsInputSelect>
        </PktsInputRow>
      </div>
    );
  },
};

/**
 * Uncontrolled works great for larger forms where you don't want to manage the state of inputs.
 * You can reference the value by using `FormData.get("select-name")`, but you must pass in the name prop.
 * Under the hood, the selected option is a hidden input with the same name as the given name prop.
 */
export const UncontrolledExample: Story = {
  render: () => {
    const [submittedValue, setSubmittedValue] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);
      const value = formData.get("select-form-name");

      setSubmittedValue(`Value: ${value}`);
    };
    return (
      <div>
        <div>
          <strong>Submitted Value:</strong>{" "}
          {submittedValue ? submittedValue : "Not Yet Submitted"}
        </div>
        <form onSubmit={handleSubmit}>
          <PktsInputRow
            htmlFor="select-form-name"
            label="PktsInputSelect Uncontrolled Example"
          >
            <PktsInputSelect name="select-form-name">
              <PktsInputOption>React</PktsInputOption>
              <PktsInputOption>Vue</PktsInputOption>
              <PktsInputOption>Svelte</PktsInputOption>
              <PktsInputOption>HTMX</PktsInputOption>
            </PktsInputSelect>
          </PktsInputRow>
          <PktsButton variant="primary" type="submit">
            Submit
          </PktsButton>
        </form>
      </div>
    );
  },
};
