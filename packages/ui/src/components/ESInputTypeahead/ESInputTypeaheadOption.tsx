import React, { useMemo } from "react";
import { DropdownOptionProps as ESTypeaheadOptionProps } from "./ESInputTypeahead.types";

import styles from "./ESInputTypeahead.module.css";
import { Check, Square } from "lucide-react";

function matchToken(
  str: string,
  token: string,
): [string, string, string] | null {
  const index = str.toLowerCase().indexOf(token.toLowerCase());
  if (index === -1) return null;
  if (token === "") return null;

  const before = str.slice(0, index);
  const match = str.slice(index, index + token.length);
  const after = str.slice(index + token.length);

  return [before, match, after];
}

const ESTypeaheadOption = ({
  selected,
  token,
  onClick,
  optionData,
}: ESTypeaheadOptionProps) => {
  const {
    value,
    unselectedIcon = <Check className={styles.checked} />,
    selectedIcon = <Square />,
  } = optionData;

  const text = useMemo(() => {
    const tokenMatch = matchToken(value, token);
    if (!tokenMatch) return value;

    const [before, match, after] = tokenMatch;
    return (
      <>
        {before}
        <strong>{match}</strong>
        {after}
      </>
    );
  }, [token, value]);

  return (
    <button
      onClick={onClick}
      tabIndex={0}
      className={`${styles.dropdownOption}`}
      type="button"
      aria-selected={selected}
      role="option"
    >
      {selected ? unselectedIcon : selectedIcon}
      <span className={styles.optionLabel}>{text}</span>
    </button>
  );
};

export default ESTypeaheadOption;
