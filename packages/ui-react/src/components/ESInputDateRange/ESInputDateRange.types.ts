/* eslint-disable no-unused-vars */
import { ComponentPropsWithRef } from "react";
import { ESInputDatePickerDateSettings } from "../ESInputDatePicker/ESInputDatePickerDate/ESInputDatePickerDate.types";

export type DateRange = {
  start?: Date;
  end?: Date;
};

export interface ESInputDateRangeProps
  extends Omit<
    ComponentPropsWithRef<"input">,
    "value" | "onChange" | "defaultValue"
  > {
  variant?: "primary" | "branded";
  error?: boolean;

  /** Date settings. See type definition for description, or ESInputDatePicker Storybook page for information. */
  dateSettings?: ESInputDatePickerDateSettings;

  /** The internal value is stored as an object of type DateRange (with a start and end property of type Date).
   * These values are then used to format the actual string value shown in the input box. The string can be accessed with a normal ref or selectors,
   * though you're more likely to find the Date objects more useful. */
  value?: DateRange;
  /** Default value of type DateRange. */
  defaultValue?: DateRange;
  /** Callback to when the start or end value of the value are changed. */
  onChange?: (value: DateRange) => void;
}
