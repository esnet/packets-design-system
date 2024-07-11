import { FC, useMemo } from "react";
import { ESFormSectionProps } from "./ESFormSection.types";

// @ts-ignore
import styles from "./ESFormSection.module.css";

import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

/**
 * ESFormSection Component
 *
 * A name value pair visualization
 *
 * @param {ESFormSectionProps} props
 * @returns {React.FunctionComponent} - Icon Component
 */
const ESFormSection: FC<ESFormSectionProps> = ({
  title = "",
  titleURL = "",
  descriptionSlot = "",
  useColumnLayout = true,
  children,
  renderTitleLink = defaultRenderLink,
  ...other
}) => {
  const titleEl = useMemo(() => {
    // If not title, early return an empty fragment
    if (!title) {
      return <></>;
    }

    // if URL provided, render title with link wrapper
    if (titleURL) {
      return renderTitleLink({
        href: titleURL,
        children: <h6>{title}</h6>,
      });
    }

    // just render title
    return <h6>{title}</h6>;
  }, [title, titleURL]);

  return (
    <section
      className={`${styles.formSection} ${useColumnLayout ? "packets-grid" : ""}`}
      {...other}
    >
      <div className={`grid-col-3 ${styles.leftCol}`}>
        {titleEl}
        {descriptionSlot}
      </div>
      <div className={`grid-col-9 ${styles.rightCol}`}>{children}</div>
    </section>
  );
};

ESFormSection.displayName = "ESFormSection";

export default ESFormSection;
