import * as React from "react";

export interface ESAvatarProps extends React.ComponentPropsWithoutRef<"img"> {
  /** The background color of the avatar if the image is unable to be shown. */
  backgroundColor?:
    | "primary"
    | "secondary"
    | "grape"
    | "lime"
    | "berry"
    | "orange";
  /** Size of the avatar, small to large being 24, 36, 48 pixels. */
  size?: "small" | "medium" | "large";
}
