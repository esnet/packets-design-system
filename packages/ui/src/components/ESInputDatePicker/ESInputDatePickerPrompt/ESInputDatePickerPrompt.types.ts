/* eslint-disable no-unused-vars */
export interface ESInputDatePickerPromptProps {
  variant?: "branded" | "primary";
  type?: "date" | "time" | "datetime";

  value?: Date;
  /** Callback to when a date is selected from the date input portion of the component. */
  onSelectDate?: (date: Date) => void;
  /** Callback to when a time is selected from the time input portion of the component. */
  onSelectTime?: (time: Date) => void;
}

export interface ESInputDatePickerDateProps {
  value?: Date;
  /** Callback to when a date is selected from the prompt. */
  onSelectDate?: (date: Date) => void;
}

export enum TimePrecision {
  Hour = 0,
  Minute,
  Second,
}

export interface ESInputDatePickerTimeProps {
  value?: Date;
  precision?: TimePrecision;
  /* Steps for each precision level */
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  /** Callback to when a time is selected from the prompt. */
  onSelectTime?: (time: Date) => void;
}

export interface ESInputDatePickerTimeWheelProps {
  label: string;
  value?: string;
  values: string[];
  defaultValue?: string;
  /** Callback to when a value (a part of the time) is selected from the prompt. */
  onSelectValue: (value: string) => void;
}
