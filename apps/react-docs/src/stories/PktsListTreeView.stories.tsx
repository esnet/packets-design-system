/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PktsListTreeView } from "@esnet/packets-ui-react";

const meta: Meta<typeof PktsListTreeView> = {
  title: "Components/PktsListTreeView",
  component: PktsListTreeView,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { control: "string" },
      defaultValue: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PktsListTreeView>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultESListTreeViewExample: Story = {
  render: (props: any) => {
    const [state, setState] = useState(props.root);

    const _findItemById = (item: any, targetId: string, forceUpdate: any) => {
      if (typeof forceUpdate?.value === "boolean") {
        item.isSelected = forceUpdate.value;
        item?.list?.map((itemChild: any) =>
          _findItemById(itemChild, targetId, forceUpdate),
        );
      } else if (item?.id === targetId) {
        const newVal = !item.isSelected;
        item.isSelected = newVal;
        console.log("newVal", newVal);
        item?.list?.map((itemChild: any) =>
          _findItemById(itemChild, targetId, { value: newVal }),
        );
      } else if (item?.list) {
        item.list.map((itemChild: any) =>
          _findItemById(itemChild, targetId, {}),
        );
      }
    };

    const _toggleSelectedById = (id: string) => {
      const clone = structuredClone(state);
      _findItemById(clone, id);

      setState(clone);
    };

    const _demoCircuitListItem = (item: {
      id: any;
      list: any;
      label: any;
      isSelected: any;
    }) => {
      // const [isSelected, setIsSelected] = useState(false);
      const _toggleSelected = () => {
        _toggleSelectedById(item.id);
      };

      const key = `circuit-list-item-${item.id}`;

      if (item?.list) {
        return (
          <PktsListTreeView
            key={key}
            content={<span onClick={_toggleSelected}>{item.label}</span>}
            isSelected={item.isSelected}
            onCheckmarkClick={_toggleSelected}
          >
            {item.list?.map(
              (subitem: {
                id: any;
                list: any;
                label: any;
                isSelected: any;
              }) => {
                return _demoCircuitListItem(subitem);
              },
            )}
          </PktsListTreeView>
        );
      }

      console.log("props.isSelected", props);

      return (
        <PktsListTreeView.PktsListTreeLeafView
          key={key}
          isSelected={item.isSelected}
          onCheckmarkClick={_toggleSelected}
        >
          <span onClick={_toggleSelected}>{item.label}</span>
        </PktsListTreeView.PktsListTreeLeafView>
      );
    };

    return _demoCircuitListItem(state);
  },
  name: "PktsListTreeView Example",
  args: {
    root: {
      id: "cg-a",
      label: "Circuit Group A",
      isSelected: false,
      list: [
        {
          id: "c-a-1",
          label: "Circuit A-1",
          isSelected: false,
        },
        {
          id: "c-a-2",
          label: "Circuit A-2",
          isSelected: false,
        },
        {
          id: "cg-b",
          label: "Circuit Group B",
          isSelected: true,
          list: [
            {
              id: "cg-c",
              label: "Circuit Group C",
              isSelected: false,
              list: [
                {
                  id: "c-c-1",
                  label: "Circuit C 1",
                  isSelected: false,
                },
                {
                  id: "c-c-2",
                  label: "Circuit C 2",
                  isSelected: false,
                },
                {
                  id: "c-c-3",
                  label: "Circuit C 3",
                  isSelected: false,
                },
              ],
            },
            {
              id: "c-b-1",
              label: "Circuit B-1",
              isSelected: false,
            },
            {
              id: "c-b-2",
              label: "Circuit B-2",
              isSelected: false,
            },
          ],
        },
      ],
    },
  },
};
