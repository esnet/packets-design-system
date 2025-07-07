import React, { useEffect, useImperativeHandle } from "react";

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
  disabled = true,
  defaultValue = "",
  defaultOptions = [],
  options = [],
  ref,
  selectedOptionsRef,
  onSelectedOptionsChange,
  ...props
}) => {
  // Logic to handle the selected options parent components can access them
  const [selectedOptions, setSelectedOptions] =
    React.useState<ESInputTypeaheadOptionType[]>(defaultOptions);
  useImperativeHandle(selectedOptionsRef, () => selectedOptions, [
    selectedOptions,
  ]);
  useEffect(() => {
    if (onSelectedOptionsChange) {
      onSelectedOptionsChange(selectedOptions);
    }
  }, [selectedOptions]);

  // Logic to handle handle the current typeahead value
  const [currentValue, setCurrentValue] = React.useState(
    defaultValue as string
  );
  const [filteredOptions, setFilteredOptions] =
    React.useState<ESInputTypeaheadOptionType[]>(options);
  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentValue(event.target.value);

    // we handle onChange events here first, before filtering,
    // in case the onChange handler modifies the options prop in some way
    if (props.onChange) {
      props.onChange(event);
    }

    const token = event.target.value.toLowerCase().trim();
    if (!token) {
      // if there is no token, pass all options
      setFilteredOptions(options);
    } else {
      // if the option ID or, if it exists, the option value matches the token, pass it
      setFilteredOptions(
        options.filter(
          (option) =>
            option.value && String(option.value).toLowerCase().includes(token)
        )
      );
    }
  };

  // Logic to handle if the input element is being focused, which controls if typeahead options are shown
  const [inputFocused, _setInputFocused] = React.useState(false);
  const setInputFocused = disabled ? () => {} : _setInputFocused;
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const onFocus = () => setInputFocused(true);
  const onBlurCapture: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setInputFocused(false);
    }
  };

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
      onFocus={onFocus}
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
            value={currentValue}
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
            <strong>{currentValue}</strong>
            &quot;
          </span>
          <div>
            {filteredOptions.map((option) => (
              <ESInputTypeaheadOption
                onClick={() => {
                  if (
                    selectedOptions.some(
                      (selectedOption) => selectedOption.id === option.id
                    )
                  ) {
                    // if the selected options already includes this option, remove it
                    setSelectedOptions(
                      selectedOptions.filter(
                        (selectedOption) => selectedOption.id !== option.id
                      )
                    );
                  } else {
                    // selected options doesn't include this option, add it
                    setSelectedOptions([...selectedOptions, option]);
                  }
                  inputRef.current?.focus();
                }}
                selected={selectedOptions.some(
                  (selectedOption) => selectedOption.id === option.id
                )}
                token={currentValue}
                key={option.id}
                optionData={option}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

ESInputTypeahead.displayName = "ESInputTypeahead";

export default ESInputTypeahead;
