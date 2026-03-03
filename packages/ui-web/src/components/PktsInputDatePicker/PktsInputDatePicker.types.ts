export type TimePrecision = "hour" | "minute" | "second";
export type Meridiem = "AM" | "PM";

export interface Range {
  min?: number;
  max?: number;
  step?: number;
}

export interface PktsInputDatePickerTimeSettings {
  /** Format of the time, either 12-hour or 24-hour */
  format?: "12-hour" | "24-hour";
  /** Hour selection settings */
  hour?: boolean | Range;
  /** Minute selection settings */
  minute?: boolean | Range;
  /** Second selection settings */
  second?: boolean | Range;
}

export interface PktsInputDatePickerDateSettings {
  /** The lowest date able to be selected */
  min?: Date;
  /** The highest date able to be selected */
  max?: Date;
}

export interface PktsInputDatePickerProps {
  /** What to input. Datetime specifies both date and time. Daterange allows a selection of two dates */
  type?: "date" | "time" | "datetime" | "daterange";
  /** Value of the date */
  value?: Date;
  /** Value of the second end date when using date range mode */
  rangeEndValue?: Date;
  /** Time settings */
  timeSettings?: PktsInputDatePickerTimeSettings;
  /** Date settings */
  dateSettings?: PktsInputDatePickerDateSettings;
}
