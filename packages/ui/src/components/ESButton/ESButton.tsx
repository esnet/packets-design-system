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
  isLink = false,
  ...other
}: ESButtonProps): JSX.Element => {
  const As = isLink ? "a" : "button";

  return (
    <As
      className={`${styles.button} ${styles[variant]} ${fill ? styles.fill : ""}`}
      type="button"
      disabled={disabled}
      {...other}
    >
      <>{prepend}</>
      {children}
      <>{append}</>
    </As>
  );
};

ESButton.displayName = "ESButton";

export default ESButton;
