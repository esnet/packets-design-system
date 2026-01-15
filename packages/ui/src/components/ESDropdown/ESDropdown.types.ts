import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ESDropdownProps extends ComponentPropsWithoutRef<"div"> {
  /** Children to render as the anchor/dropdown trigger. */
  anchor: ReactNode;
  /** Whether to include a caret for the dropdown menu pointing towards the anchor. */
  caret?: boolean;
  /** Dropdown mode (whether to show contents on hover, active, or both) */
  mode?: "hover" | "active" | "both";
  /** Children to render as the content of the dropdown. */
  children: ReactNode;
}
