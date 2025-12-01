import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ESDropdownProps extends ComponentPropsWithoutRef<"div"> {
  /** Whether to include a caret for the dropdown menu pointing towards the anchor. */
  caret?: boolean;
  /** Dropdown mode (whether to show contents on hover, active, or both) */
  mode?: "hover" | "active" | "both";
}

export type ESDropdownAnchorProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> & {
  children: ReactNode;
};
export type ESDropdownContentProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> & {
  children: ReactNode;
};
