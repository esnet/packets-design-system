import React, {
  FC,
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useState,
  useMemo,
} from "react";
import { ESInputSwitchProps } from "./ESInputSwitch.types";

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
  hideIcons = false,
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(initiallyChecked);
  const [isFocused, setIsFocused] = useState(false);

  // Composition
  const computedAriaLabel = ariaLabel || label || "";
  const icon = useMemo(() => {
    if (hideIcons === true) {
      return <></>;
    }

    return getIconByCheckedState(isChecked);
  }, [isChecked]);

  const rootClasses = `${styles.ESInputSwitch} 
    ${isDisabled ? styles.isDisabled : ""}
    ${isChecked ? styles.isChecked : ""} 
    ${isFocused ? styles.isFocused : ""} 
    ${className}`;

  // Events
  const _onFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);

    if (typeof onFocus === "function") {
      onFocus(event);
    }
  };

  const _onBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (typeof onBlur === "function") {
      onBlur(event);
    }
  };

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
        <span className={styles.indicatorRail}>
          <input
            aria-label={computedAriaLabel}
            className={styles.inputBox}
            type="checkbox"
            disabled={isDisabled}
            checked={isChecked}
            onChange={_onInputChange}
            onFocus={_onFocus}
            onBlur={_onBlur}
            id={id}
          />
          <span className={styles.indicator} onClick={_onIndicatorClick}>
            <span className={styles.icon}>{icon}</span>
          </span>
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
