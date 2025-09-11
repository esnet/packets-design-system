import React, { FC, useMemo } from "react";
import clsx from "clsx";
import { ESFormSectionProps } from "./ESFormSection.types";

import styles from "./ESFormSection.module.css";

import { defaultRenderLink } from "../../lib/utils/link";

/**
 * ESFormSection Component
 *
 * A section wrapper for inputs that are related to each other in a form.
 *
 * @param {ESFormSectionProps} props
 * @returns {React.FunctionComponent}
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
      className={clsx(styles.ESFormSection, useColumnLayout && "packets-grid")}
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
