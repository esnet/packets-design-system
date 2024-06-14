import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button = ({
  variant = "primary",
  children = "",
  ...other
}: ButtonProps): JSX.Element => {
  return (
    <button className={`Button Button-${variant}`} type="button" {...other}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
