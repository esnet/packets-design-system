import * as React from "react";
import { ESInputDatePickerTimeWheelProps } from "./ESInputDatePickerTime.types";
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
    [containerRef, wheelButtonRefs],
  );

  const wheelComponents = React.useMemo(() => {
    return values.map((v, i) => {
      return (
        <button
          key={i}
          className={clsx(
            "time-wheel-button",
            v === value && "selected",
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
    <div className="time-wheel">
      <div className="label">{label}</div>
      <div className="time-wheel-button-group" ref={containerRef}>
        <div className="padding"></div>
        {wheelComponents}
        <div className="padding"></div>
      </div>
    </div>
  );
};

export default ESInputDatePickerTimeWheel;
