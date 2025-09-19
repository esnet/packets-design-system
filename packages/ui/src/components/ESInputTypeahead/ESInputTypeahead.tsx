import React, { useMemo, useState } from "react";

import styles from "./ESInputTypeahead.module.css";
import {
  OptionType,
  ESInputTypeaheadProps,
  OptionId,
} from "./ESInputTypeahead.types";

import ESDropdownOption from "./ESInputTypeaheadOption";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
import useControllableState from "../../lib/hooks/useControllableState";
import useOutsideClick from "../../lib/hooks/useOutsideClick";
import ESChip from "../ESChip";
import ESChipGroup from "../ESChipGroup";
import ESIcon from "../ESIcon";

/**
 * ESInputTypeahead Component
 *
 * The typeahead consists of two HTML input parts: the selected options (the value of main interest) and the search value
 *
 * This component mimics HTML input components as closely as possible, being able to be controlled or uncontrolled based on it's given props.
 *
 * If uncontrolled, the selected options can be acquired via ref, be it on form submission or a ref passed in.
 * A hidden input with the name matching the given prop `name` has the `value` of the current option's values, comma separated.
 * A text input with the name matching `${name}-typeahead-search` matching the given prop `name` has the `value` of the current search value.
 *
 * TODO: Add functionality where pressing backspace pops selected option components
 * TODO: Write tests
 * TODO: ARIA the wrapping div
 *
 * @param {ESInputTypeaheadProps} props
 * @returns {React.ReactElement}
 */
export function ESInputTypeahead({
  variant = "primary",
  error = false,
  disabled = false,
  options,
  selectedIdsValue,
  defaultSelectedIdsValue = [],
  onSelectedOptionsChange,
  searchValue,
  defaultSearchValue = "",
  onSearchChange,
  ...props
}: ESInputTypeaheadProps) {
  /*
   * ESInputTypeahead is composed of three parts (ordered by visual top to bottom appearance)
   * 1) The currently selected options
   * 2) The input for searching through selected options
   * 3) The dropdown for the (filtered) options, to be selected
   *
   * This component can be controlled or uncontrolled.
   * During uncontrolled behavior, this component tries it's best to mimic an HTML input component,
   * and you can fetch it's value with a ref to a hidden input storing the value.
   */

  // transform the options array into a map with keys that are useful when creating a set of selected keys
  const optionsMap = useMemo(
    () => Object.fromEntries(options.map((option) => [option.id, option])),
    [options]
  );

  // 1) state relating to currently selected options
  // I once considered using a set (JS's Set object) to represent the selectedOptions
  // but after experimentation, I've found Sets to be awful (and slower dependong on size) to arrays
  // and in React? Where you have to copy the previous state to the new state? Even worse. Absolute disdain.
  const [selectedOptionIds, setSelectedOptionIds] = useControllableState<
    OptionId[]
  >({
    value: selectedIdsValue,
    defaultValue: defaultSelectedIdsValue,
    onChange: onSelectedOptionsChange,
  });

  const toggleOptionFactory = React.useCallback(
    (option: OptionType, selected: boolean) => () => {
      setSelectedOptionIds((prev) => {
        if (selected) {
          return prev.filter((optionId) => optionId !== option.id);
        }
        return [...prev, option.id];
      });
      inputSearchRef.current?.focus();
    },
    []
  );

  const selectedOptionsComponent = useMemo(() => {
    if (selectedOptionIds.length === 0) {
      return undefined;
    }
    const options = selectedOptionIds
      .map((optionId) => optionsMap[optionId] ?? undefined)
      .filter((option) => option !== undefined);
    const chips = options.map((option, i) => (
      <ESChip
        onDelete={toggleOptionFactory(option, true)}
        rounded={false}
        {...option.chipProps}
        key={`typeahead-option-${option.id}-${i}`}
      >
        {option.value}
      </ESChip>
    ));
    return (
      <ESChipGroup className={styles.selectedOptionsWrapper}>
        {chips}
      </ESChipGroup>
    );
  }, [selectedOptionIds]);

  // 2) state relating to the typeahead search feature
  const [search, setSearch] = useControllableState<string>({
    value: searchValue,
    defaultValue: defaultSearchValue,
    onChange: onSearchChange,
  });
  const inputSearchRef = React.useRef<HTMLInputElement | null>(null);

  // 3) dropdown related component to show searched options
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  // if user clicks outside the wrapping div, close the dropdown
  useOutsideClick(containerRef, () => setDropdownOpen(false));
  const openDropdown = () => {
    if (!disabled) setDropdownOpen(true);
  };
  const closeDropdown = () => setDropdownOpen(false);

  const searchedDropdownOptions = useMemo(() => {
    const token = search.toLowerCase().trim();
    if (!token) {
      return options;
    }
    // TODO: regex this
    return options.filter((option) =>
      option.value.toLowerCase().includes(token)
    );
  }, [search, options]);

  const dropdownOptionsComponent = useMemo(() => {
    const token = search.toLowerCase().trim();
    const dropdownOptions = searchedDropdownOptions.map((option, i) => {
      const selected = selectedOptionIds.some(
        (optionId) => optionId === option.id
      );
      const onOptionClick = toggleOptionFactory(option, selected);
      return (
        <ESDropdownOption
          onClick={onOptionClick}
          selected={selected}
          token={token}
          key={"typeahead-option-" + i}
          optionData={option}
        />
      );
    });
    return (
      <div className={styles.dropdownOptionsWrapper}>{dropdownOptions}</div>
    );
  }, [selectedOptionIds, searchedDropdownOptions]);

  const resultsInfo = useMemo(() => {
    if (options.length === 0) {
      return "No results available.";
    }
    if (search === "") {
      return "Showing all results. Type in the input above to search results.";
    }
    return (
      <>
        <strong>{searchedDropdownOptions.length}</strong> results for &quot;
        <strong>{search}</strong>
        &quot;
      </>
    );
  }, [options, search]);

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
      aria-disabled={disabled}
    >
      <div className={`${styles.inputBox}`}>
        <div className={clsx(styles.optionsAndInputWrapper)}>
          {selectedOptionsComponent}

          {/* Hidden input for storing the raw value options as an array of text values. */}
          <input
            {...props}
            type="hidden"
            value={selectedOptionIds
              .map((optionId) => optionsMap[optionId] ?? undefined)
              .filter((value) => value !== undefined)
              .join(",")}
          />

          {/* Input for the typeahead search */}
          <input
            name={props.name ? `${props.name}-typeahead-search` : undefined}
            disabled={disabled}
            placeholder={props.placeholder}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            ref={inputSearchRef}
            value={search}
            className={clsx(
              styles.searchInput,
              selectedOptionIds.length === 0 && styles.noOptionsSelected
            )}
          />
        </div>

        {dropdownOpen ? (
          <ESIcon
            name="chevron-down"
            className={styles.dropdownIcon}
            onClick={(e) => {
              e.stopPropagation();
              closeDropdown();
            }}
          />
        ) : (
          <ESIcon
            name="chevron-up"
            className={styles.dropdownIcon}
            onClick={openDropdown}
          />
        )}
      </div>

      {dropdownOpen && (
        <div tabIndex={-1} className={`${styles.dropdown}`}>
          <hr />
          <span className={styles.resultInfo}>{resultsInfo}</span>
          {dropdownOptionsComponent}
        </div>
      )}
    </div>
  );
}

ESInputTypeahead.displayName = "ESInputTypeahead";

export default ESInputTypeahead;
