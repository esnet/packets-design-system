import { ChangeEvent, FocusEvent } from "react";

/* eslint-disable no-unused-vars */
export interface ESInputSwitchProps {
  label?: string;
  ariaLabel?: string;
  className?: string;
  id: string;
  initiallyChecked?: boolean;
  isDisabled?: boolean;
  hideIcons?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}
