import * as React from "react";
import styles from "./ESInputDatePickerPrompt.module.css";
import { MoveLeft, MoveRight } from "lucide-react";

const ESInputDatePickerDate = () => {
  const [view, setView] = React.useState<"day" | "month" | "year">("year");
  const changeView = (newView: "day" | "month" | "year") => {
    setView(newView);
  };
  // so we'll probably just have a prop drilled function like onChange(), which when any of the values are pressed, then it'll set the whatever value to whatever

  // this should be moved to it's own seperate component, but would have to face prop drilling
  const dayComponent = React.useMemo(() => {
    const weekdayHeaders = Array.from([
      "Su",
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
      "Sa",
    ]).map((day) => (
      <div key={day} className={styles.ESInputDatePickerDateDayCellHeader}>
        {day}
      </div>
    ));
    const days = Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
      <button key={day} className={styles.ESInputDatePickerDateDayCellButton}>
        {day}
      </button>
    ));

    return (
      <>
        {weekdayHeaders}
        {days}
      </>
    );
  }, []);

  // this should be moved to it's own seperate component, but would have to face prop drilling
  const monthsComponent = React.useMemo(() => {
    return Array.from([
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]).map((month) => (
      <button
        key={month}
        className={styles.ESInputDatePickerDateMonthCellButton}
      >
        {month}
      </button>
    ));
  }, []);

  // this should be moved to it's own seperate component, but would have to face prop drilling
  const yearsComponent = React.useMemo(() => {
    return Array.from(
      { length: 24 },
      (_, i) => new Date().getFullYear() + i - 10
    ).map((year) => (
      <button key={year} className={styles.ESInputDatePickerDateYearCellButton}>
        {year}
      </button>
    ));
  }, []);

  return (
    <div className={styles.ESInputDatePickerDate}>
      <div className={styles.ESInputDatePickerDateNav}>
        <MoveLeft />
        <button onClick={() => changeView("month")}>Month ^</button>
        <button onClick={() => changeView("year")}>Year ^</button>
        <MoveRight />
      </div>
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
