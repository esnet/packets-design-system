import { FC } from "react";
import { ESTabProps } from "./ESTabs.types";

// @ts-ignore
import styles from "./ESTab.module.css";

/**
 * ESTabs Component
 *
 * Composable component that manages the layout of a list of tabs.
 *
 * @param {ESTabsProps} props
 * @returns {React.FunctionComponent}
 */
const ESTab: FC<ESTabProps> = ({
  children,
  className = "",
  isActive = false,
}) => {
  return (
    <li
      className={`${styles.tab} ${isActive ? styles.isActive : ""} ${className}`}
    >
      {children}
    </li>
  );
};

ESTab.displayName = "ESTab";

export default ESTab;
