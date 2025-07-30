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
