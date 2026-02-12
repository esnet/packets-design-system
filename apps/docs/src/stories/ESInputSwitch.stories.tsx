import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESInputRow, ESInputSwitch } from "@esnet/packets-ui";
import React from "react";

const meta: Meta<typeof ESInputSwitch> = {
  title: "Components/ESInputSwitch",
  component: ESInputSwitch,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ESInputSwitch>;

export const Default: Story = {};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <ESInputRow label="Toggle below to see live value">
        <ESInputSwitch
          variant="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <code>e.target.checked: {checked ? "true" : "false"}</code>
      </ESInputRow>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <table
      style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}
    >
      <thead>
        <tr style={{ borderBottom: "2px solid #eee" }}>
          <th style={{ padding: "1rem", textAlign: "left" }}>State</th>
          <th style={{ padding: "1rem" }}>Primary</th>
          <th style={{ padding: "1rem" }}>Secondary</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
          <td
            style={{ padding: "1rem", textAlign: "left", fontWeight: "bold" }}
          >
            Default (Off)
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="primary" />
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="secondary" />
          </td>
        </tr>

        <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
          <td
            style={{ padding: "1rem", textAlign: "left", fontWeight: "bold" }}
          >
            Default (On)
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="primary" defaultChecked />
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="secondary" defaultChecked />
          </td>
        </tr>

        <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
          <td
            style={{
              padding: "1rem",
              textAlign: "left",
              fontWeight: "bold",
              color: "#999",
            }}
          >
            Disabled (Off)
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="primary" disabled />
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="secondary" disabled />
          </td>
        </tr>

        <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
          <td
            style={{
              padding: "1rem",
              textAlign: "left",
              fontWeight: "bold",
              color: "#999",
            }}
          >
            Disabled (On)
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="primary" disabled defaultChecked />
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="secondary" disabled defaultChecked />
          </td>
        </tr>

        <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
          <td
            style={{ padding: "1rem", textAlign: "left", fontWeight: "bold" }}
          >
            No Icon (Off)
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="primary" noIcon />
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="secondary" noIcon />
          </td>
        </tr>

        <tr>
          <td
            style={{ padding: "1rem", textAlign: "left", fontWeight: "bold" }}
          >
            No Icon (On)
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="primary" defaultChecked noIcon />
          </td>
          <td style={{ padding: "1rem" }}>
            <ESInputSwitch variant="secondary" defaultChecked noIcon />
          </td>
        </tr>
      </tbody>
    </table>
  ),
};
