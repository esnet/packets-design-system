/* eslint-disable no-unused-vars */
import { ComponentPropsWithoutRef } from "react";

export interface ESInputSelectProps
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "value" | "defaultValue" | "onChange"
  > {
  /** Whether to display error styling. */
  error?: boolean;
  /** Primary or branded variant. */
  variant?: "primary" | "branded";
  /** String array of options to be shown.*/
  options: string[];
  /** Current set value. */
  value?: string;
  /** The starting string value to be shown, does not have to be a member of the options. */
  defaultValue?: string;
  /** Callback to handle when a new option is selected. */
  onChange?: (next: string) => void;
}
