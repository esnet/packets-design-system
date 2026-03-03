/* eslint-disable no-unused-vars */
import { ComponentPropsWithRef } from "react";
import { PktsInputDatePickerTimeSettings } from "../PktsInputDatePicker/PktsInputDatePickerTime/PktsInputDatePickerTime.types";
import { PktsInputDatePickerDateSettings } from "../PktsInputDatePicker/PktsInputDatePickerDate/PktsInputDatePickerDate.types";

export interface PktsInputDateProps
  extends Omit<
    ComponentPropsWithRef<"input">,
    "value" | "onChange" | "defaultValue"
  > {
  variant?: "primary" | "branded";
  error?: boolean;
  type?: "date" | "time" | "datetime";

  /** Time settings. See type definition for description, or ESInputDatePicker Storybook page for information. */
  timeSettings?: PktsInputDatePickerTimeSettings;
  /** Date settings. See type definition for description, or ESInputDatePicker Storybook page for information. */
  dateSettings?: PktsInputDatePickerDateSettings;

  /** The value stored internally, stored as a Javascript Date object.
   * The value is then used to format the actual string value shown in the input box, which can be accessed with a normal ref or selectors, though you're more likely to find the Date object more useful. */
  value?: Date;
  /** Default value of type Date */
  defaultValue?: Date;
  /** Callback to when the start or end value of the value are changed */
  onChange?: (value: Date) => void;
}
