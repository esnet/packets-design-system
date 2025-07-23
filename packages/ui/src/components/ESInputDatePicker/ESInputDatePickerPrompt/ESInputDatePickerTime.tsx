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
  onScrollTime,
}) => {
  const timeWheels = React.useMemo(() => {
    const wheels = [];
    if (precision >= TimePrecision.Hour) {
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Hr"
          label="Hr"
          values={getTimeWheel("hour", hourStep)}
          value={0}
          onScrollTime={(value) => console.log("Hour selected:", value)}
        />
      );
    }
    if (precision >= TimePrecision.Minute) {
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Min"
          label="Min"
          values={getTimeWheel("minute", minuteStep)}
          value={0}
          onScrollTime={(value) => console.log("Minute selected:", value)}
        />
      );
    }
    if (precision >= TimePrecision.Second) {
      wheels.push(
        <ESInputDatePickerTimeWheel
          key="Sec"
          label="Sec"
          values={getTimeWheel("second", secondStep)}
          value={0}
          onScrollTime={(value) => console.log("Second selected:", value)}
        />
      );
    }

    return <>{wheels}</>;
  }, [time, precision]);

  return <div className={styles.ESInputDatePickerTime}>{timeWheels}hello</div>;
};

export default ESInputDatePickerTime;
