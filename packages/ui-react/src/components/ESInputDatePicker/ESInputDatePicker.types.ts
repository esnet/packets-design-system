import { ESInputDatePickerTimeSettings } from "./ESInputDatePickerTime/ESInputDatePickerTime.types";

interface ESInputDatePickerDateSettings {
  /** The lowest date able to be selected */
  min?: Date;
  /** The highest date able to be selected */
  max?: Date;
}

/* eslint-disable no-unused-vars */
export interface ESInputDatePickerProps {
  /** What to input. Datetime specifies both date and time. Daterange allows a selection of two dates, highlighting all those in between. */
  type?: "date" | "time" | "datetime" | "daterange";
  /** Value of the date (Javascript Date object), also serves as the first/earlier date when using dateRange mode. */
  value?: Date;
  /** Callback to when any part of the Date object is changed. */
  onChange?: (date: Date) => void;
  /** Value of the second later end date when using date range mode. */
  rangeEndValue?: Date;
  /** Callback to when the date range end value changes. When a date range is already selected, the user may select another first initial date, in which case the second date is set to undefined. In the event the second date is chosen to be earlier, the dates are swapped and both callbacks are called. */
  onChangeRangeEnd?: (date: Date | undefined) => void;

  /** Time settings. See type definition for description, or ESInputDatePicker Storybook page for information. */
  timeSettings?: ESInputDatePickerTimeSettings;
  /** Date settings. See type definition for description, or ESInputDatePicker Storybook page for information. */
  dateSettings?: ESInputDatePickerDateSettings;
}
