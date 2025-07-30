/* eslint-disable no-unused-vars */
export type TimePrecision = "hour" | "minute" | "second";
export type Meridiem = "AM" | "PM";

export type Range = { min?: number; max?: number; step?: number };

export interface ESInputDatePickerTimeSettings {
  format?: "12-hour" | "24-hour";
  hour?: boolean | Range;
  minute?: boolean | Range;
  second?: boolean | Range;
}

export interface ESInputDatePickerTimeProps {
  value?: Date;
  precision?: TimePrecision;
  settings?: ESInputDatePickerTimeSettings;
  onChange?: (time: Date) => void;
}

export interface ESInputDatePickerTimeWheelProps {
  label: string;
  value?: string;
  values: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
}
