import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputTypeahead } from "@esnet/packets-ui/src/components/ESInputTypeahead/ESInputTypeahead.tsx";
import { useState } from "react";
import { ESButton, ESInputRow } from "@esnet/packets-ui";
import ESInputOption from "@esnet/packets-ui/src/components/ESInputOption/ESInputOption.js";

const meta: Meta<typeof ESInputTypeahead> = {
  title: "Components/ESInputTypeahead",
  component: ESInputTypeahead,
  subcomponents: { ESInputOption },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=4478-110&p=f&t=wFd5nwUZcysZsqKH-0",
    },
  },
  decorators: [
    // a larger height to fully view the absolutely dropdown
    (Story) => (
      <div style={{ minHeight: 280 }}>
        <div style={{ position: "relative" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ESInputTypeahead>;

const options = [
  "Lorem ipsum dolor sit amet",
  "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "Ut enim ad minim veniam",
  "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
].map((value) => <ESInputOption key={value}>{value}</ESInputOption>);

export const Default: Story = {
  args: {
    children: options,
    multi: false,
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
        <form>
          <ESInputRow label="Typeahead Options">
            <ESInputTypeahead
              value={selectedValues}
              onChange={(e) => {
                setSelectedValues(
                  Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  ),
                );
              }}
            >
              {options}
            </ESInputTypeahead>
          </ESInputRow>
        </form>
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
        {
          <div>
            <strong>Submitted Value:</strong>{" "}
            {submittedValue ? submittedValue : "Not Yet Submitted"}
          </div>
        }
        <form onSubmit={handleSubmit}>
          <ESInputRow htmlFor="typeahead-form-name" label="Typeahead Options">
            <ESInputTypeahead name="typeahead-form-name">
              {options}
            </ESInputTypeahead>
          </ESInputRow>
          <ESButton variant="primary" type="submit">
            Submit
          </ESButton>
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
      <ESInputOption>Initial Singular Option</ESInputOption>,
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
                <ESInputOption>{`'${value}' related options`}</ESInputOption>,
              ]
            : [...prev],
        );
      }, 500);
    };

    return (
      <ESInputRow label="Typeahead Options">
        <ESInputTypeahead
          placeholder="Type to view options related"
          loading={loading}
          onSearchChange={onSearchChange}
        >
          {opts}
        </ESInputTypeahead>
      </ESInputRow>
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
