import { ComponentPropsWithoutRef } from "react";
import * as React from "react";

export interface ESInputRowProps extends ComponentPropsWithoutRef<"label"> {
  /** Text label shown above the input. */
  label: string;
  /** The `ESInput*` element. Recommended to not put anything else, except the input element. */
  children: React.ReactNode;
  /** If truthy, render a error caption underneath the input.
   * If a string is provided, render that string as the caption.
   * If both error and success are provided, error takes precedence. */
  error?: boolean | string;
  /** If truthy, render a success caption underneath the input.
   * If a string is provided, render that string as the caption. */
  success?: boolean | string;
  /** Whether to disable this input. Be sure to pass it to the input child as well. */
  disabled?: boolean;
  /** Whether to add a red asterisk to the end of the label, visually indicating this is a required input. */
  required?: boolean;
  /** When provided, a question mark icon will appear to the right of the label, and when hovering, this tooltip text will be shown. */
  tooltip?: string;
}
