/* eslint-disable no-unused-vars */

export interface PktsInputDatePickerDateSettings {
  min?: Date;
  max?: Date;
}

export interface PktsInputDatePickerDateProps {
  value?: Date;
  settings?: PktsInputDatePickerDateSettings;
  onChange?: (date: Date) => void;

  /** Whether to use date range mode, which allows the selection of a first/earlier date and a second/later date, visually highlighting dates in between. Does not when trying specific times. */
  isDateRange?: boolean;
  rangeEndValue?: Date;
  onChangeRangeEnd?: (date: Date | undefined) => void;
}
