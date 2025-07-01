import React, { useState } from "react";

import styles from "./ESInputNumber.module.css";
import { ESInputNumberProps } from "./ESInputNumber.types";
import ESInputText from "../ESInputText";
import { Minus, Plus } from "lucide-react";

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
const boundNumber = (min: number, max: number) => {
  return (value: number): number => {
    return Math.min(Math.max(value, min), max);
  };
};

/**
 * ESInputSearch Component
 *
 * @param {ESInputNumberProps} props
 * @returns {React.ReactElement}
 */
const ESInputNumber: React.FC<ESInputNumberProps> = ({
  variant = "default",
  error = false,
  defaultValue = "0",
  min,
  max,
  step,
  ...props
}) => {
  const minValue = parseNumber(min, -Infinity);
  const maxValue = parseNumber(max, Infinity);
  const stepValue = parseNumber(step, 1);
  const bound = boundNumber(minValue, maxValue);

  const [numValue, setNumValue] = useState<number>(
    bound(parseNumber(defaultValue))
  );
  const [_value, _setValue] = useState<string>(String(numValue));
  const [_error, setError] = useState(false);

  const addValue = (amount: number) => {
    const value = bound(numValue + amount);
    _setValue(String(value));
    setNumValue(value);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseNumber(event.target.value);
    _setValue(event.target.value);
    setNumValue(bound(newValue));

    if (props.onChange) {
      props.onChange(event);
    }
  };

  // set value back to a valid value when focusing out of element
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    _setValue(String(numValue));

    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  const actionButton = [
    <Plus key="increment" onClick={() => addValue(stepValue)} />,
    <Minus key="decrement" onClick={() => addValue(-stepValue)} />,
  ];

  return (
    <ESInputText
      {...props}
      type="number"
      value={_value}
      variant={variant}
      error={error || _error}
      className={`${styles.ESInputNumber}`}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      onBlur={onBlur}
      actionButtons={actionButton}
    />
  );
};

ESInputNumber.displayName = "ESInputSearch";

export default ESInputNumber;
