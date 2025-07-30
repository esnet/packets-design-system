import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  flattenedDateGrid,
  getMonthName,
  monthNames,
  weekdayNames,
} from "./ESInputDatePickerPrompt.utils";
import { ESInputDatePickerDateProps } from "./ESInputDatePickerPrompt.types";
import { clsx } from "clsx";

const ESInputDatePickerDate = ({
  value,
  onSelectDate,
}: ESInputDatePickerDateProps) => {
  const [view, setView] = React.useState<"day" | "month" | "year">("day");
  const changeView = (newView: "day" | "month" | "year") => {
    setView(newView);
  };
  // the current MONTH and YEAR that is currently being viewed on the prompt; do not care about date number
  const [viewDate, setViewDate] = React.useState(value ?? new Date());

  // TODO: refactor for consistent naming day/months (plural?)
  const dayComponent = React.useMemo(() => {
    const weekdayHeaders = Array.from(weekdayNames).map((day) => (
      <div key={day} className={styles.ESInputDatePickerDateDayCellHeader}>
        {day}
      </div>
    ));

    const dates = flattenedDateGrid(viewDate);
    const dateButtons = dates.map((dateInfo) => (
      <button
        key={dateInfo.toString()}
        className={clsx(
          styles.ESInputDatePickerDateDayCellButton,
          styles.ESInputDatePickerBaseButton,
          value &&
            dateInfo.toDateString() === value.toDateString() &&
            styles.selected,
          dateInfo.toDateString() === new Date().toDateString() && styles.today
        )}
        disabled={dateInfo.getMonth() !== viewDate.getMonth()}
        onClick={() => {
          setViewDate(dateInfo);
          // do not affect the time components of the date
          dateInfo.setHours(
            value?.getHours() ?? 0,
            value?.getMinutes() ?? 0,
            value?.getSeconds() ?? 0,
            value?.getMilliseconds() ?? 0
          );
          onSelectDate?.(dateInfo);
        }}
      >
        {dateInfo.getDate()}
      </button>
    ));

    return (
      <>
        {weekdayHeaders}
        {dateButtons}
      </>
    );
  }, [viewDate, value]);

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
        className={clsx(
          styles.ESInputDatePickerDateMonthCellButton,
          styles.ESInputDatePickerBaseButton,
          value &&
            monthIndex === value.getMonth() &&
            viewDate.getFullYear() === value.getFullYear() &&
            styles.selected
        )}
        onClick={onClickMonthFactory(monthIndex)}
      >
        {monthName}
      </button>
    ));
  }, [viewDate, value]);

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
        className={clsx(
          styles.ESInputDatePickerDateYearCellButton,
          styles.ESInputDatePickerBaseButton,
          value && year === value.getFullYear() && styles.selected
        )}
        onClick={onClickYearFactory(year)}
      >
        {year}
      </button>
    ));
  }, [viewDate, value]);

  // TODO: refactor to use switch case statements
  const navComponent = React.useMemo(() => {
    const onClickNav = (direction: "left" | "right") => {
      const value = direction === "left" ? -1 : 1;
      if (view === "day") {
        setViewDate((prev) => new Date(prev.setMonth(prev.getMonth() + value)));
      }
      if (view === "month") {
        setViewDate(
          (prev) => new Date(prev.setFullYear(prev.getFullYear() + value))
        );
      }
      if (view === "year") {
        setViewDate(
          (prev) => new Date(prev.setFullYear(prev.getFullYear() + value * 8))
        );
      }
    };

    return (
      <div className={styles.ESInputDatePickerDateNav}>
        <button
          className={clsx(
            styles.ESInputDatePickerNavButton,
            styles.ESInputDatePickerBaseButton
          )}
          onClick={() => onClickNav("left")}
        >
          <ChevronLeft />
        </button>
        <div className={styles.ESInputDatePickerDateNavInfo}>
          {view === "day" && (
            <>
              <button
                className={styles.ESInputDatePickerBaseButton}
                onClick={() => changeView("month")}
              >
                {getMonthName(viewDate)} <ChevronDown />
              </button>
              <button
                className={styles.ESInputDatePickerBaseButton}
                onClick={() => changeView("year")}
              >
                {viewDate.getFullYear()} <ChevronDown />
              </button>
            </>
          )}
          {view === "month" && (
            <button
              className={styles.ESInputDatePickerBaseButton}
              onClick={() => changeView("day")}
            >
              {viewDate.getFullYear()} <ChevronDown />
            </button>
          )}
          {view === "year" && (
            <button
              className={styles.ESInputDatePickerBaseButton}
              onClick={() => changeView("day")}
            >
              {viewDate.getFullYear()} <ChevronDown />
            </button>
          )}
        </div>
        <button
          className={clsx(
            styles.ESInputDatePickerNavButton,
            styles.ESInputDatePickerBaseButton
          )}
          onClick={() => onClickNav("right")}
        >
          <ChevronRight />
        </button>
      </div>
    );
  }, [view, viewDate]);

  const inputComponent = React.useMemo(() => {
    switch (view) {
      case "day":
        return (
          <div className={styles.ESInputDatePickerDateDayGrid}>
            {dayComponent}
          </div>
        );
      case "month":
        return (
          <div className={styles.ESInputDatePickerDateMonthGrid}>
            {monthsComponent}
          </div>
        );
      case "year":
        return (
          <div className={styles.ESInputDatePickerDateYearGrid}>
            {yearsComponent}
          </div>
        );
    }
  }, [view, dayComponent, monthsComponent, yearsComponent]);

  return (
    <div className={styles.ESInputDatePickerDate}>
      {navComponent}
      {inputComponent}
    </div>
  );
};

export default ESInputDatePickerDate;
