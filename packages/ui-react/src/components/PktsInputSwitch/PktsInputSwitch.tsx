import React, { FC, ChangeEvent, useState, useMemo } from "react";
import { PktsInputSwitchProps } from "./PktsInputSwitch.types";

import { getIconByCheckedState } from "./PktsInputSwitchUtils";
import clsx from "clsx";

/**
 * ESInputSwitch Component
 *
 * @param {ESInputSwitchProps} props
 * @returns {React.FunctionComponent}
 */
const PktsInputSwitch: FC<PktsInputSwitchProps> = ({
  variant = "primary",
  className = "",
  noIcon,
  defaultChecked,
  disabled,
  ...props
}) => {
  const [value, setValue] = useState(defaultChecked);

  const icon = useMemo(() => {
    if (noIcon === true) {
      return <></>;
    }

    return getIconByCheckedState(value);
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
    props?.onChange?.(event);
  };

  return (
    <div
      className={clsx(
        "pkts-input-switch",
        variant === "secondary" && "pkts-secondary",
        className,
      )}
    >
      <input
        {...props}
        type="checkbox"
        disabled={disabled}
        checked={value}
        onChange={onChange}
      />
      <span className="indicator">{icon}</span>
    </div>
  );
};

PktsInputSwitch.displayName = "PktsInputSwitch";

export default PktsInputSwitch;
