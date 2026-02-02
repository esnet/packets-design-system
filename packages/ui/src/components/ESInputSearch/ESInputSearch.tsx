import React, { useCallback, useState, useMemo } from "react";

import styles from "./ESInputSearch.module.css";
import { ESInputSearchProps } from "./ESInputSearch.types";
import ESInputText from "../ESInputText";
import { Search, X } from "lucide-react";
import { clsx } from "clsx";

/**
 * ESInputSearch Component
 *
 * @param {ESInputSearchProps} props
 * @returns {React.ReactElement}
 */
const ESInputSearch: React.FC<ESInputSearchProps> = ({
  variant = "primary",
  className,
  error = false,
  onSearchClick,
  onXClick,
  defaultValue = "",
  ...props
}) => {
  const [_value, setValue] = useState<string>(defaultValue as string);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);

      props.onChange?.(event);
    },
    [props.onChange],
  );

  const _onXClick = useCallback(() => {
    setValue("");
    onXClick?.();
  }, [onXClick]);

  const actionButton = useMemo(() => {
    return _value ? (
      <X onClick={_onXClick} />
    ) : (
      <Search onClick={onSearchClick} />
    );
  }, [_value, _onXClick, onSearchClick]);

  const classNames = clsx(styles.ESInputSearch, className);

  return (
    <ESInputText
      {...props}
      type="search"
      value={_value}
      variant={variant}
      error={error}
      className={classNames}
      onChange={onChange}
      actionButtons={actionButton}
    />
  );
};

ESInputSearch.displayName = "ESInputSearch";

export default ESInputSearch;
