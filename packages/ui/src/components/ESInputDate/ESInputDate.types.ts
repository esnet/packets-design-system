import { ComponentPropsWithRef } from "react";
import { ESInputDatePickerTimeSettings } from "../ESInputDatePicker/ESInputDatePickerTime/ESInputDatePickerTime.types";
import { ESInputDatePickerDateSettings } from "../ESInputDatePicker/ESInputDatePickerDate/ESInputDatePickerDate.types";

export interface ESInputDateProps
  extends Omit<
    ComponentPropsWithRef<"input">,
    "value" | "onChange" | "defaultValue"
  > {
  variant?: "primary" | "branded";
  error?: boolean;
  type?: "date" | "time" | "datetime";

  /** Time settings */
  timeSettings?: ESInputDatePickerTimeSettings;
  /** Date settings */
  dateSettings?: ESInputDatePickerDateSettings;

  /** The value stored internally, stored as a Javascript Date object.
   * The value is then used to format the actual string value shown in the input box, which can be accessed with a normal ref or selectors, though you're more likely to find the Date object more useful. */
  value?: Date;
  /** Default value of type Date */
  defaultValue?: Date;
  /** Callback to when the start or end value of the value are changed */
  onChange?: (value: Date) => void;
}
