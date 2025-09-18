/* eslint-disable no-unused-vars */
import { ReactNode, MouseEventHandler, ComponentPropsWithRef } from "react";
import { ESChipProps } from "../ESChip/ESChip.types";

export interface ESInputTypeaheadProps
  extends Omit<
    ComponentPropsWithRef<"input">,
    "value" | "defaultValue" | "onChange"
  > {
  variant?: "primary" | "branded";
  /** Whether to render error styling */
  error?: boolean;
  /** Array of options for the typeahead of type `OptionType`,
   * which have a required `id` string to show selected and `value` to render in dropdown,
   * as well as optional `id` string, and `unselectedIcon` and `selectedIcon` slot for customization of icon. */
  options: OptionType[];

  /** Controllable array of selected Ids, which should be keys of options. */
  selectedIdsValue?: OptionId[];
  /** Default array of selected options. */
  defaultSelectedIdsValue?: OptionId[];
  /** Callback to whenever the selected options change, which is whenever the user checks/unchecks an option. */
  onSelectedOptionsChange?: (selectedOptions?: OptionId[]) => void;

  /** Controllable search value, the value used to search through the given options array. */
  searchValue?: string;
  /** Default search value. */
  defaultSearchValue?: string;
  /** Callback to whenever the search value option changes. */
  onSearchChange?: (search?: string) => void;
}

export type OptionId = string;

/**
 * List of objects that are passed to the typeahead
 */
export type OptionType = {
  /** Required ID used to search/filter option results in the typeahead. */
  id: OptionId;
  /** Required value to render as text on the option in the dropdown. */
  value: string;
  /** Lucide icon component to be rendered for unselected state, prepended to text. Defaults to 'square' icon. */
  unselectedIcon?: ReactNode;
  /** Lucide icon component to be rendered for selected state, prepended to text. Defaults to 'check' icon. */
  selectedIcon?: ReactNode;
  /** When selected, the option is shown as a chip at the top of the box. You can pass props to the chip via this prop. */
  chipProps?: ESChipProps;
};

/**
 * Prop interface for the typeahead option component.
 * Only used within input typeahead, should not be exposed or used outside
 * */
export interface DropdownOptionProps {
  selected?: boolean;
  token: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  optionData: OptionType;
}
