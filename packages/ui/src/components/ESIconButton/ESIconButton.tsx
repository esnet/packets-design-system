import { ESIconButtonProps } from "./ESIconButton.types";

// @ts-ignore
import styles from "./ESIconButton.module.css";

/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {ESIconButtonProps} props
 * @returns {JSX.Element}
 */
const ESIconButton = ({
  variant = "secondary",
  children = "",
  disabled = false,
  ...other
}: ESIconButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
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
