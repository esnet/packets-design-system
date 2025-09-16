import React from "react";
import clsx from "clsx";
import styles from "./ESFigure.module.css";
import { ESFigureProps } from "./ESFigure.types";

/**
 * ESFigure Component. Takes in a figure component (can be a table, image, etc.) and a text caption, rendering the caption underneath the figure.
 *
 * @param {ESFigureProps} props
 * @returns {React.ReactElement}
 */
export function ESFigure({
  caption,
  figure,
  textAlign = "left",
  capitalize = false,
  italic = false,
  className,
  ...props
}: ESFigureProps) {
  return (
    <figure {...props} className={clsx(styles.ESFigure, className)}>
      {figure}
      <figcaption
        className={clsx(
          styles.caption,
          textAlign && styles[textAlign],
          italic && styles.italic,
          capitalize && styles.capitalize
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

ESFigure.displayName = "ESFigure";

export default ESFigure;
