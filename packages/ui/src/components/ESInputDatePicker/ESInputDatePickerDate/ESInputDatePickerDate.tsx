import * as React from "react";
import styles from "./ESInputDatePickerDate.module.css";
import baseStyles from "../ESInputDatePicker.module.css";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  flattenedDateGrid,
  getMonthName,
  monthNames,
  orderDates,
  weekdayNames,
} from "./ESInputDatePickerDate.utils";
import { ESInputDatePickerDateProps } from "./ESInputDatePickerDate.types";
import { clsx } from "clsx";

const ESInputDatePickerDate = ({
  settings,
  value,
  onChange,
  dateRange = false,
  rangeEndValue,
  onChangeRangeEnd,
}: ESInputDatePickerDateProps) => {
  const { min: minSetting, max: maxSetting } = settings ?? {};

  const [view, setView] = React.useState<"day" | "month" | "year">("day");
  const changeView = (newView: "day" | "month" | "year") => {
    setView(newView);
  };
  // the current MONTH and YEAR that is currently being viewed; do not care about date number
  const [viewDate, setViewDate] = React.useState(value ?? new Date());

  // DATE RANGE LOGIC ONLY
  // the value is the date start, rangeEndValue is the date end
  // if dateRange is enabled, keep an internal ref for the first selected date
  // when the second date is selected, if it's before the first, swap them, then call onChangeRangeEnd
  // track the last selected date, as it will serve as start or end of the range
  const [toggle, setToggle] = React.useState(false);

  const dayMenu = React.useMemo(() => {
    const weekdayHeaders = Array.from(weekdayNames).map((day) => (
      <div key={day} className={styles.dayGridHeader}>
        {day}
      </div>
    ));

    const dates = flattenedDateGrid(viewDate);
    const dateButtons = dates.map((dateInfo) => (
      <button
        key={dateInfo.toString()}
        className={clsx(
          styles.dayGridButton,
          baseStyles.button,
          value &&
            dateInfo.toDateString() === value.toDateString() &&
            baseStyles.selected,
          dateInfo.toDateString() === new Date().toDateString() && styles.today,
          // messy conditional styling handling date ranges
          dateRange &&
            value &&
            rangeEndValue &&
            ((dateInfo.toDateString() === value.toDateString() && [
              styles.dateRangeStart,
              styles.dateRangeEdge,
            ]) ||
              (dateInfo.toDateString() === rangeEndValue.toDateString() && [
                styles.dateRangeEnd,
                styles.dateRangeEdge,
              ]) ||
              (dateInfo > value &&
                dateInfo < rangeEndValue &&
                styles.dateRangeMiddle))
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
          if (!dateRange) {
            onChange?.(dateInfo);
          } else {
            // if there is no first date, or both dates are selected (re-selecting range), set the first date to a new date
            if (toggle === false) {
              onChange?.(dateInfo);
              onChangeRangeEnd?.(undefined);
              console.log("First date selected:", dateInfo.getDate());
              setToggle(true);
            } else {
              console.log("second clicked!");
              // if the first date is already set, the date range is whatever is selected next, ensure they are ordered
              const [start, end] = orderDates(value!, dateInfo);
              console.log(
                "should be setting to",
                start.getDate(),
                end.getDate()
              );
              onChange?.(start);
              onChangeRangeEnd?.(end);

              // reset the first date to null so the next
              setToggle(false);
            }
          }
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
  }, [
    viewDate,
    value,
    dateRange,
    rangeEndValue,
    toggle,
    onChange,
    onChangeRangeEnd,
  ]);

  React.useEffect(() => {
    console.log(
      "Date range selected:",
      value?.getDate(),
      rangeEndValue?.getDate()
    );
  }, [value, rangeEndValue]);

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
            styles.monthGridButton,
            baseStyles.button,
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
            styles.yearGridButton,
            baseStyles.button,
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

    // onClicks are toggles to go back to the 'default' view which is day
    let onClickYear, onClickMonth;
    switch (view) {
      case "day":
        onClickMonth = () => changeView("month");
        onClickYear = () => changeView("year");
        break;
      case "month":
        onClickMonth = () => changeView("day");
        onClickYear = () => changeView("year");
        break;
      case "year":
        onClickMonth = () => changeView("month");
        onClickYear = () => changeView("day");
        break;
    }

    return (
      <div className={styles.nav}>
        <button
          className={clsx(styles.navButton, baseStyles.button)}
          onClick={() => onClickNav("left")}
        >
          <ChevronLeft />
        </button>
        <div className={styles.navInfo}>
          <button className={baseStyles.button} onClick={onClickMonth}>
            {getMonthName(viewDate)} <ChevronDown />
          </button>
          <button className={baseStyles.button} onClick={onClickYear}>
            {viewDate.getFullYear()} <ChevronDown />
          </button>
        </div>
        <button
          className={clsx(styles.navButton, baseStyles.button)}
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
        return <div className={styles.dayGrid}>{dayMenu}</div>;
      case "month":
        return <div className={styles.monthGrid}>{monthMenu}</div>;
      case "year":
        return <div className={styles.yearGrid}>{yearMenu}</div>;
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
