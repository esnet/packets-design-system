import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputTypeahead } from "@esnet/packets-ui/src/components/ESInputTypeahead/ESInputTypeahead.tsx";
import { useState } from "react";
import { ESButton, ESLabel } from "@esnet/packets-ui";

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
  {
    id: "option-1",
    value: "Lorem ipsum dolor sit amet",
  },
  {
    id: "option-2",
    value:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "option-3",
    value: "Ut enim ad minim veniam",
  },
  {
    id: "option-4",
    value:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: "option-5",
    value:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const Default: Story = {
  args: {
    options,
  },
};

/**
 * Using a controlled input state is recommended by React for various reasons.
 * You can control both values, the search value and the selected options value, or control only one.
 */
export const ControlledExample: Story = {
  render: () => {
    const [search, setSearch] = useState<string>("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div className="p-4 space-y-4">
        <div className="mt-2">
          <strong>Live Value:</strong>{" "}
          {selectedIds ? selectedIds.join(", ") : "[empty]"}{" "}
          <strong>Live Search Value:</strong> {search ?? "[empty] "}
        </div>
        <ESLabel htmlFor="typeahead-form-name" label="Typeahead Options">
          <ESInputTypeahead
            name="typeahead-form-name"
            options={options}
            searchValue={search}
            onSearchChange={setSearch}
            selectedIdsValue={selectedIds}
            onSelectedOptionsChange={setSelectedIds}
          />
        </ESLabel>
      </div>
    );
  },
};

/**
 * For forms intentionally made simple with ref only access, this component can be uncontrolled too.
 * If a name is passed in, the search value input has name `${props.name}-typeahead-search`,
 * and the selected options are stored in a hidden input with name `${name}`.
 */
export const UncontrolledExample: Story = {
  render: () => {
    const [submittedValue, setSubmittedValue] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);
      const value = formData.get("typeahead-form-name") ?? "ERROR: NOT FOUND";
      const searchValue =
        formData.get("typeahead-form-name-typeahead-search") ??
        "ERROR: NOT FOUND";

      setSubmittedValue(`option Ids: ${value}, search value: ${searchValue}`);
    };
    return (
      <div className="p-4 space-y-4">
        {
          <div className="mt-2">
            <strong>Submitted Value:</strong>{" "}
            {submittedValue ? submittedValue : "[empty]"}
          </div>
        }
        <form onSubmit={handleSubmit}>
          <ESLabel htmlFor="typeahead-form-name" label="Typeahead Options">
            <ESInputTypeahead name="typeahead-form-name" options={options} />
          </ESLabel>
          <ESButton
            variant="primary"
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </ESButton>
        </form>
      </div>
    );
  },
};
