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
// formatDate converts Date into a MM/DD/YYYY format
function formatDate(date: Date): string {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  return `${mm < 10 ? "0" + mm : mm}/${dd < 10 ? "0" + dd : dd}/${yyyy}`;
}

// formatTime converts Date into a HH:MM:SS MR (AM/PM) format
function formatTime(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${meridiem}`;
}

/**
 * ESInputDatePicker Component
 *
 * major:
 * Should include a cross browser compatible consistent UI, thus no native date picker UI.
 * Should have a specific, consistent, and keyboard activatable prompt activate (not just onClick)
 *
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
  type = "datetime",
  className,
  variant = "primary",
  error,
}) => {
  const [value, setValue] = React.useState<Date | undefined>(undefined);
  // most importantly manages whether or not the calendar prompt is active or not
  const [focus, setFocus] = React.useState(true);

  const onFocus = React.useCallback(() => setFocus(true), []);
  const containerRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => setFocus(false));

  const onSelect = React.useCallback((date: Date) => {
    console.log("base value set to", date.toLocaleString());
    setValue(date);
    // setFocus(false);
  }, []);

  // the value to show in the text input
  const formattedValue = React.useMemo(() => {
    if (!value) return "";
    let time = formatTime(value);
    let date = formatDate(value);
    switch (type) {
      case "time":
        return time;
      case "datetime":
        return date + " " + time;
      case "date":
      default:
        return date;
    }
  }, [type, value]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        styles.ESInputDatePicker,
        focus && styles.focus,
        variant && styles[variant],
        className
      )}
    >
      <ESInputText
        value={formattedValue}
        readOnly
        onFocus={onFocus}
        actionButtons={<Calendar onClick={() => setFocus(!focus)} />}
        variant={variant}
        error={error}
      />
      {focus && (
        <ESInputDatePickerPrompt
          value={value}
          onSelectDate={onSelect}
          onSelectTime={onSelect}
          variant={variant}
          type={type}
        />
      )}
    </div>
  );
};

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
