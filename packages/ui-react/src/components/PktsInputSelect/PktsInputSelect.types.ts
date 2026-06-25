/* eslint-disable no-unused-vars */
import { ChangeEventHandler, ReactNode } from "react";

export interface PktsInputSelectProps {
  variant?: "primary" | "branded";
  /** Whether to render error styling. */
  error?: boolean;
  /** Whether to make element inoperable and render disabled styling. */
  disabled?: boolean;
  /** Additional utility class names. */
  className?: string;
  /** Text to render inside input component for suggesting. Defaults to "Select an option". */
  placeholder?: string;
  /** Form name, so it can be found and referenced in `FormData` if needed. */
  name?: string;
  /** Controllable currently selected value. */
  value?: string;
  /** Default selected value. */
  defaultValue?: string;
  /** Callback for when the selected value changes. Mimics a synthesized HTML select change event. */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** List of `ESInputOption` options to show. Any children that are not of `ESInputOption` are filtered out. */
  children?: ReactNode;
}
