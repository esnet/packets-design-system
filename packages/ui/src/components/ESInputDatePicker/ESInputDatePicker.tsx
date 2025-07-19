import * as React from "react";
import clsx from "clsx";
import styles from "./ESInputDatePicker.module.css";
import { ESInputDatePickerProps } from "./ESInputDatePicker.types";
import ESInputText from "../ESInputText";
import { Calendar } from "lucide-react";
import ESInputDatePickerPrompt from "./ESInputDatePickerPrompt/ESInputDatePickerPrompt";

/**
 * ESInputDatePicker Component
 *
 * major:
 * Should include a cross browser compatible consistent UI, thus no native date picker UI.
 * Should support the slashes between values, e.g MM/DD/YYYY
 *
 * minor:
 * Should support different region formats, e.g. MM/DD/YYYY vs DD/MM/YYYY.
 *
 * @param {ESInputDatePickerProps} props
 * @returns {React.ReactElement}
 */
const ESInputDatePicker: React.FC<ESInputDatePickerProps> = ({ className }) => {
  // most importantly manages whether or not the calendar prompt is active or not
  const [focus, setFocus] = React.useState(true);
  const onFocus = React.useCallback(() => setFocus(true), []);
  const onBlur = React.useCallback(() => setFocus(false), []);

  return (
    <div
      className={clsx(
        styles.ESInputDatePicker,
        focus && styles.focus,
        className
      )}
    >
      {/* <input
        type="text"
        className={clsx(styles.ESInputDatePickerInput)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      /> */}
      <ESInputText
        onFocus={onFocus}
        // onBlur={onBlur}
        actionButtons={<Calendar onClick={() => setFocus(!focus)} />}
      />
      {focus && <ESInputDatePickerPrompt />}asdasd
    </div>
  );
};

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
