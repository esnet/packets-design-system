import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import { ESInputDatePickerPromptProps } from "./ESInputDatePickerPrompt.types";
import ESInputDatePickerTime from "./ESInputDatePickerTime";
import ESInputDatePickerDate from "./ESInputDatePickerDate";

const ESInputDatePickerPrompt: React.FC<ESInputDatePickerPromptProps> = ({
  type,
  date,
  onClickDate,
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
    <div className={styles.ESInputDatePickerPrompt}>{promptTypeComponent}</div>
  );
};

export default ESInputDatePickerPrompt;
