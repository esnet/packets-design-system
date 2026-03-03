import React, { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsDataTable } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsDataTable> = {
  title: "Components/PktsDataTable",
  component: PktsDataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PktsDataTable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultTableExample: Story = {
  render: () => (
    <PktsDataTable>
      <PktsDataTable.PktsDataTableHead>
        <PktsDataTable.PktsDataTableHeaderCell
          width="40%"
          sort={"ASC"}
          onLabelClick={() => {}}
        >
          Name
        </PktsDataTable.PktsDataTableHeaderCell>
        <PktsDataTable.PktsDataTableHeaderCell width="20%">
          Value
        </PktsDataTable.PktsDataTableHeaderCell>
        <PktsDataTable.PktsDataTableHeaderCell width="20%">
          Created At
        </PktsDataTable.PktsDataTableHeaderCell>
      </PktsDataTable.PktsDataTableHead>
      <PktsDataTable.PktsDataTableBody>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
            Name
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
            Value
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </PktsDataTable.PktsDataTableCell>
        </PktsDataTable.PktsDataTableRow>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
            Name
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
            Value
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </PktsDataTable.PktsDataTableCell>
        </PktsDataTable.PktsDataTableRow>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
            Name
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
            Value
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </PktsDataTable.PktsDataTableCell>
        </PktsDataTable.PktsDataTableRow>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
            Name
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
            Value
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </PktsDataTable.PktsDataTableCell>
        </PktsDataTable.PktsDataTableRow>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
            Name
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
            Value
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </PktsDataTable.PktsDataTableCell>
        </PktsDataTable.PktsDataTableRow>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
            Name
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
            Value
          </PktsDataTable.PktsDataTableCell>
          <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
            August 26, 1931
          </PktsDataTable.PktsDataTableCell>
        </PktsDataTable.PktsDataTableRow>
      </PktsDataTable.PktsDataTableBody>
      <PktsDataTable.PktsDataTableFooter>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell colSpan={3} />
        </PktsDataTable.PktsDataTableRow>
      </PktsDataTable.PktsDataTableFooter>
    </PktsDataTable>
  ),
  name: "PktsDataTable Example",
};

export const TableLoadingExample: Story = {
  render: () => (
    <PktsDataTable>
      <PktsDataTable.PktsDataTableHead>
        <PktsDataTable.PktsDataTableHeaderCell width="40%">
          Name
        </PktsDataTable.PktsDataTableHeaderCell>
        <PktsDataTable.PktsDataTableHeaderCell width="20%">
          Value
        </PktsDataTable.PktsDataTableHeaderCell>
        <PktsDataTable.PktsDataTableHeaderCell width="20%">
          Created At
        </PktsDataTable.PktsDataTableHeaderCell>
      </PktsDataTable.PktsDataTableHead>
      <PktsDataTable.PktsDataTableBody>
        <PktsDataTable.PktsDataTableSkeletonLoading columnCount={3} rowCount={3} />
      </PktsDataTable.PktsDataTableBody>
      <PktsDataTable.PktsDataTableFooter>
        <PktsDataTable.PktsDataTableRow>
          <PktsDataTable.PktsDataTableCell colSpan={3} />
        </PktsDataTable.PktsDataTableRow>
      </PktsDataTable.PktsDataTableFooter>
    </PktsDataTable>
  ),
  name: "PktsDataTable Loading Example",
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
      <PktsDataTable>
        <PktsDataTable.PktsDataTableHead>
          <PktsDataTable.PktsDataTableHeaderCell
            width="40%"
            sort={sort.name}
            onLabelClick={(e) => {
              _onLabelClick(e, "name");
            }}
          >
            Name
          </PktsDataTable.PktsDataTableHeaderCell>
          <PktsDataTable.PktsDataTableHeaderCell
            width="20%"
            sort={sort.username}
            onLabelClick={(e) => {
              _onLabelClick(e, "username");
            }}
          >
            Username
          </PktsDataTable.PktsDataTableHeaderCell>
          <PktsDataTable.PktsDataTableHeaderCell
            width="20%"
            sort={sort.createdAt}
            onLabelClick={(e) => {
              _onLabelClick(e, "createdAt");
            }}
          >
            Created At
          </PktsDataTable.PktsDataTableHeaderCell>
        </PktsDataTable.PktsDataTableHead>
        <PktsDataTable.PktsDataTableBody>
          {sortedData.map(({ name, username, createdAt }, index) => {
            return (
              <PktsDataTable.PktsDataTableRow key={`data-row-${index}`}>
                <PktsDataTable.PktsDataTableCell columnLabel={"name"}>
                  {name}
                </PktsDataTable.PktsDataTableCell>
                <PktsDataTable.PktsDataTableCell columnLabel={"value"}>
                  {username}
                </PktsDataTable.PktsDataTableCell>
                <PktsDataTable.PktsDataTableCell columnLabel={"created at"}>
                  {createdAt}
                </PktsDataTable.PktsDataTableCell>
              </PktsDataTable.PktsDataTableRow>
            );
          })}
        </PktsDataTable.PktsDataTableBody>
        <PktsDataTable.PktsDataTableFooter>
          <PktsDataTable.PktsDataTableRow>
            <PktsDataTable.PktsDataTableCell colSpan={3} />
          </PktsDataTable.PktsDataTableRow>
        </PktsDataTable.PktsDataTableFooter>
      </PktsDataTable>
    );
  },
  name: "PktsDataTable Example",
};
