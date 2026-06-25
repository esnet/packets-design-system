import { PktsButton, PktsInputRow } from "@esnet/packets-ui-react";
import {
  PktsInputTypeahead,
  PktsInputOption,
} from "@esnet/packets-ui-react/src/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof PktsInputTypeahead> = {
  title: "Components/PktsInputTypeahead",
  component: PktsInputTypeahead,
  subcomponents: { PktsInputOption },
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4478-110&p=f&t=wFd5nwUZcysZsqKH-0",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely dropdown
    (Story: any) => (
      <div style={{ minHeight: 280 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PktsInputTypeahead>;

const options = [
  "Lorem ipsum dolor sit amet",
  "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "Ut enim ad minim veniam",
  "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
].map((value) => <PktsInputOption key={value}>{value}</PktsInputOption>);

export const Default: Story = {
  args: {
    children: options,
  },
};

export const SingleSelectTypeahead: Story = {
  args: {
    children: options,
    multi: false,
  },
};

/**
 * Using a controlled input state is recommended by React for various reasons.
 */
export const ControlledExample: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
      <div>
        <div>
          <strong>Live Value:</strong> {selectedValues.join(", ")}
        </div>
        <PktsInputRow label="Typeahead Options">
          <PktsInputTypeahead
            value={selectedValues}
            onChange={(e) => {
              setSelectedValues(
                Array.from(e.target.selectedOptions, (option) => option.value),
              );
            }}
          >
            {options}
          </PktsInputTypeahead>
        </PktsInputRow>
      </div>
    );
  },
};

/**
 * Uncontrolled works great for larger forms where you don't want to manage the state of inputs.
 * You can reference the value by using `FormData.getAll("typeahead-name")`, but you must pass in the name prop.
 * Under the hood, each selected option is a hidden input with the same name as the given name prop.
 */
export const UncontrolledExample: Story = {
  render: () => {
    const [submittedValue, setSubmittedValue] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);
      const value = formData.getAll("typeahead-form-name");

      setSubmittedValue(`Option values: ${value}`);
    };
    return (
      <div>
        <div>
          <strong>Submitted Value:</strong>{" "}
          {submittedValue ? submittedValue : "Not Yet Submitted"}
        </div>
        <form onSubmit={handleSubmit}>
          <PktsInputRow htmlFor="typeahead-form-name" label="Typeahead Options">
            <PktsInputTypeahead name="typeahead-form-name">
              {options}
            </PktsInputTypeahead>
          </PktsInputRow>
          <PktsButton variant="primary" type="submit">
            Submit
          </PktsButton>
        </form>
      </div>
    );
  },
};

/**
 * If you want to load in new values based on the search value you can use `onSearchChange` in conjunction with `loading` props. The `setTimeout` is meant to simulate fetching from an API.
 *
 * Type into the search, and results will load in.
 */
export const LoadingExample: Story = {
  render: () => {
    const [opts, setOpts] = useState([
      <PktsInputOption>Initial Singular Option</PktsInputOption>,
    ]);
    const [loading, setLoading] = useState(false);
    const onSearchChange = (e: any) => {
      if (loading) return;
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        const value = e.target.value;
        setOpts((prev) =>
          value !== ""
            ? [
                ...prev,
                <PktsInputOption>{`'${value}' related options`}</PktsInputOption>,
              ]
            : [...prev],
        );
      }, 500);
    };

    return (
      <PktsInputRow label="Typeahead Options">
        <PktsInputTypeahead
          placeholder="Type to view options related"
          loading={loading}
          onSearchChange={onSearchChange}
        >
          {opts}
        </PktsInputTypeahead>
      </PktsInputRow>
    );
  },
};

// export const BrandedAndErrorAndDisabled: Story = {
//   args: {
//     variant: "branded",
//     error: true,
//     disabled: true,
//     options: options,
//     selectedIdsValue: ["option-1", "option-2"],
//     searchValue: "disabled search",
//   },
// };
