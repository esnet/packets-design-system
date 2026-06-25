import * as React from "react";
import clsx from "clsx";
import { PktsIconButtonProps } from "./PktsIconButton.types";

/**
 * Packets Icon Button
 *
 * Generic Icon only button component.
 * Can be a link or a button set with the "as" prop.
 *
 * Child should be a lucide-icon, nothing else.
 *
 * @param {PktsIconButtonProps} props
 * @returns {React.ReactElement}
 */
const PktsIconButton: React.FC<PktsIconButtonProps> = ({
  variant = "secondary",
  as = "button",
  className,
  children,
  square = false,
  ...props
}) => {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={clsx(
        "pkts-icon-button",
        `pkts-${variant}`,
        square && "pkts-square",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </Tag>
  );
};

PktsIconButton.displayName = "PktsIconButton";

export default PktsIconButton;
