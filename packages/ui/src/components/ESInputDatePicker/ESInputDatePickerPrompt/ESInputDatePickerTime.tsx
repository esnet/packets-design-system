import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import {
  ESInputDatePickerTimeProps,
  TimePrecision,
} from "./ESInputDatePickerPrompt.types";
import ESInputDatePickerTimeWheel from "./ESInputDatePickerTimeWheel";
import { getTimeWheel } from "./ESInputDatePickerPrompt.utils";

const ESInputDatePickerTime: React.FC<ESInputDatePickerTimeProps> = ({
  time,
  precision = TimePrecision.Minute,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  onSelectTime,
}) => {
  const timeWheels = React.useMemo(() => {
    const wheels = [];
    if (precision >= TimePrecision.Hour) {
      const data = getTimeWheel("hour", hourStep);
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Hr"
          label="Hr"
          values={data}
          defaultValue={data[0]}
          onSelectTime={(value) => console.log("Hour selected:", value)}
        />
      );
    }
    if (precision >= TimePrecision.Minute) {
      const data = getTimeWheel("minute", minuteStep);
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Min"
          label="Min"
          values={data}
          defaultValue={data[0]}
          onSelectTime={(value) => console.log("Minute selected:", value)}
        />
      );
    }
    if (precision >= TimePrecision.Second) {
      const data = getTimeWheel("second", secondStep);
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Sec"
          label="Sec"
          values={data}
          defaultValue={data[0]}
          onSelectTime={(value) => console.log("Second selected:", value)}
        />
      );
    }

    return <>{wheels}</>;
  }, [time, precision]);

  return <div className={styles.ESInputDatePickerTime}>{timeWheels}</div>;
};

export default ESInputDatePickerTime;
