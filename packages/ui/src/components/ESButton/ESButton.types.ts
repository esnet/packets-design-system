import * as React from "react";

type ESButtonVariantType =
  | "primary"
  | "secondary"
  | "branded"
  | "tertiary"
  | "destructive";

type ESButtonCustomProps = {
  /** Variants that affect styling, such as primary, secondary, tertiary, branded, and destructive. */
  variant?: ESButtonVariantType;
  /** Appendable ESIcon, ESAvatar, or other React element */
  append?: React.ReactNode;
  /** Prependable ESIcon, ESAvatar, or other React element */
  prepend?: React.ReactNode;

  children: React.ReactNode;
};

type AsButtonProps = {
  /** ESButton as a button tag (default) */
  as?: "button";
} & React.ComponentPropsWithRef<"button">;

type AsAnchorProps = {
  /** ESButton as an anchor tag */
  as: "a";
} & React.ComponentPropsWithRef<"a">;

// this discriminated union will be messy for Storybook autodocs, need to custom set it
export type ESButtonProps = ESButtonCustomProps &
  (AsButtonProps | AsAnchorProps);
