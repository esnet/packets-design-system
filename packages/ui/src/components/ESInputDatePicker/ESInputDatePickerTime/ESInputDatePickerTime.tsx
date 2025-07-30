import * as React from "react";
import styles from "./ESInputDatePickerTime.module.css";
import {
  ESInputDatePickerTimeProps,
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
  // settings
  const { format, hour, minute, second } = React.useMemo(
    () => mergeSettings(settings),
    [settings]
  );

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
    [onChange, value]
  );

  const timeWheels = React.useMemo(() => {
    const wheels = [];
    if (hour) {
      if (typeof hour === "boolean") {
        const data = getTimeWheel("hour");
      } else {
        const data = getTimeWheel("hour", hour.min, hour.max, hour.step);
      }
      // necessary step to account for hour range being 0-11 due to meridiem
      const hourValue = String(value ? value.getHours() % 12 : "");
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Hr"
          label="Hr"
          value={hourValue}
          values={data}
          onChange={(hourValue) => {
            // necessary step to account for hour range being 0-11 due to meridiem
            const meridiemValue = value ? getMeridiem(value) : "AM";
            const newHour =
              Number(hourValue) + (meridiemValue === "PM" ? 12 : 0);
            onChangePart(TimePrecision.Hour, Number(newHour));
          }}
        />
      );
    }
    if (precision >= TimePrecision.Minute) {
      const data = getTimeWheel("minute", minuteStep);
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Min"
          label="Min"
          value={String(value?.getMinutes() ?? "")}
          values={data}
          onChange={(value) => {
            onChangePart(TimePrecision.Minute, Number(value));
          }}
        />
      );
    }
    if (precision >= TimePrecision.Second) {
      const data = getTimeWheel("second", secondStep);
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Sec"
          label="Sec"
          value={String(value?.getSeconds() ?? "")}
          values={data}
          onChange={(value) => {
            onChangePart(TimePrecision.Second, Number(value));
          }}
        />
      );
    }
    wheels.push(
      <ESInputDatePickerTimeWheel
        key="Mer"
        label="Mer"
        value={value ? getMeridiem(value) : ""}
        values={["AM", "PM"]}
        onChange={(merValue) => {
          onChangePart(
            TimePrecision.Hour,
            getHoursOnChangeMeridiem(
              value?.getHours() ?? 0,
              merValue as "AM" | "PM"
            )
          );
        }}
      />
    );

    return wheels;
  }, [precision, value, hourStep, minuteStep, secondStep, onChangePart]);

  return <div className={styles.ESInputDatePickerTime}>{timeWheels}</div>;
};

export default ESInputDatePickerTime;
