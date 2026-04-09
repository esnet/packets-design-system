import * as React from "react";
import clsx from "clsx";
import { PktsInputRowProps } from "./PktsInputRow.types";
import { CircleQuestionMark } from "lucide-react";

/**
 * PktsInputRow component, a composable input label with extended functionality for error/success caption, tooltips, and layout.
 *
 * PktsInputRow's label wraps around the input element, linking them automatically.
 *
 * It's recommended to wrap all inputs with PktsInputRow, and to give all inputs a name.
 *
 * @param {PktsInputRowProps} props
 * @returns {React.ReactElement}
 */
export function PktsInputRow({
  label,
  children,
  error = false,
  success = false,
  required = false,
  disabled = false,
  labelPlacement = "top",
  tooltip,
  ...props
}: PktsInputRowProps) {
  const caption = React.useMemo(() => {
    if (error) {
      const errorText = typeof error === "boolean" ? "Error" : error;
      return (
        <span className="pkts-input-row-caption pkts-error">{errorText}</span>
      );
    }

    if (success) {
      const successText = typeof success === "boolean" ? "Success" : success;
      return (
        <span className="pkts-input-row-caption pkts-success">
          {successText}
        </span>
      );
    }
  }, [error, success]);

  return (
    <label
      {...props}
      className={clsx(
        "pkts-input-row",
        labelPlacement === "top" && "pkts-label-top",
        labelPlacement === "left" && "pkts-label-left",
        labelPlacement === "right" && "pkts-label-right",
        labelPlacement === "bottom" && "pkts-label-bottom",
      )}
    >
      <span
        className={clsx("pkts-input-row-label", disabled && "pkts-disabled")}
        title={tooltip}
      >
        {label}
        {required && <span className="pkts-input-row-required">*</span>}
        {tooltip && (
          // TODO: Replace with actual PktsTooltip when created
          <CircleQuestionMark className="pkts-input-row-tooltip-icon" />
        )}
      </span>
      {children}
      {caption}
    </label>
  );
}

PktsInputRow.displayName = "PktsInputRow";

export default PktsInputRow;
