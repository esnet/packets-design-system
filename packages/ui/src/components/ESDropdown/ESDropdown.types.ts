import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ESDropdownProps extends ComponentPropsWithoutRef<"div"> {
  /** Whether to include a carat for the dropdown menu pointing towards the anchor. */
  carat?: boolean;
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
