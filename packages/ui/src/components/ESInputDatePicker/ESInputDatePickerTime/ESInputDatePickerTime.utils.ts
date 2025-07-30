import { TimePrecision } from "./ESInputDatePickerTime.types";

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
