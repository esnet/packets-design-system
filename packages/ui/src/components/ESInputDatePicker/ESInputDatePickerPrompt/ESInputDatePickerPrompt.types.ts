export interface ESInputDatePickerPromptProps {
  variant?: "branded" | "primary";
  type?: "date" | "time" | "datetime";

  date?: Date;
  /** Callback to when a date is selected from the prompt. */
  onClickDate?: (date: Date) => void;
  onSelectTime?: (time: Date) => void;
}

export interface ESInputDatePickerDateProps {
  date?: Date;
  /** Callback to when a date is selected from the prompt. */
  onClickDate?: (date: Date) => void;
}

export enum TimePrecision {
  Hour = 0,
  Minute,
  Second,
}

export interface ESInputDatePickerTimeProps {
  time?: Date;
  precision?: TimePrecision;
  /* Steps for each precision level */
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  /** Callback to when a time is selected from the prompt. Could also be called onSelectTime */
  onSelectTime?: (time: Date) => void;
}

export interface ESInputDatePickerTimeWheelProps {
  label: string;
  values: string[];
  defaultValue?: string;
  /** Callback to when a time is selected from the prompt. Could also be called onSelectTime */
  onSelectTime: (value: string) => void;
}
