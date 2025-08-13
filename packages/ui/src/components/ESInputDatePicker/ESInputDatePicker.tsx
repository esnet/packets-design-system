import * as React from "react";
import styles from "./ESInputDatePicker.module.css";
import { ESInputDatePickerProps } from "./ESInputDatePicker.types";
import ESInputDatePickerDate from "./ESInputDatePickerDate/ESInputDatePickerDate";
import ESInputDatePickerTime from "./ESInputDatePickerTime/ESInputDatePickerTime";

/**
 * ESInputDatePicker Component
 *
 * Allows for date, time, and datetime selections. It's not encouraged to use this component directly unless absolutely necessary.
 *
 * Instead, use ESInputDate, or ESInputDateRange for selecting a date range, which wrap this component and provide an input box.
 *
 */
const ESInputDatePicker: React.FC<ESInputDatePickerProps> = ({
  type = "daterange",
  value,
  onChange,
  rangeEndValue,
  onChangeRangeEnd,
  timeSettings,
  dateSettings,
}) => {
  const inputTypeMenus = React.useMemo(() => {
    switch (type) {
      case "time":
        return (
          <ESInputDatePickerTime
            settings={timeSettings}
            value={value}
            onChange={onChange}
          />
        );
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate
              settings={dateSettings}
              value={value}
              onChange={onChange}
            />
            <ESInputDatePickerTime
              settings={timeSettings}
              value={value}
              onChange={onChange}
            />
          </>
        );
      case "daterange":
        return (
          <ESInputDatePickerDate
            settings={dateSettings}
            value={value}
            onChange={onChange}
            dateRange
            rangeEndValue={rangeEndValue}
            onChangeRangeEnd={onChangeRangeEnd}
          />
        );
      case "date":
      default:
        return (
          <ESInputDatePickerDate
            settings={dateSettings}
            value={value}
            onChange={onChange}
          />
        );
    }
  }, [type, value, onChange, rangeEndValue, onChangeRangeEnd]);

  return <div className={styles.ESInputDatePicker}>{inputTypeMenus}</div>;
};

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
