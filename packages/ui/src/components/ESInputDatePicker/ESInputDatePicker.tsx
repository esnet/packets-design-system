import * as React from "react";
import styles from "./ESInputDatePicker.module.css";
import { ESInputDatePickerProps } from "./ESInputDatePicker.types";
import ESInputDatePickerDate from "./ESInputDatePickerDate/ESInputDatePickerDate";
import ESInputDatePickerTime from "./ESInputDatePickerTime/ESInputDatePickerTime";

/**
 * ESInputDatePicker Component
 *
 * Allows for date, time, and datetime selections.
 *
 * TODO: Implement range selection
 */
const ESInputDatePicker: React.FC<ESInputDatePickerProps> = ({
  type,
  value,
  onChange,
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
  }, [type, value, onChange]);

  return <div className={styles.ESInputDatePicker}>{inputTypeMenus}</div>;
};

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
