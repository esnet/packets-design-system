import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import { ESInputDatePickerPromptProps } from "./ESInputDatePickerPrompt.types";
import ESInputDatePickerTime from "./ESInputDatePickerTime";
import ESInputDatePickerDate from "./ESInputDatePickerDate";
import { clsx } from "clsx";

const ESInputDatePickerPrompt: React.FC<ESInputDatePickerPromptProps> = ({
  type,
  value,
  onSelectDate,
  onSelectTime,
  variant,
}) => {
  const promptTypeComponent = React.useMemo(() => {
    switch (type) {
      case "time":
        return (
          <ESInputDatePickerTime value={value} onSelectTime={onSelectTime} />
        );
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate value={value} onSelectDate={onSelectDate} />
            <ESInputDatePickerTime value={value} onSelectTime={onSelectTime} />
          </>
        );
      case "date":
      default:
        return (
          <ESInputDatePickerDate value={value} onSelectDate={onSelectDate} />
        );
    }
  }, [type, value, onSelectDate, onSelectTime]);
  return (
    <div
      className={clsx(
        styles.ESInputDatePickerPrompt,
        variant && styles[variant]
      )}
    >
      {promptTypeComponent}
    </div>
  );
};

export default ESInputDatePickerPrompt;
