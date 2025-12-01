import dynamicIconImports from "lucide-react/dynamicIconImports";
import * as React from "react";

type ESButtonVariantType =
  | "primary"
  | "secondary"
  | "branded"
  | "tertiary"
  | "destructive";

type ESIconButtonCustomProps = {
  /** Variants that affect styling, such as primary, secondary, tertiary, branded, and destructive. */
  variant?: ESButtonVariantType;
  /** Appendable ESIcon, ESAvatar, or other React element */
  append?: React.ReactNode;
  /** Prependable ESIcon, ESAvatar, or other React element */
  prepend?: React.ReactNode;
  /** Name of icon, from lucide-react. */
  name: keyof typeof dynamicIconImports;
  /** Whether or not to use a square-like aspect ratio */
  square?: boolean;
};

type AsButtonProps = {
  /** ESButton as a button tag (default) */
  as?: "button";
} & Omit<React.ComponentPropsWithRef<"button">, "children">;

type AsAnchorProps = {
  /** ESButton as an anchor tag */
  as: "a";
} & Omit<React.ComponentPropsWithRef<"a">, "children">;

// this discriminated union will be messy for Storybook autodocs, need to custom set it
export type ESIconButtonProps = ESIconButtonCustomProps &
  (AsButtonProps | AsAnchorProps);
