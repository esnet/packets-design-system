import * as React from "react";
import {
  ESInputDatePickerTimeProps,
  Meridiem,
  TimePrecision,
} from "./ESInputDatePickerTime.types";
import ESInputDatePickerTimeWheel from "./ESInputDatePickerTimeWheel";
import {
  getHoursOnChangeMeridiem,
  getMeridiem,
  getTimeWheel,
  getCurrentDateWithoutTime,
  mergeSettings,
  defaultSettings,
} from "./ESInputDatePickerTime.utils";

const ESInputDatePickerTime: React.FC<ESInputDatePickerTimeProps> = ({
  value,
  settings = defaultSettings,
  onChange,
}) => {
  const {
    format: formatSetting,
    hour: hourSetting,
    minute: minuteSetting,
    second: secondSetting,
  } = React.useMemo(() => mergeSettings(settings), [settings]);

  const onChangePart = React.useCallback(
    (wheel: TimePrecision, timeWheelValue: number) => {
      // use today as the value (up to specified time precision) to set time if a value prop is not provided
      let updateDate: Date;
      if (value) {
        updateDate = new Date(value);
      } else {
        updateDate = getCurrentDateWithoutTime();
      }

      switch (wheel) {
        case "second":
          updateDate.setSeconds(timeWheelValue);
          break;
        case "minute":
          updateDate.setMinutes(timeWheelValue);
          break;
        case "hour":
          updateDate.setHours(timeWheelValue);
          break;
      }
      onChange?.(updateDate);
    },
    [onChange, value],
  );

  const timeWheels = React.useMemo(() => {
    const wheels = [];
    if (hourSetting) {
      const values =
        typeof hourSetting === "boolean"
          ? getTimeWheel("hour")
          : getTimeWheel(
              "hour",
              hourSetting.min,
              formatSetting === "12-hour" ? hourSetting.max : 23,
              hourSetting.step,
            );

      const hourValue = value
        ? formatSetting === "12-hour"
          ? // necessary step to account for hour range being 0-11 due to meridiem
            String(value.getHours() % 12)
          : String(value.getHours())
        : "";

      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Hr"
          label="Hr"
          value={hourValue}
          values={values}
          onChange={(hourValue) => {
            let hour = Number(hourValue);
            if (formatSetting === "12-hour") {
              // necessary step to account for hour range being 0-11 due to meridiem
              const meridiemValue = value ? getMeridiem(value) : "AM";
              hour += meridiemValue === "PM" ? 12 : 0;
            }
            onChangePart("hour", hour);
          }}
        />,
      );
    }

    if (minuteSetting) {
      const values =
        typeof minuteSetting === "boolean"
          ? getTimeWheel("hour")
          : getTimeWheel(
              "hour",
              minuteSetting.min,
              minuteSetting.max,
              minuteSetting.step,
            );

      const minuteValue = String(value?.getMinutes() ?? "");
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Min"
          label="Min"
          value={minuteValue}
          values={values}
          onChange={(value) => {
            onChangePart("minute", Number(value));
          }}
        />,
      );
    }

    if (secondSetting) {
      const values =
        typeof secondSetting === "boolean"
          ? getTimeWheel("hour")
          : getTimeWheel(
              "hour",
              secondSetting.min,
              secondSetting.max,
              secondSetting.step,
            );

      const secondValue = String(value?.getSeconds() ?? "");
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Sec"
          label="Sec"
          value={secondValue}
          values={values}
          onChange={(value) => {
            onChangePart("second", Number(value));
          }}
        />,
      );
    }

    if (formatSetting === "12-hour") {
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Mer"
          label="Mer"
          value={value ? getMeridiem(value) : ""}
          values={["AM", "PM"]}
          onChange={(merValue) => {
            onChangePart(
              "hour",
              getHoursOnChangeMeridiem(
                value?.getHours() ?? 0,
                merValue as Meridiem,
              ),
            );
          }}
        />,
      );
    }

    return wheels;
  }, [value, hourSetting, minuteSetting, secondSetting, onChangePart]);

  return <div className="es-input-date-picker-time">{timeWheels}</div>;
};

export default ESInputDatePickerTime;
