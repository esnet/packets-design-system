/**
 * Format Date objects into MM/DD/YYYY format
 * @param date Date object
 * @returns
 */
export function formatDate(date: Date): string {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  return `${mm < 10 ? "0" + mm : mm}/${dd < 10 ? "0" + dd : dd}/${yyyy}`;
}

/**
 * Format Date objects into HH:MM:SS AM/PM format
 * @param date Date object
 * @returns
 */
export function formatTime(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${meridiem}`;
}

export function formatValue(
  value: Date | undefined,
  type: "date" | "time" | "datetime",
): string {
  if (!value) return "";
  switch (type) {
    case "time":
      return formatTime(value);
    case "datetime":
      return `${formatDate(value)} ${formatTime(value)}`;
    case "date":
    default:
      return formatDate(value);
  }
}
