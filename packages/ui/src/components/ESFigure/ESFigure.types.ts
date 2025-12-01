import React, { ComponentPropsWithoutRef } from "react";

export interface ESFigureProps
  extends Omit<ComponentPropsWithoutRef<"figure">, "children"> {
  /** The figure. Suggested to be a data table or an image, but can be any React node. */
  figure: React.ReactNode;
  /** Text for the caption. */
  caption: React.ReactNode;
  /** The text alignment of the caption underneath the figure. */
  textAlign?: "left" | "center" | "right";
  /** Whether to render the caption in all caps. */
  capitalize?: boolean;
  /** Whether to render the caption in italics. */
  italic?: boolean;
}
