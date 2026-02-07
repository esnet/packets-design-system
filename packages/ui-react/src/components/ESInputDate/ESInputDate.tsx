import * as React from "react";
import clsx from "clsx";
import styles from "./ESInputDate.module.css";
import { ESInputDateProps } from "./ESInputDate.types";
import ESInputText from "../ESInputText";
import { Calendar } from "lucide-react";
import useOutsideClick from "../../lib/hooks/useOutsideClick";
import ESInputDatePicker from "../ESInputDatePicker";
import { formatValue } from "./ESInputDate.utils";

/**
 * ESInputDate Component
 *
 * Input box (underlying is an ESInputText component) that allows date picking with ESInputDatePicker.
 * Currently only supports date selection from the date picker, no manual typing.
 * Differs from HTML input type date in that the underlying value is stored as a Date object, not a string. Thus, when controlling the value, it must be a Date object.
 *
 * @param {ESInputDateProps} props
 * @returns {React.ReactNode}
 */
export function ESInputDate({
  type = "datetime",
  variant = "primary",
  className,
  error,
  timeSettings,
  dateSettings,
  defaultValue,
  value,
  onChange,
  ...props
}: ESInputDateProps) {
  const [_value, setValue] = React.useState<Date | undefined>(defaultValue);
  const controlled = value !== undefined;
  // manages whether or not the calendar picker prompt is active or not
  const [focus, setFocus] = React.useState(true);

  const _onFocus: React.FocusEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      setFocus(true);
      props.onFocus?.(e);
    },
    [setFocus, props.onFocus],
  );
  const containerRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => setFocus(false));

  const onChangeValue = React.useCallback(
    (date: Date) => {
      if (!controlled) {
        setValue(date);
      }
      onChange?.(date);
    },
    [onChange, setValue, value],
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        styles.ESInputDate,
        focus && styles.focus,
        variant && styles[variant],
        className,
      )}
    >
      <ESInputText
        {...props}
        value={formatValue(controlled ? value : _value, type)}
        readOnly
        onFocus={_onFocus}
        actionButtons={<Calendar onClick={() => setFocus(!focus)} />}
        variant={variant}
        error={error}
        type="text"
      />
      {focus && (
        <ESInputDatePicker
          value={controlled ? value : _value}
          onChange={onChangeValue}
          type={type}
          timeSettings={timeSettings}
          dateSettings={dateSettings}
        />
      )}
    </div>
  );
}

ESInputDate.displayName = "ESInputDate";

export default ESInputDate;
