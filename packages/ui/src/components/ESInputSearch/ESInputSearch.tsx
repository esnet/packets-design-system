import React, { useState } from "react";

import styles from "./ESInputSearch.module.css";
import { ESInputSearchProps } from "./ESInputSearch.types";
import ESInputText from "../ESInputText";
import { Search, SearchX } from "lucide-react";

/**
 * ESInputSearch Component
 *
 * @param {ESInputSearchProps} props
 * @returns {React.ReactElement}
 */
const ESInputSearch: React.FC<ESInputSearchProps> = ({
  placeholder = "Search...",
  variant = "default",
  error = false,
  SearchIcon = Search,
  onSearchClick,
  SearchXIcon = SearchX,
  onSearchXClick,
  defaultValue = "",
  ...props
}) => {
  const [_value, setValue] = useState<string>(defaultValue as string);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  const _onSearchXClick = () => {
    setValue("");
    if (onSearchXClick) {
      onSearchXClick();
    }
  };

  const actionButton = _value ? (
    <SearchXIcon onClick={_onSearchXClick} />
  ) : (
    <SearchIcon onClick={onSearchClick} />
  );

  return (
    <ESInputText
      {...props}
      type="search"
      value={_value}
      placeholder={placeholder}
      variant={variant}
      error={error}
      className={`${styles.ESInputSearch} ${_value === "" ? styles.empty : ""}`}
      onChange={onChange}
      actionButtons={actionButton}
    />
  );
};

ESInputSearch.displayName = "ESInputSearch";

export default ESInputSearch;
