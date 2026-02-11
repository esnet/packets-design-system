import * as React from "react";

export interface PktsAvatarProps extends React.ComponentPropsWithoutRef<"img"> {
  /** The background color of the avatar if the image is unable to be shown. */
  backgroundColor?: "grape" | "lime" | "berry" | "orange";
  size?: "small" | "medium" | "large";
  /** Whether to give the component a visual response (shadow) when hovered on. */
  hoverable?: boolean;
}
