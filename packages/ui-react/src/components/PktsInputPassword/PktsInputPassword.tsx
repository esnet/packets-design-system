import React, { useState } from "react";

import { PktsInputPasswordProps } from "./PktsInputPassword.types";
import PktsInputText from "../PktsInputText";
import { Eye, EyeOff, X } from "lucide-react";
import clsx from "clsx";

/**
 * ESInputPassword Component
 *
 * @param {ESInputPasswordProps} props
 * @returns {React.ReactElement}
 */
const PktsInputPassword: React.FC<PktsInputPasswordProps> = ({
  variant = "primary",
  error = false,
  defaultValue,
  className,
  ...props
}) => {
  const [_value, setValue] = useState<string>((defaultValue ?? "") as string);
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
    <Eye key="eye" onClick={onUnhideClick} />
  ) : (
    <EyeOff key="eye-off" onClick={onHideClick} />
  );

  const actionButtons = [hideIcon, <X key="x" onClick={onXClick} />];

  const classNames = clsx("pkts-input-password", className);

  return (
    <PktsInputText
      {...props}
      type={hidden ? "password" : "text"}
      value={_value}
      variant={variant}
      error={error}
      className={classNames}
      onChange={onChange}
      actionButtons={actionButtons}
    />
  );
};

PktsInputPassword.displayName = "PktsInputPassword";

export default PktsInputPassword;
