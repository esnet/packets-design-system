import { ESInputDatePickerTimeSettings } from "./ESInputDatePickerTime/ESInputDatePickerTime.types";

interface ESInputDatePickerDateSettings {
  min?: Date;
  max?: Date;
}

/* eslint-disable no-unused-vars */
export interface ESInputDatePickerProps {
  type?: "date" | "time" | "datetime" | "daterange";
  /** Value of the date (Javascript Date object), also serves as the first/earlier date when using dateRange mode.  */
  value?: Date;
  /** Callback to when any part of the Date object is changed.  */
  onChange?: (date: Date) => void;
  /** Whether to use date range mode, which allows the selection of a first/earlier date and a second/later date, visually highlighting dates in between. Does not when trying specific times. */
  dateRange?: boolean;
  /** Value of the second later end date when using date range mode. */
  rangeEndValue?: Date;
  /** Callback to when the date range end value changes. When a date range is already selected, the user may select another first initial date, in which case the second date is set to undefined. In the event the second date is chosen to be earlier, the dates are swapped and both callbacks are called. */
  onChangeRangeEnd?: (date: Date | undefined) => void;

  timeSettings?: ESInputDatePickerTimeSettings;
  dateSettings?: ESInputDatePickerDateSettings;
}
