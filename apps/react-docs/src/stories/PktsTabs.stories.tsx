import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PktsTabs, PktsTab, PktsModule } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsTabs> = {
  title: "Components/PktsTabs",
  component: PktsTabs,
  subcomponents: { PktsTab },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PktsTabs>;

export const Default: Story = {
  args: {
    children: [
      <PktsTab active>Tab 1</PktsTab>,
      <PktsTab>Tab 2</PktsTab>,
      <PktsTab>Tab 3</PktsTab>,
    ],
  },
};

export const FullWidthAndBrandedAndNoBorder: Story = {
  args: {
    border: false,
    fullWidth: true,
    branded: true,
    children: [
      <PktsTab>Individuals</PktsTab>,
      <PktsTab>Business</PktsTab>,
      <PktsTab active>Enterprise</PktsTab>,
    ],
  },
};

const code = `const [tabIndex, setTabIndex] = useState(0);
    return (
      <div>
        <PktsTabs {...args} style={{ marginBottom: "1rem" }}>
          <PktsTab active={tabIndex === 0} onTabSelect={() => setTabIndex(0)}>
            Tab 1
          </PktsTab>
          <PktsTab active={tabIndex === 1} onTabSelect={() => setTabIndex(1)}>
            Tab 2
          </PktsTab>
          <PktsTab active={tabIndex === 2} onTabSelect={() => setTabIndex(2)}>
            Tab 3
          </PktsTab>
        </PktsTabs>

        {tabIndex === 0 && (
          <PktsModule title="Tab 1" surface>
            Content for tab 1.
          </PktsModule>
        )}
        {tabIndex === 1 && (
          <PktsModule title="Tab 2" surface>
            Content for tab 2.
          </PktsModule>
        )}
        {tabIndex === 2 && (
          <PktsModule title="Tab 3" surface>
            Content for tab 3.
          </PktsModule>
        )}
      </div>
    );`;

export const WorkingExampleWithTabPanels: Story = {
  render: (args) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
      <div>
        <PktsTabs {...args} style={{ marginBottom: "1rem" }}>
          <PktsTab active={tabIndex === 0} onTabSelect={() => setTabIndex(0)}>
            Tab 1
          </PktsTab>
          <PktsTab active={tabIndex === 1} onTabSelect={() => setTabIndex(1)}>
            Tab 2
          </PktsTab>
          <PktsTab active={tabIndex === 2} onTabSelect={() => setTabIndex(2)}>
            Tab 3
          </PktsTab>
        </PktsTabs>

        {tabIndex === 0 && (
          <PktsModule title="Tab 1" surface>
            Content for tab 1.
          </PktsModule>
        )}
        {tabIndex === 1 && (
          <PktsModule title="Tab 2" surface>
            Content for tab 2.
          </PktsModule>
        )}
        {tabIndex === 2 && (
          <PktsModule title="Tab 3" surface>
            Content for tab 3.
          </PktsModule>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code,
      },
    },
  },
};
