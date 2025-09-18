import React, { useMemo } from "react";
import { DropdownOptionProps as ESDropdownOptionProps } from "./ESInputTypeahead.types";

import styles from "./ESInputTypeahead.module.css";
import { Check, Square } from "lucide-react";

function matchToken(
  str: string,
  token: string
): [string, string, string] | null {
  const index = str.toLowerCase().indexOf(token.toLowerCase());
  if (index === -1) return null;
  if (token === "") return null;

  const before = str.slice(0, index);
  const match = str.slice(index, index + token.length);
  const after = str.slice(index + token.length);

  return [before, match, after];
}

const ESDropdownOption = ({
  selected,
  token,
  onClick,
  optionData,
}: ESDropdownOptionProps) => {
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
    >
      {selected ? unselectedIcon : selectedIcon}
      <span className={styles.optionLabel}>{text}</span>
    </button>
  );
};

export default ESDropdownOption;
