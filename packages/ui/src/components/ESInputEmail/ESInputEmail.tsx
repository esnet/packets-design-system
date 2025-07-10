import React, { useState } from "react";

import styles from "./ESInputEmail.module.css";
import { ESInputEmailProps } from "./ESInputEmail.types";
import ESInputText from "../ESInputText";
import { X } from "lucide-react";

/**
 * ESInputEmail Component
 *
 * @param {ESInputEmailProps} props
 * @returns {React.ReactElement}
 */
const ESInputEmail: React.FC<ESInputEmailProps> = ({
  placeholder = "",
  variant = "default",
  error = false,
  defaultValue = "",
  onXClick,
  ...props
}) => {
  const [_value, setValue] = useState<string>(defaultValue as string);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    props.onChange?.(event);
  };

  const _onXClick = () => {
    setValue("");

    onXClick?.();
  };

  const actionButton = <X onClick={_onXClick} />;

  return (
    <ESInputText
      {...props}
      type="email"
      value={_value}
      placeholder={placeholder}
      variant={variant}
      error={error}
      className={`${styles.ESInputEmail}`}
      onChange={onChange}
      actionButtons={actionButton}
    />
  );
};

ESInputEmail.displayName = "ESInputEmail";

export default ESInputEmail;
