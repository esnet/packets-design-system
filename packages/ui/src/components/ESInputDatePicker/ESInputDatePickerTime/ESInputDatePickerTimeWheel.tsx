import * as React from "react";
import { ESInputDatePickerTimeWheelProps } from "./ESInputDatePickerTime.types";
import styles from "./ESInputDatePickerTime.module.css";
import clsx from "clsx";

const ESInputDatePickerTimeWheel: React.FC<ESInputDatePickerTimeWheelProps> = ({
  label,
  values,
  value,
  onChange,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const wheelButtonRefs = React.useRef<HTMLButtonElement[]>([]);

  const scrollToButton = React.useCallback(
    (index: number, behavior?: "auto" | "instant" | "smooth") => {
      if (!containerRef.current) return;
      if (!wheelButtonRefs.current[index]) return;

      containerRef.current.scrollTo({
        top:
          wheelButtonRefs.current[index].offsetTop -
          containerRef.current.offsetHeight / 2 +
          wheelButtonRefs.current[index].offsetHeight / 2,
        behavior,
      });
    },
    [containerRef, wheelButtonRefs]
  );

  const wheelComponents = React.useMemo(() => {
    return values.map((v, i) => {
      return (
        <button
          key={i}
          className={clsx(
            styles.ESInputDatePickerTimeWheelButton,
            styles.ESInputDatePickerBaseButton,
            v === value && styles.selected
          )}
          ref={(el) => (wheelButtonRefs.current[i] = el!)}
          onClick={() => {
            scrollToButton(i, "smooth");
            onChange(v);
          }}
        >
          {v}
        </button>
      );
    });
  }, [values, onChange]);

  React.useEffect(() => {
    if (!value) return;

    const index = values.indexOf(value);
    if (index === -1) return;
    scrollToButton(index);
  }, []);

  return (
    <div className={styles.ESInputDatePickerTimeWheel}>
      <div className={styles.ESInputDatePickerTimeWheelLabel}>{label}</div>
      <div
        className={styles.ESInputDatePickerTimeWheelButtons}
        ref={containerRef}
      >
        <div className={styles.ESInputDatePickerTimeWheelEmptySpace}></div>
        {wheelComponents}
        <div className={styles.ESInputDatePickerTimeWheelEmptySpace}></div>
      </div>
    </div>
  );
};

export default ESInputDatePickerTimeWheel;
