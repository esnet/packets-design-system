import React from "react";
import { ESInputTypeaheadOptionProps } from "./ESInputTypeahead.types";

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

const ESInputTypeaheadOption = ({
  selected,
  token,
  onClick,
  optionData,
}: ESInputTypeaheadOptionProps) => {
  const { id, value } = optionData;

  let text;
  if (typeof value === "string") {
    const out = matchToken(value, token);
    if (!out) {
      console.log(out);
      text = value;
    } else {
      const [before, match, after] = out;
      console.log(before, "|", match, "|", after);
      text = (
        <>
          {before}
          <strong>{match}</strong>
          {after}
        </>
      );
    }
  } else {
    text = value;
  }

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      className={`${styles.ESInputTypeaheadOption}`}
    >
      {selected ? <Check className={styles.checked} /> : <Square />}
      <span>{text}</span>
    </div>
  );
};

export default ESInputTypeaheadOption;
