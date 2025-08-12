/* eslint-disable no-unused-vars */

export interface ESInputDatePickerDateSettings {
  min?: Date;
  max?: Date;
}

export interface ESInputDatePickerDateProps {
  value?: Date;
  settings?: ESInputDatePickerDateSettings;
  onChange?: (date: Date) => void;

  dateRange?: boolean;
  rangeEndValue?: Date;
  onChangeRangeEnd?: (date: Date | undefined) => void;
}
