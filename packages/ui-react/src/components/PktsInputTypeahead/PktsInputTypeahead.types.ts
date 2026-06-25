/* eslint-disable no-unused-vars */
import { ChangeEventHandler, ReactNode } from "react";

export interface PktsInputTypeaheadProps {
  variant?: "primary" | "branded";
  /** Whether to render error styling. */
  error?: boolean;
  /** Whether to make element inoperable and render disabled styling. */
  disabled?: boolean;
  /** Additional utility class names. */
  className?: string;
  /** Text to render inside input component for suggesting. */
  placeholder?: string;
  /** Whether or not the user can select multiple options. Defaults to true, for single select, you can set this to false, or use PktsInputSelect.
   * It's important to note that even when using multi as false, value and defaultValue are still expected to be arrays. */
  multi?: boolean;
  /** Form name, so it can be found and referenced in `FormData` if needed. */
  name?: string;
  /** Controllable array of selected values. */
  value?: string[];
  /** Default array of selected option values. */
  defaultValue?: string[];
  /** Callback for when the selected values change. Mimics a synthesized HTML select change event. */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** Callback for when the search value changes. Good for dynamically loading more options based on search value. */
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
  /** Whether to render a loading state. Defaults to false. */
  loading?: boolean;
  /** List of `PktsInputOption` options to show. Any children that are not of `PktsInputOption` are filtered out. */
  children?: ReactNode;
}
