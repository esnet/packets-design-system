import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import {
  flattenedDateGrid,
  getMonthName,
  monthNames,
  weekdayNames,
} from "./ESInputDatePickerPrompt.utils";
import { ESInputDatePickerDateProps } from "./ESInputDatePickerPrompt.types";

const ESInputDatePickerDate = ({
  date,
  onClickDate,
}: ESInputDatePickerDateProps) => {
  const [view, setView] = React.useState<"day" | "month" | "year">("day");
  const changeView = (newView: "day" | "month" | "year") => {
    setView(newView);
  };
  // the current MONTH and YEAR that is currently being viewed; do not care about date number
  const [viewDate, setViewDate] = React.useState(date ?? new Date());

  // this should be moved to it's own seperate component, but would have to face prop drilling
  const dayComponent = React.useMemo(() => {
    const weekdayHeaders = Array.from(weekdayNames).map((day) => (
      <div key={day} className={styles.ESInputDatePickerDateDayCellHeader}>
        {day}
      </div>
    ));

    const dates = flattenedDateGrid(viewDate);
    const dateButtons = dates.map((date) => (
      <button
        key={date.toString()}
        className={styles.ESInputDatePickerDateDayCellButton}
        disabled={date.getMonth() !== viewDate.getMonth()}
        onClick={() => {
          setViewDate(date);
          onClickDate?.(date);
        }}
      >
        {date.getDate()}
      </button>
    ));

    return (
      <>
        {weekdayHeaders}
        {dateButtons}
      </>
    );
  }, [viewDate]);

  // this should be moved to it's own seperate component, but would have to face prop drilling
  const monthsComponent = React.useMemo(() => {
    const onClickMonthFactory = (
      month: number
    ): React.MouseEventHandler<HTMLButtonElement> => {
      return () => {
        setViewDate((prev) => new Date(prev.setMonth(month)));
        setView("day");
      };
    };
    return Array.from(monthNames).map((monthName, monthIndex) => (
      <button
        key={monthName}
        className={styles.ESInputDatePickerDateMonthCellButton}
        onClick={onClickMonthFactory(monthIndex)}
      >
        {monthName}
      </button>
    ));
  }, []);

  // this should be moved to it's own seperate component, but would have to face prop drilling
  const yearsComponent = React.useMemo(() => {
    const onClickYearFactory = (
      year: number
    ): React.MouseEventHandler<HTMLButtonElement> => {
      return () => {
        setViewDate((prev) => new Date(prev.setFullYear(year)));
        setView("day");
      };
    };
    return Array.from(
      { length: 20 },
      (_, i) => viewDate.getFullYear() + i - 10
    ).map((year) => (
      <button
        key={year}
        className={styles.ESInputDatePickerDateYearCellButton}
        onClick={onClickYearFactory(year)}
      >
        {year}
      </button>
    ));
  }, [viewDate]);

  const navComponent = React.useMemo(() => {
    const onClickNav = (direction: "left" | "right") => {
      const value = direction === "left" ? -1 : 1;
      if (view === "day") {
        setViewDate((prev) => new Date(prev.setMonth(prev.getMonth() + value)));
      }
      // no functionality for month view
      if (view === "year") {
        setViewDate(
          (prev) => new Date(prev.setFullYear(prev.getFullYear() - value * 8))
        );
      }
    };

    return (
      <div className={styles.ESInputDatePickerDateNav}>
        <ChevronLeft
          onClick={() => onClickNav("left")}
          className={styles.ESInputDatePickerNavButton}
        />
        <div className={styles.ESInputDatePickerDateNavInfo}>
          {view === "day" && (
            <>
              <button onClick={() => changeView("month")}>
                {getMonthName(viewDate)} <ChevronDown />
              </button>
              <button onClick={() => changeView("year")}>
                {viewDate.getFullYear()} <ChevronDown />
              </button>
            </>
          )}
          {view === "month" && (
            <button onClick={() => changeView("day")}>
              {viewDate.getFullYear()} <ChevronDown />
            </button>
          )}
          {view === "year" && (
            <button onClick={() => changeView("day")}>
              {viewDate.getFullYear()} <ChevronDown />
            </button>
          )}
        </div>
        <ChevronRight
          onClick={() => onClickNav("right")}
          className={styles.ESInputDatePickerNavButton}
        />
      </div>
    );
  }, [view, viewDate]);

  return (
    <div className={styles.ESInputDatePickerDate}>
      {navComponent}
      {view === "day" && (
        <div className={styles.ESInputDatePickerDateDayGrid}>
          {dayComponent}
        </div>
      )}
      {view === "month" && (
        <div className={styles.ESInputDatePickerDateMonthGrid}>
          {monthsComponent}
        </div>
      )}
      {view === "year" && (
        <div className={styles.ESInputDatePickerDateYearGrid}>
          {yearsComponent}
        </div>
      )}
    </div>
  );
};

export default ESInputDatePickerDate;
