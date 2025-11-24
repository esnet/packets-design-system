import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESFigure } from "@esnet/packets-ui/src/components/ESFigure/ESFigure.tsx";

const meta: Meta<typeof ESFigure> = {
  title: "Components/ESFigure",
  component: ESFigure,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cPesLecFaiSRJU83KAhhRH/Design-System-Components?node-id=6541-106",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ESFigure>;

export const Default: Story = {
  args: {
    figure: (
      <img width="600" src="/imgs/esnetmap.jpg" alt="ESnet Network Map" />
    ),
    caption: "ESnet Network Map",
  },
};

const sampleTable = (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Developer</td>
        <td>alice@example.com</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>bob@example.com</td>
      </tr>
      <tr>
        <td>Charlie Brown</td>
        <td>Manager</td>
        <td>charlie@example.com</td>
      </tr>
    </tbody>
  </table>
);

export const TableAsFigure: Story = {
  args: {
    figure: sampleTable,
    caption:
      "Employee Directory (poorly styled but exists just to serve a point)",
  },
};

export const CapitalizedAndItalicized: Story = {
  args: {
    figure: <img src="/imgs/esnetmap.jpg" alt="ESnet Network Map" />,
    caption: "ESnet Network Map",
    textAlign: "right",
    capitalize: true,
    italic: true,
  },
};
