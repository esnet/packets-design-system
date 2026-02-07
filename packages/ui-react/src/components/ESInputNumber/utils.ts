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

export { parseNumber, boundNumber };
