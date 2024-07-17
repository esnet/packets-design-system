import React, { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ESDataTable } from "@esnet/packets-ui";

const meta: Meta<typeof ESDataTable> = {
  title: "Components/ESDataTable",
  component: ESDataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESDataTable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultTableExample: Story = {
  render: () => (
    <ESDataTable>
      <ESDataTable.ESDataTableHead>
        <ESDataTable.ESDataTableHeaderCell width="40%">
          Name
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell width="20%">
          Value
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell width="20%">
          Created At
        </ESDataTable.ESDataTableHeaderCell>
      </ESDataTable.ESDataTableHead>
      <ESDataTable.ESDataTableBody>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableBody>
      <ESDataTable.ESDataTableFooter>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell colSpan={3} />
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableFooter>
    </ESDataTable>
  ),
  name: "ESDataTable Example",
};

export const TableLoadingExample: Story = {
  render: () => (
    <ESDataTable>
      <ESDataTable.ESDataTableHead>
        <ESDataTable.ESDataTableHeaderCell width="40%">
          Name
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell width="20%">
          Value
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell width="20%">
          Created At
        </ESDataTable.ESDataTableHeaderCell>
      </ESDataTable.ESDataTableHead>
      <ESDataTable.ESDataTableBody>
        <ESDataTable.ESDataTableSkeletonLoading columnCount={3} rowCount={3} />
      </ESDataTable.ESDataTableBody>
      <ESDataTable.ESDataTableFooter>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell colSpan={3} />
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableFooter>
    </ESDataTable>
  ),
  name: "ESDataTable Loading Example",
};

export const DataTableSortingExample: Story = {
  render: () => {
    const [sort, setSort] = useState({
      name: "DESC",
      username: "NONE",
      createdAt: "NONE",
    });

    const data = [
      {
        name: "Jane Doe",
        username: "@janedoe",
        createdAt: "August 26, 1900",
      },
      {
        name: "John Doe",
        username: "@johndoe",
        createdAt: "August 26, 1931",
      },
    ];

    const sortedData = useMemo(() => {
      const currentSortTarget = Object.keys(sort).find((sortKey) => {
        return sort[sortKey] != "NONE";
      });

      return structuredClone(data).sort((a, b) => {
        const sortConditional =
          sort[currentSortTarget] === "ASC"
            ? a[currentSortTarget] < b[currentSortTarget]
            : a[currentSortTarget] > b[currentSortTarget];

        return sortConditional ? 1 : -1;
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

    const _onLabelClick = (e, target: string) => {
      e.preventDefault();
      const sortState = structuredClone(sort);
      const currentTargetSort = sortState[target];

      Object.keys(sortState).forEach((key) => {
        sortState[key] = "NONE";
      });

      sortState[target] = currentTargetSort === "DESC" ? "ASC" : "DESC";

      setSort(sortState);
    };

    return (
      <ESDataTable>
        <ESDataTable.ESDataTableHead>
          <ESDataTable.ESDataTableHeaderCell
            width="40%"
            sort={sort.name}
            onLabelClick={(e) => {
              _onLabelClick(e, "name");
            }}
          >
            Name
          </ESDataTable.ESDataTableHeaderCell>
          <ESDataTable.ESDataTableHeaderCell
            width="20%"
            sort={sort.username}
            onLabelClick={(e) => {
              _onLabelClick(e, "username");
            }}
          >
            Username
          </ESDataTable.ESDataTableHeaderCell>
          <ESDataTable.ESDataTableHeaderCell
            width="20%"
            sort={sort.createdAt}
            onLabelClick={(e) => {
              _onLabelClick(e, "createdAt");
            }}
          >
            Created At
          </ESDataTable.ESDataTableHeaderCell>
        </ESDataTable.ESDataTableHead>
        <ESDataTable.ESDataTableBody>
          {sortedData.map(({ name, username, createdAt }, index) => {
            return (
              <ESDataTable.ESDataTableRow key={`data-row-${index}`}>
                <ESDataTable.ESDataTableCell columnLabel={"name"}>
                  {name}
                </ESDataTable.ESDataTableCell>
                <ESDataTable.ESDataTableCell columnLabel={"value"}>
                  {username}
                </ESDataTable.ESDataTableCell>
                <ESDataTable.ESDataTableCell columnLabel={"created at"}>
                  {createdAt}
                </ESDataTable.ESDataTableCell>
              </ESDataTable.ESDataTableRow>
            );
          })}
        </ESDataTable.ESDataTableBody>
        <ESDataTable.ESDataTableFooter>
          <ESDataTable.ESDataTableRow>
            <ESDataTable.ESDataTableCell colSpan={3} />
          </ESDataTable.ESDataTableRow>
        </ESDataTable.ESDataTableFooter>
      </ESDataTable>
    );
  },
  name: "ESDataTable Example",
};
