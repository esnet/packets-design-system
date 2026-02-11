import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputSelect } from "@esnet/packets-ui/src/components/ESInputSelect/ESInputSelect.tsx";
import ESInputOption from "@esnet/packets-ui/src/components/ESInputOption/ESInputOption.js";
import { ESInputRow, ESButton } from "@esnet/packets-ui";
import { useState } from "react";
const meta: Meta<typeof ESInputSelect> = {
  title: "Components/ESInputSelect",
  component: ESInputSelect,
  subcomponents: { ESInputOption },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=3263-282&p=f&m=devl",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 240 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ESInputSelect>;

export const Default: Story = {
  args: {
    children: [
      <ESInputOption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </ESInputOption>,
      <ESInputOption>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </ESInputOption>,
      <ESInputOption>Ut enim ad minim veniam</ESInputOption>,
      <ESInputOption>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat
      </ESInputOption>,
      <ESInputOption>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </ESInputOption>,
      <ESInputOption>
        Excepteur sint occaecat cupidatat non proident
      </ESInputOption>,
      <ESInputOption>
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </ESInputOption>,
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
      <ESInputOption value="FOO">
        Same text, only way to distinguish is the value prop.
      </ESInputOption>,
      <ESInputOption value="BAR">
        Same text, only way to distinguish is the value prop.
      </ESInputOption>,
      <ESInputOption value="BAZ">
        Same text, only way to distinguish is the value prop.
      </ESInputOption>,
    ],
    onChange: (event) => {
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
        <ESInputRow label="ESInputSelect Controlled Example">
          <ESInputSelect
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
          >
            <ESInputOption>React</ESInputOption>
            <ESInputOption>Vue</ESInputOption>
            <ESInputOption>Svelte</ESInputOption>
            <ESInputOption>HTMX</ESInputOption>
          </ESInputSelect>
        </ESInputRow>
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
          <ESInputRow
            htmlFor="select-form-name"
            label="ESInputSelect Uncontrolled Example"
          >
            <ESInputSelect name="select-form-name">
              <ESInputOption>React</ESInputOption>
              <ESInputOption>Vue</ESInputOption>
              <ESInputOption>Svelte</ESInputOption>
              <ESInputOption>HTMX</ESInputOption>
            </ESInputSelect>
          </ESInputRow>
          <ESButton variant="primary" type="submit">
            Submit
          </ESButton>
        </form>
      </div>
    );
  },
};
