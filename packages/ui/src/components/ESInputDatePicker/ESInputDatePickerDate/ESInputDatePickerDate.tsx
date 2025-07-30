import * as React from "react";
import styles from "./ESInputDatePickerDate.module.css";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  flattenedDateGrid,
  getMonthName,
  monthNames,
  weekdayNames,
} from "./ESInputDatePickerDate.utils";
import { ESInputDatePickerDateProps } from "./ESInputDatePickerDate.types";
import { clsx } from "clsx";

const ESInputDatePickerDate = ({
  value,
  settings,
  onChange,
}: ESInputDatePickerDateProps) => {
  const { min: minSetting, max: maxSetting } = settings ?? {};

  const [view, setView] = React.useState<"day" | "month" | "year">("day");
  const changeView = (newView: "day" | "month" | "year") => {
    setView(newView);
  };
  // the current MONTH and YEAR that is currently being viewed; do not care about date number
  const [viewDate, setViewDate] = React.useState(value ?? new Date());

  // TODO: refactor for consistent naming day/months (plural?)
  const dayMenu = React.useMemo(() => {
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
        disabled={
          dateInfo.getMonth() !== viewDate.getMonth() ||
          (minSetting && dateInfo < minSetting) ||
          (maxSetting && dateInfo > maxSetting)
        }
        onClick={() => {
          setViewDate(dateInfo);
          // do not affect the time components of the date
          dateInfo.setHours(
            value?.getHours() ?? 0,
            value?.getMinutes() ?? 0,
            value?.getSeconds() ?? 0,
            value?.getMilliseconds() ?? 0
          );
          onChange?.(dateInfo);
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

  const monthMenu = React.useMemo(() => {
    const onClickMonthFactory = (
      month: number
    ): React.MouseEventHandler<HTMLButtonElement> => {
      return () => {
        setViewDate((prev) => new Date(prev.setMonth(month)));
        setView("day");
      };
    };
    return Array.from(monthNames).map((monthName, monthIndex) => {
      const monthDate = new Date(0);
      monthDate.setFullYear(viewDate.getFullYear(), monthIndex);
      return (
        <button
          key={monthName}
          className={clsx(
            styles.ESInputDatePickerDateMonthCellButton,
            styles.ESInputDatePickerBaseButton,
            value &&
              monthDate.getMonth() === value.getMonth() &&
              monthDate.getFullYear() === value.getFullYear() &&
              styles.selected
          )}
          disabled={
            (minSetting && monthDate < minSetting) ||
            (maxSetting && monthDate > maxSetting)
          }
          onClick={onClickMonthFactory(monthIndex)}
        >
          {monthName}
        </button>
      );
    });
  }, [viewDate, value]);

  const yearMenu = React.useMemo(() => {
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
    ).map((year) => {
      const yearDate = new Date(0);
      yearDate.setFullYear(year);
      return (
        <button
          key={year}
          className={clsx(
            styles.ESInputDatePickerDateYearCellButton,
            styles.ESInputDatePickerBaseButton,
            value && year === value.getFullYear() && styles.selected
          )}
          disabled={
            (minSetting && yearDate < minSetting) ||
            (maxSetting && yearDate > maxSetting)
          }
          onClick={onClickYearFactory(year)}
        >
          {year}
        </button>
      );
    });
  }, [viewDate, value]);

  const navComponent = React.useMemo(() => {
    const onClickNav = (direction: "left" | "right") => {
      const value = direction === "left" ? -1 : 1;
      switch (view) {
        case "day":
          setViewDate(
            (prev) => new Date(prev.setMonth(prev.getMonth() + value))
          );
          break;
        case "month":
          setViewDate(
            (prev) => new Date(prev.setFullYear(prev.getFullYear() + value))
          );
          break;
        case "year":
          setViewDate(
            (prev) => new Date(prev.setFullYear(prev.getFullYear() + value * 8))
          );
          break;
      }
    };

    let navInfo: React.ReactElement;
    switch (view) {
      case "day":
        navInfo = (
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
        );
        break;
      case "month":
        navInfo = (
          <button
            className={styles.ESInputDatePickerBaseButton}
            onClick={() => changeView("day")}
          >
            {viewDate.getMonth()} <ChevronDown />
          </button>
        );
        break;
      case "year":
        navInfo = (
          <button
            className={styles.ESInputDatePickerBaseButton}
            onClick={() => changeView("day")}
          >
            {viewDate.getFullYear()} <ChevronDown />
          </button>
        );
        break;
    }

    return (
      <div className={styles.ESInputDatePickerDateNav}>
        <button
          className={clsx(
            styles.ESInputDatePickerDateNavButton,
            styles.ESInputDatePickerBaseButton
          )}
          onClick={() => onClickNav("left")}
        >
          <ChevronLeft />
        </button>
        <div className={styles.ESInputDatePickerDateNavInfo}>{navInfo}</div>
        <button
          className={clsx(
            styles.ESInputDatePickerDateNavButton,
            styles.ESInputDatePickerBaseButton
          )}
          onClick={() => onClickNav("right")}
        >
          <ChevronRight />
        </button>
      </div>
    );
  }, [view, viewDate]);

  const menuComponent = React.useMemo(() => {
    switch (view) {
      case "day":
        return (
          <div className={styles.ESInputDatePickerDateDayGrid}>{dayMenu}</div>
        );
      case "month":
        return (
          <div className={styles.ESInputDatePickerDateMonthGrid}>
            {monthMenu}
          </div>
        );
      case "year":
        return (
          <div className={styles.ESInputDatePickerDateYearGrid}>{yearMenu}</div>
        );
    }
  }, [view, dayMenu, monthMenu, yearMenu]);

  return (
    <div className={styles.ESInputDatePickerDate}>
      {navComponent}
      {menuComponent}
    </div>
  );
};

export default ESInputDatePickerDate;
