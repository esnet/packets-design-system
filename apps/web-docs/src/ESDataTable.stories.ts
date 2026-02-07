import type { Meta, StoryObj } from '@storybook/web-components';
import { ESDataTable } from "@esnet/packets-ui-web";

const meta: Meta<typeof ESDataTable> = {
  title: 'Components/ESDataTable',
  component: ESDataTable.tagName,
  tags: ['autodocs'],
  argTypes: {
    sortable: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    columns: {
      control: "object",
    },
    data: {
      control: "object",
    },
  },
  render: (args) => {
    const table = document.createElement(ESDataTable.tagName) as InstanceType<typeof ESDataTable>;
    if (args.columns) table.columns = args.columns;
    if (args.data) table.data = args.data;
    if (args.sortable) table.sortable = args.sortable;
    return table;
  },
};

export default meta;

type Story = StoryObj<typeof ESDataTable>;

const sampleColumns = [
  { key: "name", label: "Name", width: "40%" },
  { key: "value", label: "Value", width: "30%" },
  { key: "createdAt", label: "Created At", width: "30%" }
];

const sampleData = [
  { name: "Jane Doe", value: "@janedoe", createdAt: "August 26, 1900" },
  { name: "John Doe", value: "@johndoe", createdAt: "August 26, 1931" },
  { name: "Alice Smith", value: "@asmith", createdAt: "March 15, 1945" },
  { name: "Bob Johnson", value: "@bjohnson", createdAt: "July 4, 1976" }
];

export const DefaultTable: Story = {
  name: "ESDataTable",
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const SortableTable: Story = {
  name: "Sortable ESDataTable",
  args: {
    columns: [
      { key: "name", label: "Name", width: "40%", sortable: true },
      { key: "value", label: "Value", width: "30%", sortable: true },
      { key: "createdAt", label: "Created At", width: "30%", sortable: true }
    ],
    data: sampleData,
    sortable: true,
  },
};
