import React, { ChangeEvent } from "react";
import { ESInputSwitchProps } from "./ESInputSwitch.types";
import styles from "./ESInputSwitch.module.css";
import { getIconByCheckedState } from "./ESInputSwitchUtils";
import clsx from "clsx";
import useControllableState from "../../lib/hooks/useControllableState";

/**
 * ESInputSwitch Component
 *
 * @param {ESInputSwitchProps} props
 * @returns {React.FunctionComponent}
 */
const ESInputSwitch: React.FC<ESInputSwitchProps> = ({
  variant = "primary",
  noIcon = false,
  className = "",
  checked,
  defaultChecked = false,
  onChange,
  ...props
}) => {
  const [_checked, setChecked] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
  });

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setChecked(e.target.checked);
  };

  return (
    <div className={clsx(styles.ESInputSwitch, styles[variant], className)}>
      <input
        {...props}
        type="checkbox"
        checked={_checked ?? false}
        onChange={_onChange}
        className={styles.input}
      />
      <span className={styles.switchIndicator}>
        {noIcon ? null : getIconByCheckedState(_checked)}
      </span>
    </div>
  );
};

ESInputSwitch.displayName = "ESInputSwitch";

export default ESInputSwitch;
