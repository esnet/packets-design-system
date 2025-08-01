import React, { useCallback, useMemo, useState } from "react";

import styles from "./ESInputNumber.module.css";
import { ESInputNumberProps } from "./ESInputNumber.types";
import ESInputText from "../ESInputText";
import { Minus, Plus } from "lucide-react";
import { boundNumber, parseNumber } from "./utils";
import { clsx } from "clsx";

/**
 * ESInputSearch Component
 *
 * @param {ESInputNumberProps} props
 * @returns {React.ReactElement}
 */
const ESInputNumber: React.FC<ESInputNumberProps> = ({
  variant = "primary",
  error = false,
  defaultValue = "0",
  onAddClick,
  onMinusClick,
  className,
  min,
  max,
  step,
  ...props
}) => {
  const [minValue, maxValue, stepValue] = useMemo(() => {
    return [
      parseNumber(min, -Infinity),
      parseNumber(max, Infinity),
      parseNumber(step, 1),
    ];
  }, [min, max, step]);

  const [value, setValue] = useState<string>(defaultValue as string);
  const [_error, setError] = useState<boolean>(error);

  const addValue = useCallback(
    (amount: number) => {
      const numValue = parseNumber(value);
      // increment and decrement buttons only work when the value is a valid number
      if (isNaN(numValue)) {
        setError(true);
        return;
      }
      const newValue = boundNumber(numValue + amount, minValue, maxValue);
      setValue(String(newValue));
    },
    [value, minValue, maxValue]
  );

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseNumber(event.target.value);
      setValue(event.target.value);
      setError(isNaN(newValue));

      if (props.onChange) {
        props.onChange(event);
      }
    },
    [props.onChange]
  );

  const increment = useCallback(() => {
    addValue(stepValue);
    if (onAddClick) onAddClick();
  }, [addValue, stepValue, onAddClick]);

  const decrement = useCallback(() => {
    addValue(-stepValue);
    if (onMinusClick) onMinusClick();
  }, [addValue, stepValue, onMinusClick]);

  const actionButton = useMemo(
    () => [
      <Plus key="increment" onClick={increment} />,
      <Minus key="decrement" onClick={decrement} />,
    ],
    [stepValue, addValue]
  );

  const classNames = clsx(styles.ESInputNumber, className);

  return (
    <ESInputText
      {...props}
      type="number"
      value={value}
      variant={variant}
      error={error || _error}
      className={classNames}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      actionButtons={actionButton}
    />
  );
};

ESInputNumber.displayName = "ESInputNumber";

export default ESInputNumber;
