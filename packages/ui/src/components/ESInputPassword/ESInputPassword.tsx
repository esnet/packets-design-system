import React, { useState } from "react";

import styles from "./ESInputPassword.module.css";
import { ESInputPasswordProps } from "./ESInputPassword.types";
import ESInputText from "../ESInputText";
import { Eye, EyeOff, X } from "lucide-react";

/**
 * ESInputPassword Component
 *
 * @param {ESInputPasswordProps} props
 * @returns {React.ReactElement}
 */
const ESInputPassword: React.FC<ESInputPasswordProps> = ({
  variant = "default",
  placeholder = "Please enter password",
  error = false,
  defaultValue,
  ...props
}) => {
  const [_value, setValue] = useState<string>(defaultValue as string);
  const [hidden, setHidden] = useState(true);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  const onUnhideClick = () => setHidden(false);
  const onHideClick = () => setHidden(true);
  const onXClick = () => {
    setValue("");
    setHidden(true);
  };

  const hideIcon = hidden ? (
    <EyeOff onClick={onUnhideClick} />
  ) : (
    <Eye onClick={onHideClick} />
  );

  const actionButtons = [hideIcon, <X key="x" onClick={onXClick} />];

  return (
    <ESInputText
      {...props}
      type={hidden ? "password" : "text"}
      value={_value}
      placeholder={placeholder}
      variant={variant}
      error={error}
      className={`${styles.ESInputPassword} ${_value === "" ? styles.empty : ""} ${hidden ? styles.hidden : ""}`}
      onChange={onChange}
      actionButtons={actionButtons}
    />
  );
};

ESInputPassword.displayName = "ESInputPassword";

export default ESInputPassword;
