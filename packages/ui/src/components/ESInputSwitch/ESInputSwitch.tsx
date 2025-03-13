import React, { FC, ChangeEvent, MouseEvent, useState, useMemo } from "react";
import { ESInputSwitchProps } from "./ESInputSwitch.types";

// @ts-ignore
import styles from "./ESInputSwitch.module.css";
import { getIconByCheckedState } from "./ESInputSwitchUtils";

/**
 * ESInputSwitch Component
 *
 * Display message with alert level styling
 *
 * @param {ESInputSwitchProps} props
 * @returns {React.FunctionComponent}
 */
const ESInputSwitch: FC<ESInputSwitchProps> = ({
  label,
  id = "",
  ariaLabel = "",
  className = "",
  initiallyChecked = false,
  isDisabled = false,
  onChange = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(initiallyChecked);

  // Composition
  const computedAriaLabel = ariaLabel || label || "";
  const icon = useMemo(() => {
    return getIconByCheckedState(isChecked);
  }, [isChecked]);

  const rootClasses = `${styles.inputSwitch} 
    ${isDisabled ? styles.isDisabled : ""}
    ${isChecked ? styles.isChecked : ""} 
    ${className}`;

  // Events
  const _onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);

    if (typeof onChange === "function") {
      onChange(event);
    }
  };

  const _onIndicatorClick = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (isDisabled) {
      return;
    }

    setIsChecked(!isChecked);
  };

  return (
    <span className={rootClasses}>
      <span className={styles.inputWrapper}>
        <input
          aria-label={computedAriaLabel}
          className={styles.inputBox}
          type="checkbox"
          disabled={isDisabled}
          checked={isChecked}
          onChange={_onInputChange}
          id={id}
        />
        <span className={styles.indicator} onClick={_onIndicatorClick}>
          <span className={styles.icon}>{icon}</span>
        </span>
      </span>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </span>
  );
};

ESInputSwitch.displayName = "ESInputSwitch";

export default ESInputSwitch;
