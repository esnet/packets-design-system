import { useMemo, FC } from "react";
import { ESAlertProps, ESAlertTypes } from "./ESAlert.types";
import { getAlertIconByType } from "./ESAlertUtils";

// @ts-ignore
import styles from "./ESAlert.module.css";

/**
 * Button - An extension of a HTML button that comes with different levels of action/intent.
 *
 * @param {ESButtonGroupProps} props
 * @returns {JSX.Element}
 */
const ESAlert: FC<ESAlertProps> = ({
  title,
  type = ESAlertTypes.INFO,
  children,
}) => {
  const icon = useMemo(() => {
    return getAlertIconByType(type);
  }, [type]);

  return (
    <section className={`${styles.alert} ${!!styles[type] && styles[type]}`}>
      <aside className={styles.icon}>{icon}</aside>
      <section className={styles.content}>
        <h6 className={styles.title}>{title}</h6>
        {children}
      </section>
    </section>
  );
};

ESAlert.displayName = "ESAlert";

export default ESAlert;
