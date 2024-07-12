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
