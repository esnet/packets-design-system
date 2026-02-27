/* eslint-disable no-unused-vars */
export type TimePrecision = "hour" | "minute" | "second";
export type Meridiem = "AM" | "PM";

export type Range = { min?: number; max?: number; step?: number };

export interface PktsInputDatePickerTimeSettings {
  /** Format of the time, either 12-hour or 24-hour. When 12-hour is specified, a meridiem input wheel is shown. */
  format?: "12-hour" | "24-hour";
  /** Whether to include hour selection, defaulting to true. If true, it will be included, with default range values. If an object of type `Range` is provided, it will utilize the specified start, stop, and step. */
  hour?: boolean | Range;
  /** Whether to include minute selection, defaulting to true. If true, it will be included, with default range values. If an object of type `Range` is provided, it will utilize the specified start, stop, and step. */
  minute?: boolean | Range;
  /** Whether to include second selection, defaulting to true. If true, it will be included, with default range values. If an object of type `Range` is provided, it will utilize the specified start, stop, and step. */
  second?: boolean | Range;
}

export interface PktsInputDatePickerTimeProps {
  value?: Date;
  precision?: TimePrecision;
  settings?: PktsInputDatePickerTimeSettings;
  onChange?: (time: Date) => void;
}

export interface PktsInputDatePickerTimeWheelProps {
  label: string;
  value?: string;
  values: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
}
