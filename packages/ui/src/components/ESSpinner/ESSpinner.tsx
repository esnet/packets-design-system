import React from "react";

import styles from "./ESSpinner.module.css";

/**
 * ESSpinner Component
 *
 * A loading indicator
 *
 * @param {ESSpinnerProps} props
 * @returns {React.FunctionComponent}
 */
const ESSpinner: React.FC = () => {
  return (
    <div role="alert" aria-busy="true" className={styles.ESSpinner}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.noMotionMessage}>Loading...</span>
    </div>
  );
};

ESSpinner.displayName = "ESSpinner";

export default ESSpinner;
