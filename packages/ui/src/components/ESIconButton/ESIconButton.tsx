import React from "react";
import { ESIconButtonProps } from "./ESIconButton.types";

// @ts-ignore
import styles from "./ESIconButton.module.css";

/**
 * ES Icon Button
 *
 * Generic Icon only button component.
 * Can be a link or a button set with the "As" prop
 *
 * @param {ESIconButtonProps} props
 * @returns {React.FunctionComponent}
 */
const ESIconButton = ({
  variant = "secondary",
  className,
  children = "",
  disabled = false,
  square = false,
  ...other
}: ESIconButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${square ? styles["square"] : ""} ${className ? className : ""}`}
      type="button"
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
};

ESIconButton.displayName = "ESIconButton";

export default ESIconButton;
