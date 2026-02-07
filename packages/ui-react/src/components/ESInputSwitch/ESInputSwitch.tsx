import React, { FC, ChangeEvent, useState, useMemo } from "react";
import { ESInputSwitchProps } from "./ESInputSwitch.types";

import { getIconByCheckedState } from "./ESInputSwitchUtils";
import clsx from "clsx";

/**
 * ESInputSwitch Component
 *
 * @param {ESInputSwitchProps} props
 * @returns {React.FunctionComponent}
 */
const ESInputSwitch: FC<ESInputSwitchProps> = ({
  variant = "primary",
  hideIcons = false,
  className = "",
  defaultChecked,
  disabled,
  ...props
}) => {
  const [value, setValue] = useState(defaultChecked);

  const icon = useMemo(() => {
    if (hideIcons === true) {
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
        "es-input-switch",
        variant === "secondary" && "es-secondary",
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

ESInputSwitch.displayName = "ESInputSwitch";

export default ESInputSwitch;
