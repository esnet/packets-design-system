import * as React from "react";

type PktsIconButtonVariantType = "primary" | "secondary" | "branded" | "tertiary" | "destructive";

type PktsIconButtonCustomProps = {
  /** Variant that affects color styling. */
  variant?: PktsIconButtonVariantType;
  /** When true, removes horizontal padding and constrains width to match height. */
  square?: boolean;
  /** Button content. Should be a single lucide-react icon. */
  children: React.ReactNode;
};

type AsButtonProps = {
  /** Render as a native button element (default). */
  as?: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AsAnchorProps = {
  /** Render as an anchor element, styled as a button. */
  as: "a";
} & React.ComponentPropsWithoutRef<"a">;

export type PktsIconButtonProps = PktsIconButtonCustomProps & (AsButtonProps | AsAnchorProps);
