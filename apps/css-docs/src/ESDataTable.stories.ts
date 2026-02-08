import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/ESDataTable',
  tags: ['autodocs'],
  argTypes: {
    sortable: {
      control: 'boolean',
    },
    columns: {
      control: 'object',
    },
    data: {
      control: 'object',
    },
  },
  render: (args) => {
    const table = document.createElement('table');
    table.className = 'es-data-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    if (args.columns && Array.isArray(args.columns)) {
      args.columns.forEach((column: { key: string; label: string; width?: string; sortable?: boolean }) => {
        const th = document.createElement('th');
        if (column.width) th.style.width = column.width;
        th.textContent = column.label;

        if (args.sortable && column.sortable) {
          th.style.cursor = 'pointer';
          th.innerHTML = `${column.label} <span class="es-sort-icon">↕</span>`;
        }

        headerRow.appendChild(th);
      });
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    if (args.data && Array.isArray(args.data)) {
      args.data.forEach((row: Record<string, string>) => {
        const tr = document.createElement('tr');

        if (args.columns && Array.isArray(args.columns)) {
          args.columns.forEach((column: { key: string }) => {
            const td = document.createElement('td');
            td.textContent = row[column.key] || '';
            tr.appendChild(td);
          });
        }

        tbody.appendChild(tr);
      });
    }

    table.appendChild(tbody);

    return table;
  },
};

export default meta;

type Story = StoryObj;

const sampleColumns = [
  { key: 'name', label: 'Name', width: '40%' },
  { key: 'value', label: 'Value', width: '30%' },
  { key: 'createdAt', label: 'Created At', width: '30%' }
];

const sampleData = [
  { name: 'Jane Doe', value: '@janedoe', createdAt: 'August 26, 1900' },
  { name: 'John Doe', value: '@johndoe', createdAt: 'August 26, 1931' },
  { name: 'Alice Smith', value: '@asmith', createdAt: 'March 15, 1945' },
  { name: 'Bob Johnson', value: '@bjohnson', createdAt: 'July 4, 1976' }
];

export const DefaultTable: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const SortableTable: Story = {
  args: {
    columns: [
      { key: 'name', label: 'Name', width: '40%', sortable: true },
      { key: 'value', label: 'Value', width: '30%', sortable: true },
      { key: 'createdAt', label: 'Created At', width: '30%', sortable: true }
    ],
    data: sampleData,
    sortable: true,
  },
};
