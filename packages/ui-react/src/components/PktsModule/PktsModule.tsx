import * as React from "react";
import clsx from "clsx";
import { PktsModuleProps } from "./PktsModule.types";

/**
 * ESModule Component
 *
 * A generic section component that can optionally add a surface.
 *
 * @param {PktsModuleProps} props
 * @returns {React.ReactElement}
 */
const PktsModule: React.FC<PktsModuleProps> = ({
  className,
  surface = false,
  title,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx("pkts-module", surface && "surface", className)}
      {...props}
    >
      {title && <h6 className="title">{title}</h6>}
      {children}
    </section>
  );
};

PktsModule.displayName = "PktsModule";

export default PktsModule;
