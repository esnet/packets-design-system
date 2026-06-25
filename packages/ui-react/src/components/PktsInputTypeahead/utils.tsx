import React from "react";

/**
 * Given a string and a token, return a React node bolding the token inside of the string.
 */
export function boldTokenInString(str: string, token: string): React.ReactNode {
  if (token === "") return str;

  const index = str.toLowerCase().indexOf(token.toLowerCase());
  if (index === -1) return str;

  const before = str.slice(0, index);
  const match = str.slice(index, index + token.length);
  const after = str.slice(index + token.length);

  return (
    <>
      {before}
      <strong>{match}</strong>
      {after}
    </>
  );
}
