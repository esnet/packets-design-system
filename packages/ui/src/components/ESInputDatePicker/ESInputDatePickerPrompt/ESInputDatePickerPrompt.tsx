import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import { ESInputDatePickerPromptProps } from "./ESInputDatePickerPrompt.types";
import ESInputDatePickerTime from "./ESInputDatePickerTime";
import ESInputDatePickerDate from "./ESInputDatePickerDate";
import { clsx } from "clsx";

const ESInputDatePickerPrompt: React.FC<ESInputDatePickerPromptProps> = ({
  variant,
  type,
}) => {
  const promptTypeComponent = React.useMemo(() => {
    switch (type) {
      case "time":
        return <ESInputDatePickerTime />;
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate />
            <ESInputDatePickerTime />
          </>
        );
      case "date":
      default:
        return <ESInputDatePickerDate />;
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
