import * as React from "react";
import styles from "./ESInputDatePicker.module.css";
import { ESInputDatePickerProps } from "./ESInputDatePicker.types";
import ESInputDatePickerDate from "./ESInputDatePickerDate/ESInputDatePickerDate";
import ESInputDatePickerTime from "./ESInputDatePickerTime/ESInputDatePickerTime";

const ESInputDatePicker: React.FC<ESInputDatePickerProps> = ({
  type,
  value,
  onChange,
}) => {
  const inputTypeMenus = React.useMemo(() => {
    switch (type) {
      case "time":
        return <ESInputDatePickerTime value={value} onChange={onChange} />;
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate value={value} onChange={onChange} />
            <ESInputDatePickerTime value={value} onChange={onChange} />
          </>
        );
      case "date":
      default:
        return <ESInputDatePickerDate value={value} onChange={onChange} />;
    }
  }, [type, value, onChange]);

  return <div className={styles.ESInputDatePicker}>{inputTypeMenus}</div>;
};

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
