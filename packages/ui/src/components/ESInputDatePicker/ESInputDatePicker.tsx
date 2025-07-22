import * as React from "react";
import clsx from "clsx";
import styles from "./ESInputDatePicker.module.css";
import { ESInputDatePickerProps } from "./ESInputDatePicker.types";
import ESInputText from "../ESInputText";
import { Calendar } from "lucide-react";
import ESInputDatePickerPrompt from "./ESInputDatePickerPrompt/ESInputDatePickerPrompt";
import useOutsideClick from "../../lib/hooks/useOutsideClick";

// TODO: MOVE TO UTILS
// date is shown as MM/DD/YYYY in the input, and must be able to converted to and from a JS Date object
function formatDate(date: Date): string {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  return `${mm < 10 ? "0" + mm : mm}/${dd < 10 ? "0" + dd : dd}/${yyyy}`;
}

function parseDate(str: string): Date {
  const [mm, dd, yyyy] = str.split("/").map(Number);
  return new Date(yyyy, mm - 1, dd);
}

/**
 * ESInputDatePicker Component
 *
 * major:
 * Should include a cross browser compatible consistent UI, thus no native date picker UI.
 * Should support the slashes between values, e.g MM/DD/YYYY
 *
 * minor:
 * Should support different region formats, e.g. MM/DD/YYYY vs DD/MM/YYYY.
 * Should support min and max
 * Should support some sort of validation?
 *
 * @param {ESInputDatePickerProps} props
 * @returns {React.ReactElement}
 */
const ESInputDatePicker: React.FC<ESInputDatePickerProps> = ({
  className,
  variant = "branded",
  error,
}) => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  // most importantly manages whether or not the calendar prompt is active or not
  const [focus, setFocus] = React.useState(true);

  const onFocus = React.useCallback(() => setFocus(true), []);
  const containerRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => setFocus(false));

  const onClickDate = React.useCallback((date: Date) => {
    setValue(formatDate(date));
    setFocus(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        styles.ESInputDatePicker,
        focus && styles.focus,
        variant && styles[variant],
        // error && styles.error,
        className
      )}
    >
      <ESInputText
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus}
        actionButtons={<Calendar onClick={() => setFocus(!focus)} />}
        variant={variant}
        error={error}
      />
      {focus && (
        <ESInputDatePickerPrompt
          date={value ? parseDate(value) : undefined}
          onClickDate={onClickDate}
          variant={variant}
        />
      )}
    </div>
  );
};

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
