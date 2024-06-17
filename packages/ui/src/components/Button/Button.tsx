import { ButtonProps } from "./Button.types";

// @ts-ignore  
import styles from "./Button.module.css";


/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 * 
 * @param {ButtonProps} props 
 * @returns {JSX.Element}
 */
const Button = ({
  variant = "primary",
  children = "",
  ...other
}: ButtonProps): JSX.Element => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type="button" {...other}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
