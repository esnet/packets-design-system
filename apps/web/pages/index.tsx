import React from "react";

import {
  ESButton,
  ESButtonGroup,
  ESSkeletonChip,
  ESAlert,
  ESBreadcrumbs,
  ESCommaSeperatedList,
  ESDataTable,
  ESDatum,
  ESFormSection,
  ESIconButton,
  ESModule,
  ESSpacer,
  ESSpinner,
  ESTableOfContents,
  ESTabs,
  ESTab,
  ESTitleSection,
  usePacketsDesignTokens,
  DesignSystemName,
} from "@esnet/packets-ui";

export default function Page() {
  const tokens = usePacketsDesignTokens();

  console.log("DesignSystemName", DesignSystemName);

  return (
    <div>
      <h1 className="test">Test Page for {DesignSystemName}</h1>
      <ESAlert type={"error"} title={"Hello Alert"}>
        <p>Some Alert</p>
      </ESAlert>
      <ESBreadcrumbs
        breadcrumbs={[
          {
            children: "Home",
            href: "/",
          },
          {
            children: "Circuits",
            href: "/circuits",
          },
          {
            children: "THX-1138",
            href: "/circuits/THX-1138",
          },
        ]}
      />
      <ESButton variant={"primary"} onClick={() => {}} type="button">
        ESButton
      </ESButton>
      <ESButtonGroup labelCopy="A Collection of Buttons">
        <ESButton variant="primary">Button 1</ESButton>
        <ESButton variant="secondary">Button 2</ESButton>
        <ESButton variant="secondary">Button 3</ESButton>
        <ESButton variant="tertiary">Button 3</ESButton>
      </ESButtonGroup>
      <ESCommaSeperatedList items={["apples", "oranges", "lemons"]} />
      <ESSkeletonChip />
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
      <ESDatum title="Bandwidth">1000mbps</ESDatum>
      <ESFormSection
        descriptionSlot={
          <>
            <p>Section description</p>
          </>
        }
        title="Section Title"
      >
        <React.Fragment key=".0">
          <ESDatum title="ID">ESNET-12345</ESDatum>
          <ESDatum title="Capacity">1000mbps</ESDatum>
          <ESDatum title="Created">August 26, 1931</ESDatum>
        </React.Fragment>
      </ESFormSection>
      <ESIconButton variant={"primary"} onClick={() => {}} type="button">
        I
      </ESIconButton>
      <ESSpacer size={"medium"} type={"hortizontal"} />
      <ESSpinner />
      <ESTableOfContents
        sections={[
          {
            children: "Colors",
            href: "/?path=/docs/design-tokens-breakpoints--docs",
          },
          {
            children: "Elevation and Shadows",
            href: "/?path=/docs/design-tokens-elevation-and-shadows--docs",
          },
          {
            children: "Icons",
            href: "/?path=/docs/design-tokens-icons--docs",
          },
        ]}
        title="Design Tokens"
      />

      <ESModule title="A Module Title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          eget aliquet nibh praesent tristique. Sem et tortor consequat id.
          Turpis in eu mi bibendum neque. Vel turpis nunc eget lorem dolor sed
          viverra. Urna condimentum mattis pellentesque id. Quisque id diam vel
          quam elementum pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu
          non. Nulla facilisi cras fermentum odio eu. Aenean sed adipiscing diam
          donec adipiscing tristique risus nec feugiat. Et ultrices neque ornare
          aenean. Et malesuada fames ac turpis egestas sed tempus. Nam at lectus
          urna duis convallis convallis tellus id interdum. Commodo elit at
          imperdiet dui accumsan sit amet nulla facilisi. Tempus imperdiet nulla
          malesuada pellentesque elit eget gravida. Erat imperdiet sed euismod
          nisi porta. Pulvinar sapien et ligula ullamcorper malesuada proin
          libero nunc consequat. At urna condimentum mattis pellentesque id.
          Lacus viverra vitae congue eu. Purus sit amet luctus venenatis lectus
          magna.
        </p>
      </ESModule>
      <>
        <ESTabs border verticalPadding>
          <ESTab isActive>
            <a href="#" target="_self">
              Link 1
            </a>
          </ESTab>
          <ESTab>
            <a href="#" target="_self">
              Link 2
            </a>
          </ESTab>
          <ESTab>
            <a href="#" target="_self">
              Link 3
            </a>
          </ESTab>
        </ESTabs>
      </>
      <ESTitleSection
        subtitle="Department of Energy Laboratory"
        title="Lawrence Berkeley National Laboratory"
      />
      <p>usePacketsDesignTokens Output:</p>
      <pre>{JSON.stringify(tokens, null, 2)}</pre>
    </div>
  );
}
