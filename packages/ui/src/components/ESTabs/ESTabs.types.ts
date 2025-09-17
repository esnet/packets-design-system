import React, { ComponentPropsWithoutRef } from "react";

export interface ESTabProps extends ComponentPropsWithoutRef<"div"> {
  /** Label of the tab. */
  children: React.ReactNode;
  /** Whether the tab is active or not. */
  active?: boolean;
  /** Optional callback handler when a tab is clicked. Useful to set a tab index state and conditionally render tab panels. */
  onTabSelect?: () => void;
}

export interface ESTabsProps extends ComponentPropsWithoutRef<"nav"> {
  /** `ESTab`s to be rendered. Any elements that are not `ESTab` elements will be filtered out. */
  children: React.ReactNode;
  /** Whether to include a border around the tabs list. Defaults to true. */
  border?: boolean;
  /** Whether to use branded color styling. Defaults to false. */
  branded?: boolean;
  /** Whether to set width to be 100% or to simply fit the content. */
  fullWidth?: boolean;
}
