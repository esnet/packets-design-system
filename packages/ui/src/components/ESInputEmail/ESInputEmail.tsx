import React, { useState } from "react";

import styles from "./ESInputEmail.module.css";
import { ESInputEmailProps } from "./ESInputEmail.types";
import ESInputText from "../ESInputText";
import { X } from "lucide-react";
import clsx from "clsx";

/**
 * ESInputEmail Component
 *
 * @param {ESInputEmailProps} props
 * @returns {React.ReactElement}
 */
const ESInputEmail: React.FC<ESInputEmailProps> = ({
  variant = "default",
  error = false,
  defaultValue = "",
  className,
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

  const classNames = clsx(styles.ESInputEmail, className);

  return (
    <ESInputText
      {...props}
      type="email"
      value={_value}
      variant={variant}
      error={error}
      className={classNames}
      onChange={onChange}
      actionButtons={actionButton}
    />
  );
};

ESInputEmail.displayName = "ESInputEmail";

export default ESInputEmail;
