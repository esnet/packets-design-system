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
  variant,
}) => {
  const promptTypeComponent = React.useMemo(() => {
    switch (type) {
      case "time":
        return <ESInputDatePickerTime />;
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate date={date} onClickDate={onClickDate} />
            <ESInputDatePickerTime />
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
