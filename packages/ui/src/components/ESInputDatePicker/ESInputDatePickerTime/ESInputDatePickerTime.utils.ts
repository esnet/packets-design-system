import {
  ESInputDatePickerTimeSettings,
  Meridiem,
  Range,
  TimePrecision,
} from "./ESInputDatePickerTime.types";

export function getTimeWheel(
  precision: TimePrecision,
  min: number = defaultSettings[precision].min,
  max: number = defaultSettings[precision].max,
  step: number = defaultSettings[precision].step
): string[] {
  if (step <= 0) return [];

  const length = Math.floor(Math.abs(max - min) / Math.abs(step)) + 1;
  switch (precision) {
    case "hour":
      return Array.from({ length }, (_, i) => String(min + i * step));
    case "minute":
      return Array.from({ length }, (_, i) => String(min + i * step));
    case "second":
      return Array.from({ length }, (_, i) => String(min + i * step));
    default:
      return [];
  }
}

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
 * Returns the current date, with zeroed out hour, minutes, seconds, and milliseconds
 */
export function getCurrentDateWithoutTime(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export const defaultSettings = {
  format: "12-hour" as Required<ESInputDatePickerTimeSettings>["format"],
  hour: { min: 0, max: 11, step: 1 },
  minute: { min: 0, max: 59, step: 5 },
  second: { min: 0, max: 59, step: 5 },
};

function mergeRange(
  defaultRange: Range,
  userRange?: boolean | Range
): boolean | Range {
  if (typeof userRange === "boolean") return userRange;

  const merged: Range = { ...defaultRange };
  if (userRange) {
    for (const key of Object.keys(defaultRange) as (keyof Range)[]) {
      if (userRange[key] !== undefined) {
        merged[key] = userRange[key];
      }
    }
  }
  return merged;
}

export function mergeSettings(
  propSettings?: ESInputDatePickerTimeSettings
): Required<ESInputDatePickerTimeSettings> {
  return {
    format: propSettings?.format ?? defaultSettings.format,
    hour: mergeRange(defaultSettings.hour as Range, propSettings?.hour),
    minute: mergeRange(defaultSettings.minute as Range, propSettings?.minute),
    second: mergeRange(defaultSettings.second as Range, propSettings?.second),
  };
}
