import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ESNestedList,
  ESNestedListItem,
} from "@esnet/packets-ui/src/components/ESNestedList/ESNestedList.tsx";
import { FileText, FolderOpen, ToolCase } from "lucide-react";

const meta: Meta<typeof ESNestedList> = {
  title: "Components/ESNestedList",
  component: ESNestedList,
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

type Story = StoryObj<typeof ESNestedList>;

export const Default: Story = {
  args: {
    header: <h5>Favorite Foods</h5>,
    children: [
      <ESNestedList header="Fruits">
        <ESNestedListItem>Apple</ESNestedListItem>
        <ESNestedListItem>Orange</ESNestedListItem>
        <ESNestedListItem>Banana</ESNestedListItem>
      </ESNestedList>,
      <ESNestedList header="Vegetables">
        <ESNestedListItem>Broccoli</ESNestedListItem>
        <ESNestedListItem>Cauliflower</ESNestedListItem>
        <ESNestedListItem>Carrot</ESNestedListItem>
      </ESNestedList>,
      <ESNestedList header="Snacks">
        <ESNestedListItem noDisc>Dr. Pepper</ESNestedListItem>
        <ESNestedList header="Sweet">
          <ESNestedListItem>Ice Cream</ESNestedListItem>
          <ESNestedListItem>Tiramisu</ESNestedListItem>
          <ESNestedListItem>Red Bean Soup</ESNestedListItem>
        </ESNestedList>
        <ESNestedList header="Savory">
          <ESNestedListItem>Potato Chips</ESNestedListItem>
          <ESNestedListItem>Beef Jerky</ESNestedListItem>
        </ESNestedList>
      </ESNestedList>,
    ],
  },
};

export const NestedLinks: Story = {
  args: {
    header: <h4>Documentation</h4>,
    children: [
      <ESNestedList
        header={
          <h5>
            Tools <ToolCase />
          </h5>
        }
      >
        <ESNestedListItem noDisc>
          <a href="/dataset/new">Create New Layer</a>
        </ESNestedListItem>
        <ESNestedListItem noDisc>
          <a href="/map/new">Create New Map</a>
        </ESNestedListItem>
        <ESNestedListItem noDisc>
          <a href="/template/new">Node SVG Builder</a>
        </ESNestedListItem>
      </ESNestedList>,
      <ESNestedList
        header={
          <h5>
            Libraries <FolderOpen />
          </h5>
        }
      >
        <ESNestedList header={<a href="/library/datasets">Datasets</a>}>
          {["Dataset 1", "Dataset 2"].map((dataset) => (
            <ESNestedListItem key={dataset}>
              <a href={`/map/${dataset}`}>{dataset}</a>
            </ESNestedListItem>
          ))}
        </ESNestedList>
        <ESNestedList header={<a href="/library/maps">Maps</a>}>
          {["Map 1", "Map 2"].map((m) => (
            <ESNestedListItem key={m}>
              <a href={`/map/${m}`}>{m}</a>
            </ESNestedListItem>
          ))}
        </ESNestedList>
        <ESNestedList header={<a href="/library/templates">Node Templates</a>}>
          {["Node 1", "Node 2", "Node 3"].map((template) => (
            <ESNestedListItem key={template}>
              <a href={`/template/${template}`}>{template}</a>
            </ESNestedListItem>
          ))}
        </ESNestedList>
      </ESNestedList>,
      <ESNestedList
        header={
          <h5>
            Resources <FileText />
          </h5>
        }
      >
        <ESNestedListItem noDisc>
          <a href="https://esnet.atlassian.net/wiki/spaces/MAAG/pages/3186196481/Terranova+Documentation">
            Documentation
          </a>
        </ESNestedListItem>
        <ESNestedListItem noDisc>
          <a href="/settings">Settings</a>
        </ESNestedListItem>
      </ESNestedList>,
    ],
  },
};
