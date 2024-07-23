import React from "react";
import styles from "./SpacingDocSquare.module.scss";

interface SpacingDocSquareProps {
  fill?: boolean;
}

const SpacingDocSquare: React.FC<SpacingDocSquareProps> = ({
  fill = false,
}) => {
  return <div className={`${styles.square} ${fill ? styles.fill : ""}`} />;
};

export default SpacingDocSquare;
