import { TimePrecision } from "./ESInputDatePickerPrompt.types";

/* Date related exports */
const monthNames = [
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
];

export function getMonthName(date: Date): string {
  return monthNames[date.getMonth()] ?? "";
}

const weekdayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function getWeekdayName(date: Date): string {
  return weekdayNames[date.getDay()] ?? "";
}

/**
 * To have a proper 6 row x 7 column grid of dates, there needs to be dates padding the current date's month, which are taken from the previous and next month.
 * This function returns a flattened array of dates that fill out that grid.
 * @param date The current date.
 * @returns A list of 42 dates, from previous, current, and next month
 */
export function flattenedDateGrid(date: Date): Date[] {
  const dates = [];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const daysInCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // days from previous month
  dates.push(
    ...Array.from(
      { length: firstDay.getDay() },
      (_, i) =>
        new Date(
          date.getFullYear(),
          date.getMonth() - 1,
          -1 * (firstDay.getDay() - i)
        )
    )
  );

  // days from current month
  dates.push(
    ...Array.from(
      { length: daysInCurrentMonth },
      (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1)
    )
  );

  // dates from next month
  dates.push(
    ...Array.from(
      { length: 42 - dates.length }, // 6 rows x 7 columns = 42 total cells
      (_, i) => new Date(date.getFullYear(), date.getMonth() + 1, i + 1)
    )
  );

  return dates;
}

export { weekdayNames, monthNames };

/* Time related exports */
export function getTimeWheel(
  level: "hour" | "minute" | "second",
  step: number
): string[] {
  switch (level) {
    case "hour":
      return Array.from({ length: 12 / step }, (_, i) => String(i * step));
    case "minute":
      return Array.from({ length: 60 / step }, (_, i) => String(i * step));
    case "second":
      return Array.from({ length: 60 / step }, (_, i) => String(i * step));
    default:
      return [];
  }
}

type Meridiem = "AM" | "PM";

export function getMeridiem(date: Date): Meridiem {
  return date.getHours() <= 11 ? "AM" : "PM";
}

/**
 * getHoursOnChangeMeridiem returns the new hour value when applying a new meridiem value, which either adds +12 or -12, or nil effect, depending on the current hour and new meridiem being set
 * @param hour The current hour, 0-23
 * @param newMeridiem The new meridiem being applied
 * @return the hour value after meridiem change has taken place
 */
// utility function to
export function getHoursOnChangeMeridiem(
  hours: number,
  newMeridiem: Meridiem
): number {
  if (hours <= 11 && newMeridiem === "PM") {
    hours += 12;
  }
  if (hours >= 11 && newMeridiem === "AM") {
    hours -= 12;
  }
  return hours;
}

/**
 * getDateToPrecision provides the current date up to a specified time precision.
 * @param precision TimePrecision or undefined, if left undefined than only the date is returned with no time values (hours, minutes, seconds, etc. will be zero)
 * @return current date, up to a precision
 */
export function getTodayDateToPrecision(precision?: TimePrecision | undefined) {
  const p = precision ?? -1;
  const today = new Date();
  if (p < TimePrecision.Second) {
    today.setSeconds(0, 0);
  }
  if (p < TimePrecision.Minute) {
    // 1
    today.setMinutes(0);
  }
  if (p < TimePrecision.Hour) {
    today.setHours(0);
  }
  return today;
}
