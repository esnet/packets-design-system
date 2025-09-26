import React from "react";
import clsx from "clsx";
import styles from "./ESInputSelect.module.css";
import { ESInputSelectProps } from "./ESInputSelect.types";
import useOutsideClick from "../../lib/hooks/useOutsideClick";
import ESIcon from "../ESIcon";
import useControllableState from "../../lib/hooks/useControllableState";

/**
 * ESInputSelect Component
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
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  // if user clicks outside the wrapping div, close the dropdown
  useOutsideClick(containerRef, () => setDropdownOpen(false));
  const openDropdown = () => {
    if (!disabled) setDropdownOpen(true);
  };
  const closeDropdown = () => setDropdownOpen(false);

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
            closeDropdown();
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
      onFocus={openDropdown}
      onClick={openDropdown}
      tabIndex={0}
      className={clsx(
        styles.ESInputSelect,
        variant && styles[variant],
        error && styles.error,
        disabled && styles.disabled,
        className
      )}
      ref={containerRef}
      aria-disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={dropdownOpen}
      role="textbox"
    >
      <div className={`${styles.inputBox}`}>
        <input
          type="hidden"
          style={{ display: "none" }}
          name={props.name}
          value={selectedOption}
          defaultValue={defaultValue}
        />
        <span className={styles.selectedOptionLabel}>
          {selectedOption || "Select an option"}
        </span>
        {dropdownOpen ? (
          <ESIcon
            name="chevron-up"
            className={clsx(styles.dropdownIcon, styles[variant])}
            onClick={(e) => {
              e.stopPropagation();
              closeDropdown();
            }}
          />
        ) : (
          <ESIcon
            name="chevron-down"
            className={clsx(styles.dropdownIcon, styles[variant])}
            onClick={openDropdown}
          />
        )}
      </div>

      {dropdownOpen && (
        <div
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
