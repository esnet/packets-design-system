import React from "react";
import clsx from "clsx";
import styles from "./ESInputSelect.module.css";
import { ESInputSelectProps } from "./ESInputSelect.types";
import ESIcon from "../ESIcon";
import useControllableState from "../../lib/hooks/useControllableState";
import usePopupState from "../../lib/hooks/usePopupState";

/**
 * ESInputSelect Component
 *
 * If there is no value or default value provided, the rendered text will default to "Select an option".
 *
 * @param {ESInputSelectProps} props
 * @returns {React.ReactElement}
 */
export function ESInputSelect({
  className,
  disabled,
  variant = "primary",
  error,
  options,
  value,
  defaultValue = "",
  onChange,
  ...props
}: ESInputSelectProps) {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = usePopupState(
    anchorRef,
    optionsRef,
    false,
    "active",
  );

  const [selectedOption, setSelectedOption] = useControllableState<string>({
    value,
    defaultValue,
    onChange,
  });

  const dropdownOptions = React.useMemo(() => {
    return options.map((option, i) => {
      const selected = selectedOption === option;
      return (
        <button
          className={styles.dropdownOption}
          key={"select-option-" + i}
          type="button"
          role="option"
          aria-selected={selected}
          onClick={(e) => {
            setSelectedOption(option);
            setDropdownOpen(false);
            e.stopPropagation();
          }}
        >
          {selected ? (
            <ESIcon name="check" className={styles.checked} />
          ) : (
            <ESIcon name="square" />
          )}
          <span className={clsx(styles.optionLabel)}>{option}</span>
        </button>
      );
    });
  }, [options, selectedOption]);

  return (
    <div
      className={clsx(
        styles.ESInputSelect,
        variant && styles[variant],
        error && styles.error,
        disabled && styles.disabled,
        className,
      )}
      aria-disabled={disabled}
    >
      <div
        ref={anchorRef}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        role="combobox"
        tabIndex={0}
        className={`${styles.inputBox}`}
      >
        <input
          type="hidden"
          style={{ display: "none" }}
          name={props.name}
          value={selectedOption}
          defaultValue={defaultValue}
        />
        <span className={styles.optionLabel}>
          {selectedOption || "Select an option"}
        </span>
        {dropdownOpen ? (
          <ESIcon
            name="chevron-up"
            className={clsx(styles.dropdownIcon, styles[variant])}
          />
        ) : (
          <ESIcon
            name="chevron-down"
            className={clsx(styles.dropdownIcon, styles[variant])}
          />
        )}
      </div>

      {!disabled && dropdownOpen && (
        <div
          ref={optionsRef}
          role="listbox"
          aria-label="Input Select Options"
          className={`${styles.dropdown}`}
        >
          {options.length === 0 && (
            <span className={styles.noOptionsLabel}>No options provided.</span>
          )}
          {dropdownOptions}
        </div>
      )}
    </div>
  );
}

ESInputSelect.displayName = "ESInputSelect";

export default ESInputSelect;
