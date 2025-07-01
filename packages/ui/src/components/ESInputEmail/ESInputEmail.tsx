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
  placeholder = "Email",
  variant = "default",
  error = false,
  defaultValue = "",
  onXClick,
  ...props
}) => {
  const [_value, setValue] = useState<string>(defaultValue as string);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  const _onXClick = () => {
    setValue("");

    if (onXClick) {
      onXClick();
    }
  };

  const actionButton = _value ? <X onClick={_onXClick} /> : undefined;

  return (
    <ESInputText
      {...props}
      type="search"
      value={_value}
      placeholder={placeholder}
      variant={variant}
      error={error}
      className={`${styles.ESInputEmail} ${_value === "" ? styles.empty : ""}`}
      onChange={onChange}
      actionButtons={actionButton}
    />
  );
};

ESInputEmail.displayName = "ESInputEmail";

export default ESInputEmail;
