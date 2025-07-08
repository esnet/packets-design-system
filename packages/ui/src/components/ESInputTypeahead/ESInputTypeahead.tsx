import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";

import styles from "./ESInputTypeahead.module.css";
import {
  ESInputTypeaheadOptionType,
  ESInputTypeaheadProps,
} from "./ESInputTypeahead.types";

import ESInputTypeaheadOption from "./ESInputTypeaheadOption";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * ESInputTypeahead Component
 *
 * TODO: Add chip as selected option component
 * TODO: Add functionality where pressing backspace pops selected option components
 * TODO: Write tests
 * TODO: Write stories and documentation
 *
 * @param {ESInputTypeaheadProps} props
 * @returns {React.ReactElement}
 */
const ESInputTypeahead: React.FC<ESInputTypeaheadProps> = ({
  className = "",
  variant = "default",
  error = false,
  disabled = false,
  defaultValue = "",
  defaultOptions = [],
  options = [],
  ref,
  selectedOptionsRef,
  onSelectedOptionsChange,
  ...props
}) => {
  // Logic to handle the selected options, and how parent components can access them and changes in them
  const [selectedOptions, setSelectedOptions] =
    React.useState<ESInputTypeaheadOptionType[]>(defaultOptions);
  useImperativeHandle(selectedOptionsRef, () => selectedOptions, [
    selectedOptions,
  ]);
  useEffect(() => {
    if (onSelectedOptionsChange) {
      onSelectedOptionsChange(selectedOptions);
    }
  }, [selectedOptions, onSelectedOptionsChange]);

  // Logic to handle handle the current typeahead value
  const [inputValue, setInputValue] = React.useState(defaultValue as string);
  const filteredOptions = React.useMemo(() => {
    const token = inputValue.toLowerCase().trim();
    // if no token is specified, act as if there is no filter, show all options
    if (!token) {
      return options;
    }
    return options.filter((option) =>
      option.value?.toString().toLowerCase().includes(token)
    );
  }, [inputValue, options]);

  const _onChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      setInputValue(event.target.value);
      if (props.onChange) {
        props.onChange(event);
      }
    },
    [props.onChange]
  );

  const toggleOption = useCallback(
    (option: ESInputTypeaheadOptionType, isSelected: boolean) => {
      setSelectedOptions((prevSelected) => {
        if (isSelected) {
          return prevSelected.filter((selected) => selected.id !== option.id);
        } else {
          return [...prevSelected, option];
        }
      });
      inputRef.current?.focus();
    },
    []
  );

  const filteredOptionsComponents = useMemo(() => {
    return filteredOptions.map((option) => {
      const isSelected = selectedOptions.some(
        (selected) => selected.id === option.id
      );
      const onOptionClick = () => toggleOption(option, isSelected);
      return (
        <ESInputTypeaheadOption
          onClick={onOptionClick}
          selected={isSelected}
          token={inputValue}
          key={option.id}
          optionData={option}
        />
      );
    });
  }, [filteredOptions, selectedOptions, inputValue, toggleOption]);

  // Logic to handle if the input element is being focused, which controls if typeahead options are shown
  const [inputFocused, _setInputFocused] = React.useState(false);
  const setInputFocused = disabled ? () => {} : _setInputFocused;
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const focus = useCallback(() => setInputFocused(true), []);
  const onBlurCapture = useCallback<React.FocusEventHandler<HTMLDivElement>>(
    (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setInputFocused(false);
      }
    },
    []
  );

  const baseClasses = [
    styles.ESInputTypeahead,
    styles[variant],
    error ? styles.error : "",
    disabled ? styles.disabled : "",
    inputFocused ? styles["focused"] : "",
    className,
  ].join(" ");

  return (
    <div
      onFocus={focus}
      onClick={focus}
      onBlurCapture={onBlurCapture}
      className={baseClasses}
    >
      <div className={`${styles.ESInputTypeaheadTop}`}>
        <div className={`${styles.ESInputTypeaheadInputContainer}`}>
          <div>
            {selectedOptions.map((option) => (
              /* TODO: replace with ESChip element */
              <div key={option.id}>
                {option.id}: {option.value}
              </div>
            ))}
          </div>

          <input
            {...props}
            ref={(el) => {
              // complicated silly way to allow this input to have 2 refs, one internal one external from props
              inputRef.current = el;
              if (typeof ref === "function") {
                ref(el);
              } else if (ref && "current" in ref) {
                (
                  ref as React.MutableRefObject<HTMLInputElement | null>
                ).current = el;
              }
            }}
            disabled={disabled}
            onChange={_onChange}
            type="text"
            value={inputValue}
          />
        </div>
        {inputFocused ? (
          <ChevronUp
            className={styles.disabled}
            onClick={() => setInputFocused(false)}
          />
        ) : (
          <ChevronDown
            className={styles.disabled}
            onClick={() => setInputFocused(true)}
          />
        )}
      </div>

      {inputFocused && (
        <div tabIndex={-1} className={`${styles.ESInputTypeaheadBottom}`}>
          <hr />
          <span>
            <strong>{filteredOptions.length}</strong> results for &quot;
            <strong>{inputValue}</strong>
            &quot;
          </span>
          <div>{filteredOptionsComponents}</div>
        </div>
      )}
    </div>
  );
};

ESInputTypeahead.displayName = "ESInputTypeahead";

export default ESInputTypeahead;
