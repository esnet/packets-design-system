import React, { useState } from "react";

import { PktsInputEmailProps } from "./PktsInputEmail.types";
import PktsInputText from "../PktsInputText";
import { X } from "lucide-react";
import clsx from "clsx";

/**
 * ESInputEmail Component
 *
 * @param {ESInputEmailProps} props
 * @returns {React.ReactElement}
 */
const PktsInputEmail: React.FC<PktsInputEmailProps> = ({
  variant = "primary",
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

  const classNames = clsx("pkts-input-email", className);

  return (
    <PktsInputText
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

PktsInputEmail.displayName = "PktsInputEmail";

export default PktsInputEmail;
