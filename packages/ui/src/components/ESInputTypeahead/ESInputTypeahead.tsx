import React, { KeyboardEventHandler, useMemo } from "react";

import styles from "./ESInputTypeahead.module.css";
import { boldTokenInString } from "./utils";
import clsx from "clsx";
import useControllableState from "../../lib/hooks/useControllableState";
import ESChip from "../ESChip";
import ESChipGroup from "../ESChipGroup";
import usePopupState from "../../lib/hooks/usePopupState";
import { ESInputTypeaheadProps } from "./ESInputTypeahead.types";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * ESInputTypeahead Component
 *
 * This component mimics HTML select with multi-select capability, and can be controlled or uncontrolled.
 * For single select with a simpler interface, see `ESInputSelect`.
 *
 * Underneath the hood, no select tag or option tags are used, but rather a div with a popup containing buttons,
 * utilizing a synthetic select change event that is passed to the `onChange` handler.
 * The synthetic event ONLY includes the target (the equivalent of the select element),
 * which includes the `selectedOptions` attribute, and the event type ("change").
 *
 * This component differs from the HTML select element (and from `ESInputSelect`) because it manages the value as a list of values,
 * rather than a singular one. For reference, `ESInputSelect`'s value is `string`, while this component is `string[]`.
 *
 * @param {ESInputTypeaheadProps} props
 * @returns {React.ReactElement}
 */
export function ESInputTypeahead({
  variant = "primary",
  error = false,
  disabled = false,
  className,
  placeholder = "Select an option",
  multi = true,
  name,
  value,
  defaultValue = [],
  onChange,
  onSearchChange,
  loading = false,
  children,
}: ESInputTypeaheadProps) {
  /*
   * ESInputTypeahead is composed of three parts (ordered by visual top to bottom appearance)
   * 1) The currently selected options
   * 2) The input for searching through selected options
   * 3) The dropdown for the (filtered) options, to be selected
   */

  // maintain a option value to option text (children) in order to render the correct text on
  // the selected chip based off of value
  const valueToText = useMemo(() => {
    const map: { [k: string]: string } = {};
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const value: string = child.props.value ?? child.props.children;
      map[value] = child.props.children;
    });
    return map;
  }, [children]);

  // 1) state relating to currently selected options
  const [selectedValues, setSelectedValues] = useControllableState<string[]>({
    value,
    defaultValue,
  });

  // factory to produce option click callbacks to add/remove a value from selected values
  const onClickFactory = React.useCallback(
    (value: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      // intentionally focus back on the input search ref for better UX
      if (multi) inputSearchRef.current?.focus();
      // if single select, close the dropdown
      else setDropdownOpen(false);

      // maintain information about the next state
      // attempt to filter out the value from selected values
      let nextSelectedValues = selectedValues.filter(
        (selectedValue) => value !== selectedValue,
      );
      // if filter returns same length (thus same) array, the
      // value was never in it, so add it
      if (nextSelectedValues.length === selectedValues.length) {
        nextSelectedValues = multi ? [...nextSelectedValues, value] : [value];
      }
      setSelectedValues(nextSelectedValues);

      // create a synthetic event to point to our options, and pass it to the onChange
      const target = Object.create(optionsRef.current ?? {});
      target.value = nextSelectedValues;
      target.name = name;
      target.selectedOptions = nextSelectedValues.map((value) => ({
        value,
        selected: true,
        textContent: valueToText[value],
      }));
      const syntheticEvent = {
        target: target,
        type: "change",
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange?.(syntheticEvent);
    },
    [selectedValues, setSelectedValues, name, valueToText, onChange],
  );

  const selectedOptionsChips = useMemo(() => {
    if (!selectedValues || selectedValues.length === 0) return undefined;
    const chips = selectedValues.map((selectedValue) => (
      <ESChip
        onDelete={onClickFactory(selectedValue)}
        rounded={false}
        disabled={disabled}
        key={`typeahead-${name ?? "name"}-option-${selectedValue}`}
      >
        {valueToText[selectedValue] ?? selectedValue}
      </ESChip>
    ));
    return (
      <ESChipGroup className={styles.selectedOptionsWrapper}>
        {chips}
      </ESChipGroup>
    );
  }, [selectedValues, name, valueToText, onClickFactory]);

  // 2) state relating to the typeahead search feature
  const [search, setSearch] = React.useState("");
  const inputSearchRef = React.useRef<HTMLInputElement | null>(null);
  // if there's no search value and backspace is pressed, then pop the last ID
  const onSearchKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    // when there is no search query and backspace is pressed, pop off the last selected
    if (e.key === "Backspace" && search.length === 0) {
      setSelectedValues((prev) => prev.slice(0, -1));
    }
  };

  // 3) dropdown related component to show searched options
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = usePopupState(
    anchorRef,
    optionsRef,
    false,
    "active",
  );

  const options = React.useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (
          !React.isValidElement(child) ||
          // @ts-ignore
          child.type?.displayName !== "ESInputOption"
        )
          return;

        const value = child.props.value ?? child.props.children;
        return React.cloneElement(child as React.ReactElement<any>, {
          selected: selectedValues.includes(value),
          value: value,
          children: boldTokenInString(
            child.props.children,
            search.toLowerCase(),
          ),
          onClick: onClickFactory(value),
        });
      }) ?? [],
    [children, selectedValues, search, onClickFactory],
  );

  const searchedDropdownOptions = useMemo(() => {
    const token = search.toLowerCase().trim();
    // no search query - show all
    if (!token) return options;

    return options.filter((option) => {
      return option.props.value.toLowerCase().includes(token);
    });
  }, [search, options]);

  const resultsInfo = useMemo(() => {
    if (loading) return "Loading...";
    if (options.length === 0) return "No results available.";
    if (search === "")
      return "Showing all results. Type in the input above to search results.";

    return (
      <>
        <strong>{searchedDropdownOptions.length}</strong> results for &quot;
        <strong>{search}</strong>
        &quot;
      </>
    );
  }, [options, search, loading]);

  return (
    <div
      className={clsx(
        styles.ESInputTypeahead,
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
        className={`${styles.inputBox}`}
      >
        <div className={clsx(styles.optionsAndInputWrapper)}>
          {/* Input for the typeahead search */}
          <input
            disabled={disabled}
            placeholder={
              dropdownOpen
                ? "Type to search for an option"
                : (placeholder ??
                  (multi ? "Select options" : "Select an option"))
            }
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              onSearchChange?.(e);
            }}
            name={`${name}-search`}
            ref={inputSearchRef}
            value={search}
            onKeyDown={onSearchKeyDown}
            className={clsx(
              styles.searchInput,
              styles[variant],
              selectedValues.length === 0 && styles.noOptionsSelected,
            )}
            autoComplete="off"
          />

          {selectedOptionsChips}

          {/* Hidden input for storing the values, making it accessible to FormData. */}
          {selectedValues.map((value) => (
            <input
              key={`typeahead-input-hidden-${value}`}
              type="hidden"
              style={{ display: "none" }}
              name={name}
              value={value}
            />
          ))}
        </div>

        {dropdownOpen ? (
          <ChevronUp className={clsx(styles.dropdownIcon, styles[variant])} />
        ) : (
          <ChevronDown className={clsx(styles.dropdownIcon, styles[variant])} />
        )}
      </div>

      {!disabled && dropdownOpen && (
        <div
          ref={optionsRef}
          role="listbox"
          aria-label="Typeahead Dropdown Options"
          className={`${styles.dropdown}`}
        >
          <span className={styles.resultInfo}>{resultsInfo}</span>
          {loading ? null : (
            <div className={styles.dropdownOptionsWrapper}>
              {searchedDropdownOptions}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

ESInputTypeahead.displayName = "ESInputTypeahead";

export default ESInputTypeahead;
