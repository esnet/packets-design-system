import * as React from "react";
import { ESInputDatePickerTimeWheelProps } from "./ESInputDatePickerPrompt.types";
import styles from "./ESInputDatePickerPrompt.module.css";
import clsx from "clsx";

const ESInputDatePickerTimeWheel: React.FC<ESInputDatePickerTimeWheelProps> = ({
  label,
  values,
  defaultValue,
  onSelectTime,
}) => {
  const initialIndex = React.useMemo(() => {
    if (defaultValue === undefined) return undefined;
    const index = values.indexOf(defaultValue);
    return index === -1 ? undefined : index;
  }, [defaultValue]);
  const [currentIndex, setCurrentIndex] = React.useState<number | undefined>(
    initialIndex
  );

  const containerRef = React.useRef<HTMLDivElement>(null);
  const wheelButtonRefs = React.useRef<HTMLButtonElement[]>([]);

  const scrollToButton = React.useCallback(
    (index: number, behavior?: "auto" | "instant" | "smooth") => {
      console.log("received");
      if (!containerRef.current) return;
      if (currentIndex === undefined || !wheelButtonRefs.current[currentIndex])
        return;

      console.log("hello is this on lol");

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
            currentIndex &&
              v === values[currentIndex] &&
              styles.ESInputDatePickerButtonSelected
          )}
          ref={(el) => (wheelButtonRefs.current[i] = el!)}
          onClick={() => {
            setCurrentIndex(i);
            scrollToButton(i, "smooth");
            onSelectTime(v);
          }}
        >
          {v}
        </button>
      );
    });
  }, [values, currentIndex]);

  // Handle wheel event to scroll through the time wheel - will need to ensure this works on mobile
  //   const onWheel = React.useCallback(
  //     (e: WheelEvent) => {
  //       e.preventDefault();
  //       setCurrentIndex((prev) => {
  //         const newIndex = Math.max(
  //           0,
  //           Math.min(values.length - 1, prev + Math.sign(e.deltaY))
  //         );
  //         scrollToButton(newIndex);
  //         return newIndex;
  //       });
  //     },
  //     [scrollToButton, values]
  //   );

  React.useEffect(() => {
    if (currentIndex) {
      scrollToButton(currentIndex);
    }
  }, []);

  // Effect to initially scroll to the default initial value
  //   React.useEffect(() => {
  //     if (!containerRef.current) return;

  //     containerRef.current.addEventListener("wheel", onWheel, {
  //       passive: false,
  //     });
  //     return () => {
  //       containerRef.current?.removeEventListener("wheel", onWheel);
  //     };
  //   }, [onWheel, scrollToButton]);

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
