/* eslint-disable no-unused-vars */
import { ComponentPropsWithoutRef } from "react";

export interface ESDropdownProps extends ComponentPropsWithoutRef<"div"> {
  open?: boolean;
  onOpenChange?: (next: boolean) => void;
}

export type ESDropdownTriggerProps = ComponentPropsWithoutRef<"div">;
export type ESDropdownContentProps = ComponentPropsWithoutRef<"div">;
