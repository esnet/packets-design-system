import React, { useCallback, useState, useMemo } from "react";

import styles from "./PktsInputSearch.module.css";
import { PktsInputSearchProps } from "./PktsInputSearch.types";
import PktsInputText from "../PktsInputText";
import { Search, X } from "lucide-react";
import { clsx } from "clsx";

/**
 * ESInputSearch Component
 *
 * @param {ESInputSearchProps} props
 * @returns {React.ReactElement}
 */
const PktsInputSearch: React.FC<PktsInputSearchProps> = ({
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

  const classNames = clsx("pkts-input-search", className);

  return (
    <PktsInputText
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

PktsInputSearch.displayName = "PktsInputSearch";

export default PktsInputSearch;
