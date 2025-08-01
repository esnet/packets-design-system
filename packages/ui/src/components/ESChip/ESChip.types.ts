import * as React from "react";

export interface ESChipProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  variant?: "primary" | "outline";
  /** For prepending icons or avatars, ideally using `ESIcon` or `ESAvatar`. */
  prepend?: React.ReactNode;
  /** For appending icons or avatars, ideally using `ESIcon` or `ESAvatar`. */
  append?: React.ReactNode;
  /** Appends an X icon to the label of the chip, and then supersedes onClick as the click handler for the chip as a whole. */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  /** Whether to be fully rounded or rectangular (but with partially rounded corners). Defaults to true. */
  rounded?: boolean;
  children?: React.ReactNode;
}
