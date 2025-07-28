import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import { ESInputDatePickerPromptProps } from "./ESInputDatePickerPrompt.types";
import ESInputDatePickerTime from "./ESInputDatePickerTime";
import ESInputDatePickerDate from "./ESInputDatePickerDate";
import { clsx } from "clsx";

const ESInputDatePickerPrompt: React.FC<ESInputDatePickerPromptProps> = ({
  type,
  date,
  onClickDate,
  onSelectTime,
  variant,
}) => {
  const promptTypeComponent = React.useMemo(() => {
    switch (type) {
      case "time":
        return (
          <ESInputDatePickerTime time={date} onSelectTime={onSelectTime} />
        );
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate date={date} onClickDate={onClickDate} />
            <ESInputDatePickerTime time={date} onSelectTime={onSelectTime} />
          </>
        );
      case "date":
      default:
        return <ESInputDatePickerDate date={date} onClickDate={onClickDate} />;
    }
  }, [type]);
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
