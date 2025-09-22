/* eslint-disable no-unused-vars */
import React, { SetStateAction, useEffect } from "react";

/**
 * Hook that allows a state to be either controlled or uncontrolled.
 * Useful for custom inputs (ESInputTypeahead, ESInputDate) that
 * require custom functionality but must work whether they are controlled or not.
 *
 * Think of how HTML input works regardless if it is controlled or uncontrolled.
 * This hook mimics that behavior by maintaining an internal state.
 */
function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  /** Default value that is set once. */
  defaultValue: T;
  /** Value that can be controlled or uncontrolled.  */
  value?: T;
  /** Calback when the value is changed. */
  onChange?: (value: T) => void;
}) {
  const controlled = value !== undefined;
  // internal value and set value when uncontrolled
  const [_value, _setValue] = React.useState<T>(defaultValue);

  const setValue: React.Dispatch<SetStateAction<T>> = React.useCallback(
    (next: SetStateAction<T>) => {
      const prev = controlled ? value : _value;
      if (!controlled) {
        _setValue(next);
      }

      if (!onChange) return;

      // if onChange exists, determine the value to pass into it and call it
      let nextValue;
      if (typeof next === "function") {
        nextValue = (next as (prevState: T) => T)(prev);
      } else {
        nextValue = next;
      }
      onChange(nextValue);
    },
    [controlled, onChange, value, _value]
  );

  return [controlled ? (value as T) : _value, setValue] as const;
}

export default useControllableState;
