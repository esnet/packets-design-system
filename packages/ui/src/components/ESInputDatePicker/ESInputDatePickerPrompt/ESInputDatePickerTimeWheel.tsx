import * as React from "react";
import { ESInputDatePickerTimeWheelProps } from "./ESInputDatePickerPrompt.types";
import styles from "./ESInputDatePickerPrompt.module.css";
import clsx from "clsx";

const ESInputDatePickerTimeWheel: React.FC<ESInputDatePickerTimeWheelProps> = ({
  label,
  values,
  value,
  onScrollTime,
}) => {
  // initial index should be the index of value in the values array
  const containerRef = React.useRef<HTMLDivElement>(null);
  const currentIndex = React.useRef(0);

  const wheelButtonRefs = React.useRef<HTMLButtonElement[]>([]);

  const wheelComponents = React.useMemo(() => {
    return values.map((v, i) => {
      return (
        <button
          key={i}
          className={clsx(
            styles.ESInputDatePickerTimeWheelButton,
            v === value && styles.selected
          )}
          ref={(el) => (wheelButtonRefs.current[i] = el!)}
          onClick={() => {
            if (!containerRef.current) return;
            if (!wheelButtonRefs.current[i]) return;
            containerRef.current.scrollTo({
              top:
                wheelButtonRefs.current[i].offsetTop -
                containerRef.current.offsetHeight / 2 +
                wheelButtonRefs.current[i].offsetHeight / 2,
              behavior: "smooth",
            });

            onScrollTime(v);
          }}
        >
          {v}
        </button>
      );
    });
  }, [values, value]);

  const onWheel = (e: WheelEvent) => {
    // e.preventDefault();
    const delta = Math.sign(e.deltaY);
    console.log("Wheel delta:", delta);
  };

  React.useEffect(() => {
    if (!containerRef.current) return;
    if (wheelButtonRefs.current.length === 0) return;

    const selected = 0;
    if (!wheelButtonRefs.current[selected]) return;
    console.log(
      wheelButtonRefs.current[selected].offsetTop,
      containerRef.current.offsetHeight,
      wheelButtonRefs.current[selected].offsetHeight
    );
    containerRef.current.scrollTo({
      top:
        wheelButtonRefs.current[selected].offsetTop -
        containerRef.current.offsetHeight / 2 +
        wheelButtonRefs.current[selected].offsetHeight / 2,
      behavior: "smooth",
    });

    console.log(
      wheelButtonRefs.current[selected].offsetTop,
      containerRef.current.offsetHeight
    );

    // containerRef.current.scrollTo({
    //   top:
    //     wheelButtonRefs.current[selected].offsetTop +
    //     containerRef.current.offsetHeight / 2 -
    //     wheelButtonRefs.current[selected].offsetHeight / 2,
    //   behavior: "smooth",
    // });

    containerRef.current.addEventListener("wheel", onWheel, {
      passive: false,
    });
    return () => {
      containerRef.current?.removeEventListener("wheel", onWheel);
    };
  }, [onWheel]);

  return (
    <div className={styles.ESInputDatePickerTimeWheel}>
      <div className={styles.ESInputDatePickerTimeWheelLabel}>{label}</div>
      <div
        className={styles.ESInputDatePickerTimeWheelButtons}
        ref={containerRef}
      >
        <div className={styles.whitespace}>asd</div>
        {wheelComponents}
        <div className={styles.whitespace}>asd</div>
      </div>
    </div>
  );
};

export default ESInputDatePickerTimeWheel;
