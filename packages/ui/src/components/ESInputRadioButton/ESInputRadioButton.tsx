import * as React from "react";
import clsx from "clsx";
import styles from "./ESInputRadioButton.module.css";
import { ESInputRadioButtonProps } from "./ESInputRadioButton.types";

/**
 * ESInputRadioButton Component
 *
 * @param {ESInputRadioButtonProps} props
 * @returns {React.ReactElement}
 */
const ESInputRadioButton: React.FC<ESInputRadioButtonProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.ESInputRadioButton, className)}>
      <input type="radio" className={styles.ESInputRadioButtonInput} />
    </div>
  );
};

ESInputRadioButton.displayName = "ESInputRadioButton";

export default ESInputRadioButton;
