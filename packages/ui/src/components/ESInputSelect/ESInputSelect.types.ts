/* eslint-disable no-unused-vars */
import { ChangeEventHandler, ReactNode } from "react";

export interface ESInputSelectProps {
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
  /** Controllable array of selected values. */
  value?: string;
  /** Default array of selected option values. */
  defaultValue?: string;
  /** Callback for when the selected values change. Mimics a synthesized HTML select change event. */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** Whether to render a loading state. Defaults to false. */
  loading?: boolean;
  /** List of `ESInputOption` options to show. Any children that are not of `ESInputOption` are filtered out. */
  children?: ReactNode;
}
