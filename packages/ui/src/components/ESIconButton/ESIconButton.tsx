import React from "react";
import { ESIconButtonProps } from "./ESIconButton.types";

import styles from "./ESIconButton.module.css";
import ESButton from "../ESButton";
import ESIcon from "../ESIcon/ESIcon";
import clsx from "clsx";

/**
 * ESIcon Button
 *
 * Generic Icon only button component, built on top of ESButton (and thus can also be
 * represented as an anchor tag) with special styling.
 *
 * @param {ESIconButtonProps} props
 * @returns {React.FunctionComponent}
 */
const ESIconButton: React.FC<ESIconButtonProps> = ({
  name,
  square,
  ...props
}) => {
  return (
    <ESButton
      {...props}
      className={clsx(styles.ESIconButton, square && styles.square)}
    >
      <ESIcon name={name} />
    </ESButton>
  );
};

ESIconButton.displayName = "ESIconButton";

export default ESIconButton;
