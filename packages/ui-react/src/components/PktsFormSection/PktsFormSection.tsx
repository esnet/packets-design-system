import React, { FC, useMemo } from "react";
import clsx from "clsx";
import { PktsFormSectionProps } from "./PktsFormSection.types";
import { defaultRenderLink } from "../../lib/utils/LinkTypeUtils";

/**
 * ESFormSection Component
 *
 * A section wrapper for inputs that are related to each other in a form.
 *
 * @param {PktsFormSectionProps} props
 * @returns {React.FunctionComponent}
 */
const PktsFormSection: FC<PktsFormSectionProps> = ({
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
      className={clsx("pkts-form-section", useColumnLayout && "packets-grid")}
      {...other}
    >
      <div className="grid-col-3 left-col">
        {titleEl}
        {descriptionSlot}
      </div>
      <div className="grid-col-9 right-col">{children}</div>
    </section>
  );
};

PktsFormSection.displayName = "PktsFormSection";

export default PktsFormSection;
