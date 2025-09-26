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

  return (
    <div
      onFocus={openDropdown}
      onClick={openDropdown}
      className={clsx(
        styles.ESInputTypeahead,
        variant && styles[variant],
        error && styles.error,
        disabled && styles.disabled
      )}
      ref={containerRef}
    >
      <div className={`${styles.inputBox}`}>
        <input
          type="hidden"
          style={{ display: "none" }}
          name={props.name}
          value={selectedOption}
          defaultValue={defaultValue}
        />
        <div>{selectedOption || "Select an option"}</div>
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
          {options &&
            options.map((option, i) => {
              return (
                <button key={"select-option-" + i} type="button" role="option">
                  {option}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

ESInputSelect.displayName = "ESInputSelect";

export default ESInputSelect;
