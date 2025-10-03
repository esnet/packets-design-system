/* eslint-disable no-unused-vars */
import { ComponentPropsWithoutRef, ComponentPropsWithRef, Ref } from "react";

export interface ESDropdownProps extends ComponentPropsWithoutRef<"div"> {
  /** Whether to force an open state. */
  open?: boolean;
  /** Whether to include a carat for the dropdown menu. */
  carat?: boolean;
  onOpenChange?: (next: boolean) => void;
}

export type ESDropdownAnchorProps = ComponentPropsWithoutRef<"div"> & {
  sizeRef?: Ref<HTMLDivElement>;
};
export type ESDropdownContentProps = ComponentPropsWithoutRef<"div"> & {
  sizeRef?: Ref<HTMLDivElement>;
};
