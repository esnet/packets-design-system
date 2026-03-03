import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  flattenedDateGrid,
  getMonthName,
  monthNames,
  orderDates,
  weekdayNames,
} from "./PktsInputDatePickerDate.utils";
import { PktsInputDatePickerDateProps } from "./PktsInputDatePickerDate.types";
import { clsx } from "clsx";

const PktsInputDatePickerDate = ({
  settings,
  value,
  onChange,
  isDateRange = false,
  rangeEndValue,
  onChangeRangeEnd,
}: PktsInputDatePickerDateProps) => {
  const { min: minSetting, max: maxSetting } = settings ?? {};

  const [view, setView] = React.useState<"day" | "month" | "year">("day");
  const changeView = (newView: "day" | "month" | "year") => {
    setView(newView);
  };
  // the current MONTH and YEAR that is currently being viewed
  // initialized to a copy of the supplied value, or today
  const [viewDate, setViewDate] = React.useState(
    value ? new Date(value) : new Date(),
  );

  // DATE RANGE LOGIC ONLY
  // the value is the date start, rangeEndValue is the date end
  // if dateRange is enabled, keep an internal ref for the first selected date
  // when the second date is selected, if it's before the first, swap them, then call onChangeRangeEnd
  // track the last selected date, as it will serve as start or end of the range
  const [firstSelectedDate, setFirstSelectedDate] = React.useState<Date | null>(
    null,
  );

  const dayMenu = React.useMemo(() => {
    if (view !== "day") return; // no need to compute if not to be rendered
    const weekdayHeaders = Array.from(weekdayNames).map((day) => (
      <div key={day} className="day-grid-header">
        {day}
      </div>
    ));

    const dates = flattenedDateGrid(viewDate);
    const dateButtons = dates.map((dateInfo) => (
      <button
        key={dateInfo.toString()}
        className={clsx(
          "day-grid-button",
          value &&
            dateInfo.toDateString() === value.toDateString() &&
            "selected",
          dateInfo.toDateString() === new Date().toDateString() && "today",
          isDateRange &&
            value &&
            rangeEndValue &&
            ((dateInfo.toDateString() === value.toDateString() && [
              "date-range-start",
              "date-range-edge",
            ]) ||
              (dateInfo.toDateString() === rangeEndValue.toDateString() && [
                "date-range-end",
                "date-range-edge",
              ]) ||
              (dateInfo > value &&
                dateInfo < rangeEndValue &&
                "date-range-middle")),
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
            value?.getMilliseconds() ?? 0,
          );
          if (!isDateRange) {
            onChange?.(dateInfo);
          } else {
            // if there is no first date, or both dates are selected (re-selecting range), set the first date to a new date
            if (firstSelectedDate === null) {
              const selectedDate = new Date(dateInfo);
              setFirstSelectedDate(selectedDate);
              onChange?.(selectedDate);
              onChangeRangeEnd?.(undefined);
            } else {
              // if the first date is already set, the date range is whatever is selected next, ensure they are ordered
              const [start, end] = orderDates(firstSelectedDate, dateInfo);
              onChange?.(start);
              onChangeRangeEnd?.(end);
              setFirstSelectedDate(null);
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
    view,
    viewDate,
    isDateRange,
    value,
    rangeEndValue,
    firstSelectedDate,
    onChange,
    onChangeRangeEnd,
  ]);

  const monthMenu = React.useMemo(() => {
    if (view !== "month") return; // no need to compute if not to be rendered
    const onClickMonthFactory = (
      month: number,
    ): React.MouseEventHandler<HTMLButtonElement> => {
      return () => {
        setViewDate((prev) => new Date(prev.setMonth(month)));
        setView("day");
      };
    };
    return Array.from(monthNames).map((monthName, monthIndex) => {
      const monthDate = new Date();
      monthDate.setFullYear(viewDate.getFullYear(), monthIndex, 1);

      return (
        <button
          key={monthName}
          className={clsx(
            "month-grid-button",
            value &&
              monthDate.getMonth() === value.getMonth() &&
              monthDate.getFullYear() === value.getFullYear() &&
              "selected",
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
  }, [view, viewDate, value]);

  const yearMenu = React.useMemo(() => {
    if (view !== "year") return; // no need to compute if not to be rendered
    const onClickYearFactory = (
      year: number,
    ): React.MouseEventHandler<HTMLButtonElement> => {
      return () => {
        setViewDate((prev) => new Date(prev.setFullYear(year)));
        setView("day");
      };
    };
    return Array.from(
      { length: 20 },
      (_, i) => viewDate.getFullYear() + i - 10,
    ).map((year) => {
      const yearDate = new Date(0);
      yearDate.setFullYear(year, 0, 1);
      return (
        <button
          key={year}
          className={clsx(
            "year-grid-button",
            value && year === value.getFullYear() && "selected",
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
  }, [view, viewDate, value]);

  const navComponent = React.useMemo(() => {
    const onClickNav = (direction: "left" | "right") => {
      const value = direction === "left" ? -1 : 1;
      switch (view) {
        case "day":
          setViewDate(
            (prev) => new Date(prev.setMonth(prev.getMonth() + value)),
          );
          break;
        case "month":
          setViewDate(
            (prev) => new Date(prev.setFullYear(prev.getFullYear() + value)),
          );
          break;
        case "year":
          setViewDate(
            (prev) =>
              new Date(prev.setFullYear(prev.getFullYear() + value * 8)),
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
      <div className="nav">
        <button
          className="nav-button"
          onClick={() => onClickNav("left")}
        >
          <ChevronLeft />
        </button>
        <div className="nav-info">
          <button onClick={onClickMonth}>
            {getMonthName(viewDate)} <ChevronDown />
          </button>
          <button onClick={onClickYear}>
            {viewDate.getFullYear()} <ChevronDown />
          </button>
        </div>
        <button
          className="nav-button"
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
        return <div className="day-grid">{dayMenu}</div>;
      case "month":
        return <div className="month-grid">{monthMenu}</div>;
      case "year":
        return <div className="year-grid">{yearMenu}</div>;
    }
  }, [view, dayMenu, monthMenu, yearMenu]);

  return (
    <div className="pkts-input-date-picker-date">
      {navComponent}
      {menuComponent}
    </div>
  );
};

export default PktsInputDatePickerDate;
