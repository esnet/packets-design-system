import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESTabs } from "@esnet/packets-ui/src/components/ESTabs/ESTabs.tsx";
import { ESTab } from "@esnet/packets-ui/src/components/ESTabs/ESTab.tsx";
import { useState } from "react";
import { ESModule } from "@esnet/packets-ui";

const meta: Meta<typeof ESTabs> = {
  title: "Components/ESTabs",
  component: ESTabs,
  subcomponents: { ESTab },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESTabs>;

export const Default: Story = {
  args: {
    children: [
      <ESTab active>Tab 1</ESTab>,
      <ESTab>Tab 2</ESTab>,
      <ESTab>Tab 3</ESTab>,
    ],
  },
};

export const FullWidthAndBrandedAndNoBorder: Story = {
  args: {
    border: false,
    fullWidth: true,
    branded: true,
    children: [
      <ESTab>Individuals</ESTab>,
      <ESTab>Business</ESTab>,
      <ESTab active>Enterprise</ESTab>,
    ],
  },
};

const code = `const [tabIndex, setTabIndex] = useState(0);
    return (
      <div>
        <ESTabs {...args} style={{ marginBottom: "1rem" }}>
          <ESTab active={tabIndex === 0} onTabSelect={() => setTabIndex(0)}>
            Tab 1
          </ESTab>
          <ESTab active={tabIndex === 1} onTabSelect={() => setTabIndex(1)}>
            Tab 2
          </ESTab>
          <ESTab active={tabIndex === 2} onTabSelect={() => setTabIndex(2)}>
            Tab 3
          </ESTab>
        </ESTabs>

        {tabIndex === 0 && (
          <ESModule title="Tab 1" surface>
            Content for tab 1.
          </ESModule>
        )}
        {tabIndex === 1 && (
          <ESModule title="Tab 2" surface>
            Content for tab 2.
          </ESModule>
        )}
        {tabIndex === 2 && (
          <ESModule title="Tab 3" surface>
            Content for tab 3.
          </ESModule>
        )}
      </div>
    );`;

export const WorkingExampleWithTabPanels: Story = {
  render: (args) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
      <div>
        <ESTabs {...args} style={{ marginBottom: "1rem" }}>
          <ESTab active={tabIndex === 0} onTabSelect={() => setTabIndex(0)}>
            Tab 1
          </ESTab>
          <ESTab active={tabIndex === 1} onTabSelect={() => setTabIndex(1)}>
            Tab 2
          </ESTab>
          <ESTab active={tabIndex === 2} onTabSelect={() => setTabIndex(2)}>
            Tab 3
          </ESTab>
        </ESTabs>

        {tabIndex === 0 && (
          <ESModule title="Tab 1" surface>
            Content for tab 1.
          </ESModule>
        )}
        {tabIndex === 1 && (
          <ESModule title="Tab 2" surface>
            Content for tab 2.
          </ESModule>
        )}
        {tabIndex === 2 && (
          <ESModule title="Tab 3" surface>
            Content for tab 3.
          </ESModule>
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
