import { ESButtonProps } from "./ESButton.types";

// @ts-ignore
import styles from "./ESButton.module.css";

/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {ESButtonProps} props
 * @returns {JSX.Element}
 */
const ESButton = ({
  variant = "secondary",
  children = "",
  fill = true,
  disabled = false,
  prepend = null,
  append = null,
  ...other
}: ESButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${fill ? styles.fill : ""}`}
      type="button"
      disabled={disabled}
      {...other}
    >
      <>{prepend}</>
      {children}
      <>{append}</>
    </button>
  );
};

ESButton.displayName = "ESButton";

export default ESButton;
