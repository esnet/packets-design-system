// Utility function to take a value and definitely returns a number (that isn't NaN)
const parseNumber = (value: unknown, defaultValue: number = 0): number => {
  const numValue = Number(value);

  if (isNaN(numValue)) {
    return defaultValue;
  } else {
    return numValue;
  }
};

// Utility function to bind a number between a minimum and maximum bound
const boundNumber = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const getPrecision = (value: any) => {
  const str = String(value);
  if (!str.includes(".")) return 0;
  return str.split(".")[1].length;
};

const roundToPrecision = (num: number, precision: number) => {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
};

export { parseNumber, boundNumber, getPrecision, roundToPrecision };
