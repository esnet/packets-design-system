import {
  ReactNode,
  ComponentPropsWithRef,
  MouseEventHandler,
  RefObject,
} from "react";

export interface ESInputTypeaheadProps extends ComponentPropsWithRef<"input"> {
  variant?: "default" | "branded";
  error?: boolean;
  options?: ESInputTypeaheadOptionType[];
  defaultOptions?: ESInputTypeaheadOptionType[];
  selectedOptionsRef?: RefObject<ESInputTypeaheadOptionType[]>;
  onSelectedOptionsChange?: (
    selectedOptions: ESInputTypeaheadOptionType[]
  ) => void;
}

// The actual properties for a typeahead option
export type ESInputTypeaheadOptionType = {
  id: string;
  value: ReactNode;
};

// The prop interface for the typeahead option component
export interface ESInputTypeaheadOptionProps {
  selected?: boolean;
  token: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  optionData: ESInputTypeaheadOptionType;
}
