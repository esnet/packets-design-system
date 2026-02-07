import * as React from "react";
import clsx from "clsx";
import { DateRange, ESInputDateRangeProps } from "./ESInputDateRange.types";
import ESInputText from "../ESInputText";
import { Calendar } from "lucide-react";
import useOutsideClick from "../../lib/hooks/useOutsideClick";
import ESInputDatePicker from "../ESInputDatePicker";
import { formatDate } from "../ESInputDate/ESInputDate.utils";

/**
 * ESInputDateRange Component
 *
 * Input box (underlying is an ESInputText component) that allows selection of a date range.
 *
 * Note that due to the custom nature of this component, it does not store the internal value as a formatted string, but rather a custom object of type `DateRange` with `start` and `end` properties, both of which are `Date` objects.
 *
 * To access these values the component must be controlled. Attempting to use a ref to get the current value will only get you the formatted string value shown in the input box, but a ref can still be passed in for other purposes.
 *
 * @param {ESInputDateRangeProps} props
 * @returns {React.ReactElement}
 */
export function ESInputDateRange({
  variant = "primary",
  className,
  error,
  defaultValue,
  onChange,
  dateSettings,
  ...props
}: ESInputDateRangeProps) {
  const [_value, setValue] = React.useState<DateRange>(defaultValue ?? {});

  const onChangeDateRangeFactory = React.useCallback(
    (key: keyof DateRange) => {
      return (newDate: Date | undefined) => {
        setValue((prev) => {
          const newValue = { ...prev, [key]: newDate };
          onChange?.(newValue);
          return newValue;
        });
      };
    },
    [onChange, setValue, _value],
  );

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

  // the value to show in the text input
  const formattedValue = React.useMemo(() => {
    if (!_value.start && !_value.end) return "";
    return `${_value.start ? formatDate(_value.start) : ""} - ${_value.end ? formatDate(_value.end) : ""}`;
  }, [_value]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "es-input-date-range",
        focus && "focus",
        variant,
        className,
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
        type="text"
      />
      {focus && (
        <ESInputDatePicker
          type="daterange"
          dateSettings={dateSettings}
          value={_value.start}
          onChange={onChangeDateRangeFactory("start")}
          rangeEndValue={_value.end}
          onChangeRangeEnd={onChangeDateRangeFactory("end")}
        />
      )}
    </div>
  );
}

ESInputDateRange.displayName = "ESInputDateRange";

export default ESInputDateRange;
