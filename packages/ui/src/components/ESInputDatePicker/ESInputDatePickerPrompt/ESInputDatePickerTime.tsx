import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import {
  ESInputDatePickerTimeProps,
  TimePrecision,
} from "./ESInputDatePickerPrompt.types";
import ESInputDatePickerTimeWheel from "./ESInputDatePickerTimeWheel";
import {
  getHoursOnChangeMeridiem,
  getMeridiem,
  getTimeWheel,
  getTodayDateToPrecision,
} from "./ESInputDatePickerPrompt.utils";

const ESInputDatePickerTime: React.FC<ESInputDatePickerTimeProps> = ({
  value,
  precision = TimePrecision.Minute,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  onSelectTime,
}) => {
  const onSelectTimePart = React.useCallback(
    (wheel: TimePrecision, timeWheelValue: number) => {
      // use today as the value (up to specified time precision) to set time if a value prop is not provided
      let updateDate: Date;
      if (value) {
        updateDate = new Date(value);
      } else {
        updateDate = getTodayDateToPrecision();
      }

      switch (wheel) {
        case TimePrecision.Second:
          updateDate.setSeconds(timeWheelValue);
          break;
        case TimePrecision.Minute:
          updateDate.setMinutes(timeWheelValue);
          break;
        case TimePrecision.Hour:
          updateDate.setHours(timeWheelValue);
          break;
      }
      onSelectTime?.(updateDate);
    },
    [onSelectTime, value, precision]
  );

  const timeWheels = React.useMemo(() => {
    const wheels = [];
    if (precision >= TimePrecision.Hour) {
      const data = getTimeWheel("hour", hourStep);
      // necessary step to account for hour range being 0-11 due to meridiem
      const hourValue = String(value ? value.getHours() % 12 : "");
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Hr"
          label="Hr"
          value={hourValue}
          values={data}
          onSelectValue={(hourValue) => {
            // necessary step to account for hour range being 0-11 due to meridiem
            const meridiemValue = value ? getMeridiem(value) : "AM";
            const newHour =
              Number(hourValue) + (meridiemValue === "PM" ? 12 : 0);
            onSelectTimePart(TimePrecision.Hour, Number(newHour));
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
          onSelectValue={(value) => {
            onSelectTimePart(TimePrecision.Minute, Number(value));
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
          onSelectValue={(value) => {
            onSelectTimePart(TimePrecision.Second, Number(value));
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
        onSelectValue={(merValue) => {
          onSelectTimePart(
            TimePrecision.Hour,
            getHoursOnChangeMeridiem(
              value?.getHours() ?? 0,
              merValue as "AM" | "PM"
            )
          );
        }}
      />
    );

    return <>{wheels}</>;
  }, [precision, value, hourStep, minuteStep, secondStep, onSelectTimePart]);

  return <div className={styles.ESInputDatePickerTime}>{timeWheels}</div>;
};

export default ESInputDatePickerTime;
