import * as React from "react";
import styles from "./ESInputDatePicker.module.css";
import { ESInputDatePickerProps } from "./ESInputDatePicker.types";
import ESInputDatePickerDate from "./ESInputDatePickerDate/ESInputDatePickerDate";
import ESInputDatePickerTime from "./ESInputDatePickerTime/ESInputDatePickerTime";

/**
 * ESInputDatePicker Component
 *
 * Allows for date, time, and datetime selections. It's not encouraged to use this component directly unless absolutely necessary.
 *
 * Instead, use ESInputDate for selecting a date, or ESInputDateRange for selecting a date range, which wrap this component and provide an input box.
 *
 * ### Date related types
 *
 * To understand ESInputDatePicker, ESInputDate, and ESInputDateRange, we must define a few types that are used, in props, or in props of props. `Date` refers to the Javascript Date object.
 *
 * ```ts
 * interface ESInputDatePickerDateSettings {
 *  // The lowest date able to be selected
 *  min?: Date;
 *  // The highest date able to be selected
 *  max?: Date;
 * }
 * ```
 *
 *
 * ### Time related types
 *
 * ```ts
 * type TimePrecision = "hour" | "minute" | "second";
 * type Meridiem = "AM" | "PM";
 * // Used to specify start, stop, and steps for in time option selection.
 * type Range = { min?: number; max?: number; step?: number };
 *
 * interface ESInputDatePickerTimeSettings {
 *  // Format of the time, either 12-hour or 24-hour. When 12-hour is specified, a meridiem input wheel is shown.
 *  format?: "12-hour" | "24-hour";
 *  // Whether to include hour selection, defaulting to true. If true, it will be included, with default range values. If an object of type `Range` is provided, it will utilize the specified start, stop, and step.
 *  hour?: boolean | Range;
 *  // Whether to include minute selection, defaulting to true. If true, it will be included, with default range values. If an object of type `Range` is provided, it will utilize the specified start, stop, and step.
 *  minute?: boolean | Range;
 *  // Whether to include second selection, defaulting to true. If true, it will be included, with default range values. If an object of type `Range` is provided, it will utilize the specified start, stop, and step.
 *  second?: boolean | Range;
 * }
 * ```
 */
export function ESInputDatePicker({
  type = "daterange",
  value,
  onChange,
  rangeEndValue,
  onChangeRangeEnd,
  timeSettings,
  dateSettings,
}: ESInputDatePickerProps) {
  const inputTypeMenus = React.useMemo(() => {
    switch (type) {
      case "time":
        return (
          <ESInputDatePickerTime
            settings={timeSettings}
            value={value}
            onChange={onChange}
          />
        );
      case "datetime":
        return (
          <>
            <ESInputDatePickerDate
              settings={dateSettings}
              value={value}
              onChange={onChange}
            />
            <ESInputDatePickerTime
              settings={timeSettings}
              value={value}
              onChange={onChange}
            />
          </>
        );
      case "daterange":
        return (
          <ESInputDatePickerDate
            settings={dateSettings}
            value={value}
            onChange={onChange}
            isDateRange
            rangeEndValue={rangeEndValue}
            onChangeRangeEnd={onChangeRangeEnd}
          />
        );
      case "date":
      default:
        return (
          <ESInputDatePickerDate
            settings={dateSettings}
            value={value}
            onChange={onChange}
          />
        );
    }
  }, [type, value, onChange, rangeEndValue, onChangeRangeEnd]);

  return <div className={styles.ESInputDatePicker}>{inputTypeMenus}</div>;
}

ESInputDatePicker.displayName = "ESInputDatePicker";

export default ESInputDatePicker;
