import * as React from "react";
import { ESInputDatePickerTimeWheelProps } from "./ESInputDatePickerPrompt.types";
import styles from "./ESInputDatePickerPrompt.module.css";
import clsx from "clsx";

const ESInputDatePickerTimeWheel: React.FC<ESInputDatePickerTimeWheelProps> = ({
  label,
  values,
  value,
  onSelectValue,
}) => {
  // const initialIndex = React.useMemo(() => {
  //   if (defaultValue === undefined) return undefined;
  //   const index = values.indexOf(defaultValue);
  //   return index === -1 ? undefined : index;
  // }, [defaultValue]);
  // const [currentIndex, setCurrentIndex] = React.useState<number | undefined>(
  //   initialIndex
  // );

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
            styles.ESInputDatePickerButtonInteractions,
            v === value && styles.ESInputDatePickerButtonSelected
          )}
          ref={(el) => (wheelButtonRefs.current[i] = el!)}
          onClick={() => {
            scrollToButton(i, "smooth");
            onSelectValue(v);
          }}
        >
          {v}
        </button>
      );
    });
  }, [values, onSelectValue]);

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
