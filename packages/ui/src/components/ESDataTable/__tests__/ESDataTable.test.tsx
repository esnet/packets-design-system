import React from "react";
import { render } from "@testing-library/react";
import ESDataTable from "../ESDataTable";

test("It renders without crashing", () => {
  const component = render(
    <ESDataTable>
      <ESDataTable.ESDataTableHead>
        <ESDataTable.ESDataTableHeaderCell>
          Name
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell>
          Value
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
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableBody>
      <ESDataTable.ESDataTableFooter>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell colSpan={2}>
            Footer
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableFooter>
    </ESDataTable>,
  );
  expect(component).toBeTruthy();
});

it("Data Table matches DOM Snapshot", () => {
  const domTree = render(
    <ESDataTable>
      <ESDataTable.ESDataTableHead>
        <ESDataTable.ESDataTableHeaderCell>
          Name
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell>
          Value
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
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableBody>
      <ESDataTable.ESDataTableFooter>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell colSpan={2}>
            Footer
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableFooter>
    </ESDataTable>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Data Table with Skeleton Loading matches DOM Snapshot", () => {
  const domTree = render(
    <ESDataTable>
      <ESDataTable.ESDataTableHead>
        <ESDataTable.ESDataTableHeaderCell>
          Name
        </ESDataTable.ESDataTableHeaderCell>
        <ESDataTable.ESDataTableHeaderCell>
          Value
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
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell columnLabel={"name"}>
            Name
          </ESDataTable.ESDataTableCell>
          <ESDataTable.ESDataTableCell columnLabel={"value"}>
            Value
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableBody>
      <ESDataTable.ESDataTableFooter>
        <ESDataTable.ESDataTableRow>
          <ESDataTable.ESDataTableCell colSpan={2}>
            Footer
          </ESDataTable.ESDataTableCell>
        </ESDataTable.ESDataTableRow>
      </ESDataTable.ESDataTableFooter>
    </ESDataTable>,
  );
  expect(domTree).toMatchSnapshot();
});
