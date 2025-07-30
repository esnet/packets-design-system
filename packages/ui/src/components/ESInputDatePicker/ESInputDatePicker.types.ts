import { ESInputDatePickerTimeSettings } from "./ESInputDatePickerTime/ESInputDatePickerTime.types";

interface ESInputDatePickerDateSettings {
  min?: Date;
  max?: Date;
}

/* eslint-disable no-unused-vars */
export interface ESInputDatePickerProps {
  type?: "date" | "time" | "datetime";
  value?: Date;
  /** Callback to when any part of the Date object is changed.  */
  onChange?: (date: Date) => void;

  timeSettings?: ESInputDatePickerTimeSettings;
  dateSettings?: ESInputDatePickerDateSettings;
}
