import * as React from "react";

type PktsButtonVariantType =
  | "default"
  | "branded"
  | "gradient"
  | "destructive"
  | "success"
  | "minimal"
  | "accent"
  | "borderless";

type PktsButtonCustomProps = {
  /** Variant that affects color styling. */
  variant?: PktsButtonVariantType;
  /** Text label for the button. When set, takes precedence over children. */
  label?: string;
  /** Element to render before the button label. Typically an icon or avatar. */
  append?: React.ReactNode;
  /** Element to render after the button label. Typically an icon or avatar. */
  prepend?: React.ReactNode;
  /** Button label content. */
  children?: React.ReactNode;
};

type AsButtonProps = {
  /** Render as a native button element (default). */
  as?: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AsAnchorProps = {
  /** Render as an anchor element, styled as a button. */
  as: "a";
} & React.ComponentPropsWithoutRef<"a">;

export type PktsButtonProps = PktsButtonCustomProps &
  (AsButtonProps | AsAnchorProps);
