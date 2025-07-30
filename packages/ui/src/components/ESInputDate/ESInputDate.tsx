import * as React from "react";
import clsx from "clsx";
import styles from "./ESInputDate.module.css";
import { ESInputDateProps } from "./ESInputDate.types";
import ESInputText from "../ESInputText";
import { Calendar } from "lucide-react";
import useOutsideClick from "../../lib/hooks/useOutsideClick";
import ESInputDatePicker from "../ESInputDatePicker";
import { formatDate, formatTime } from "./ESInputDate.utils";

/**
 * ESInputDate Component
 *
 * Input box (underlying is an input text box) that allows date picking with ESInputDatePicker.
 * Currently only supports date selection from the date picker, no manual typing.
 *
 * TODO:
 * Should this be a strictly readonly component that only allows selection from ESInputDatePicker? Or should it allow any input (leaning towards this)
 * Should support different region formats, e.g. MM/DD/YYYY vs DD/MM/YYYY?
 * Should support min and max?
 * Should support some sort of validation?
 *
 * @param {ESInputDateProps} props
 * @returns {React.ReactElement}
 */
const ESInputDate: React.FC<ESInputDateProps> = ({
  type = "datetime",
  variant = "primary",
  className,
  error,
  ...props
}) => {
  const [value, setValue] = React.useState<Date | undefined>(undefined);
  // manages whether or not the calendar picker prompt is active or not
  const [focus, setFocus] = React.useState(true);

  const _onFocus: React.FocusEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      setFocus(true);
      props.onFocus?.(e);
    },
    [setFocus, props.onFocus]
  );
  const containerRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => setFocus(false));

  const onChangePicker = React.useCallback((date: Date) => {
    setValue(date);
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
        styles.ESInputDate,
        focus && styles.focus,
        variant && styles[variant],
        className
      )}
    >
      <ESInputText
        {...props}
        value={formattedValue}
        readOnly
        onFocus={_onFocus}
        actionButtons={<Calendar onClick={() => setFocus(!focus)} />}
        variant={variant}
        error={error}
      />
      {focus && (
        <ESInputDatePicker
          value={value}
          onChange={onChangePicker}
          type={type}
        />
      )}
    </div>
  );
};

ESInputDate.displayName = "ESInputDate";

export default ESInputDate;
