/* eslint-disable no-unused-vars */
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
  onChange?: (time: Date) => void;
}

export interface ESInputDatePickerTimeWheelProps {
  label: string;
  value?: string;
  values: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
}
