import { ComponentPropsWithoutRef } from "react";

export interface ESLogoProps extends ComponentPropsWithoutRef<"img"> {
  /** Color theme for the logo. If set to color, use the multicolor variant. Defaults to color. */
  color: "color" | "black" | "white";
  /** Variants. Defaults to the fullname variant. If the variant is stamp*, then color has no effect. */
  variant?:
    | "fullname"
    | "shortname"
    | "orb"
    | "noOrb"
    | "stamp"
    | "stamp-alt"
    | "stamp-blue"
    | "stamp-blue-alt";
  /** Sizes. `xs` is 24px in height, `sm` is 48px, and every size after is another 48 pixels. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
