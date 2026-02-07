import React from "react";

/**
 * ESSpinner Component
 *
 * A loading indicator
 *
 * @param {ESSpinnerProps} props
 * @returns {React.ReactElement}
 */
const ESSpinner: React.FC = () => {
  return (
    <div role="alert" aria-busy="true" className="es-spinner">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="no-motion-message">Loading...</span>
    </div>
  );
};

ESSpinner.displayName = "ESSpinner";

export default ESSpinner;
