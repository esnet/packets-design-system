import React, { FC, ChangeEvent, useState } from "react";
import { PktsInputSwitchProps } from "./PktsInputSwitch.types";
import clsx from "clsx";

/**
 * Input switch — a restyled checkbox rendered as a toggle.
 * No wrapper div or indicator span required; the thumb is drawn via CSS ::before.
 */
const PktsInputSwitch: FC<PktsInputSwitchProps> = ({
  variant = "default",
  className,
  defaultChecked,
  disabled,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <input
      {...props}
      type="checkbox"
      role="switch"
      className={clsx(
        "pkts-input-switch",
        variant === "branded" && "pkts-branded",
        className,
      )}
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

PktsInputSwitch.displayName = "PktsInputSwitch";

export default PktsInputSwitch;
