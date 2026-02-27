import React from "react";

/**
 * ESSpinner Component
 *
 * A loading indicator
 *
 * @param {PktsSpinnerProps} props
 * @returns {React.ReactElement}
 */
const PktsSpinner: React.FC = () => {
  return (
    <div role="alert" aria-busy="true" className="pkts-spinner">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="no-motion-message">Loading...</span>
    </div>
  );
};

PktsSpinner.displayName = "PktsSpinner";

export default PktsSpinner;
