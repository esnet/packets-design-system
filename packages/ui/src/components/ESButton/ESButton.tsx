import { ESButtonDefaultAsType, ESButtonProps } from "./ESButton.types";

// @ts-ignore
import styles from "./ESButton.module.css";


/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {ESButtonProps} props
 * @returns {JSX.Element}
 */
const ESButton = <E extends React.ElementType = ESButtonDefaultAsType>({
  variant = "secondary",
  children = "",
  fill = true,
  disabled = false,
  prepend = null,
  as,
  append = null,
  ...other
}: ESButtonProps<E>): JSX.Element => {
  const Tag = as || ESButtonDefaultAsType;

  return (
    <Tag
      className={`${styles.button} ${styles[variant]} ${fill ? styles.fill : ""}`}
      type="button"
      disabled={disabled}
      {...other}
    >
      <>{prepend}</>
      {children}
      <>{append}</>
    </Tag>
  );
};

ESButton.displayName = "ESButton";

export default ESButton;
