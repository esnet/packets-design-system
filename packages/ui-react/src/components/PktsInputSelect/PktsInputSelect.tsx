import React, { useMemo } from "react";
import clsx from "clsx";
import styles from "./PktsInputSelect.module.css";
import { PktsInputSelectProps } from "./PktsInputSelect.types";
import useControllableState from "../../lib/hooks/useControllableState";
import usePopupState from "../../lib/hooks/usePopupState";
import { ChevronUp, ChevronDown } from "lucide-react";

/**
 * Input Select Component.
 *
 * This component mimics HTML select single select, and can be controlled or uncontrolled.
 * For multi-select, see `PktsInputTypeahead`.
 *
 * Underneath the hood, no select tag or option tags are used, but rather a div with a popup containing buttons,
 * utilizing a synthetic select change event that is passed to the `onChange` handler.
 * The synthetic event ONLY includes the target (the equivalent of the select element),
 * which includes the `selectedOptions` attribute, and the event type ("change").
 *
 * @param {PktsInputSelectProps} props
 * @returns {React.ReactElement}
 */
export function PktsInputSelect({
  variant = "primary",
  className,
  disabled,
  error,
  placeholder = "Select an option",
  name,
  value,
  defaultValue = "",
  onChange,
  children,
}: PktsInputSelectProps) {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = usePopupState(
    anchorRef,
    optionsRef,
    false,
    "active",
  );

  // maintain a option value to option text (children) in order to render the correct text on the label
  const valueToText = useMemo(() => {
    const map: { [k: string]: string } = {};
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const value: string = child.props.value ?? child.props.children;
      map[value] = child.props.children;
    });
    return map;
  }, [children]);

  // the underlying value that is tracked
  const [selectedValue, setSelectedValue] = useControllableState<string>({
    value,
    defaultValue,
  });

  // map the children to add properties to it
  const options = React.useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (
          !React.isValidElement(child) ||
          // @ts-ignore
          child.type?.displayName !== "PktsInputOption"
        )
          return;

        const value = child.props.value ?? child.props.children;
        return React.cloneElement(child as React.ReactElement<any>, {
          selected: selectedValue === value,
          value: value,
          onClick: () => {
            setSelectedValue(value);
            setDropdownOpen(false);

            if (!optionsRef?.current) return;
            // create a synthetic event to point to our options, and pass it to the onChange
            // so PktsInputSelect can mimic select's onChange behavior
            const target = Object.create(optionsRef.current);
            target.value = value;
            target.name = name;
            target.selectedOptions = {
              value,
              selected: true,
              textContent: child.props.children,
            };
            const syntheticEvent = {
              target: target,
              type: "change",
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange?.(syntheticEvent);
          },
        });
      }) ?? [],
    [children, selectedValue, onChange, name],
  );

  return (
    <div
      className={clsx(
        styles.PktsInputSelect,
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
        onClick={(e) => e.preventDefault()}
      >
        {selectedValue ? (
          <span className={styles.optionLabel}>
            {valueToText[selectedValue] ?? placeholder}
          </span>
        ) : (
          <span className={clsx(styles.optionLabel, "footer")}>
            {placeholder}
          </span>
        )}
        {dropdownOpen ? (
          <ChevronUp className={clsx(styles.dropdownIcon, styles[variant])} />
        ) : (
          <ChevronDown className={clsx(styles.dropdownIcon, styles[variant])} />
        )}
      </div>
      {/* Hidden input for storing the value, making it accessible to FormData. */}
      <input
        key={`select-input-hidden-${value}`}
        type="hidden"
        style={{ display: "none" }}
        name={name}
        value={value}
      />

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
          {options}
        </div>
      )}
    </div>
  );
}

PktsInputSelect.displayName = "PktsInputSelect";

export default PktsInputSelect;
