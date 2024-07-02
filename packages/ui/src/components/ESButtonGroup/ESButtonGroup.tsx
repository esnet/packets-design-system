import { ESButtonGroupProps } from "./ESButtonGroup.types";

// @ts-ignore
import styles from "./ESButtonGroup.module.css";

/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {ESButtonGroupProps} props
 * @returns {JSX.Element}
 */
const ESButtonGroup = ({
  children,
  hideLabel,
  direction = "horizontal",
  ...other
}: ESButtonGroupProps): JSX.Element => {
  return (
    <section
      className={`${styles.buttonGroup} ${styles[direction]}`}
      {...other}
    >
      {children}
    </section>
  );
};

ESButtonGroup.displayName = "ESButtonGroup";

export default ESButtonGroup;
