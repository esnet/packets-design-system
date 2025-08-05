import React, { FC, useMemo, useState } from "react";
import { ESAvatarProps } from "./ESAvatar.types";

import styles from "./ESAvatar.module.css";

/**
 * ESAvatar Component
 *
 * Display message with alert level styling
 *
 * @param {ESAvatarProps} props
 * @returns {React.FunctionComponent}
 */

const ESAvatar: FC<ESAvatarProps> = ({
  label = "avatar",
  size = "medium",
  backgroundColor,
  className = "",
  src,
  srcSet,
  isHoverable = false,
  ...props
}) => {
  // Hooks
  const [error, setError] = useState(false);
  const computedBackgroundColor = useMemo(() => {
    if (backgroundColor) {
      return backgroundColor;
    }

    const _colorOptions = ["grape", "lime", "berry", "orange"];

    return _colorOptions?.[Math.floor(_colorOptions?.length * Math.random())];
  }, [backgroundColor]);

  const hasImageSrc = !!src || !!srcSet;

  const fallbackLabel = useMemo(() => {
    return label.slice(0, 2);
  }, [label]);

  // Events
  const _onError = (event: any) => {
    console.error(
      `ESAvatar::${event?.type}`,
      `Image ${src || srcSet} failed to load`
    );
    setError(true);
  };

  // Composition
  const rootStyles = useMemo(() => {
    return (
      `${styles.avatar} ` +
      `${!!styles[size] ? styles[size] : ""} ` +
      `${error ? styles.brokenImage : ""} ` +
      `${styles[computedBackgroundColor]} ` +
      `${isHoverable ? styles.isHoverable : ""} ` +
      `${className}`
    );
  }, [computedBackgroundColor, isHoverable, error, size, styles]);

  return (
    <section className={rootStyles} {...props}>
      {hasImageSrc && (
        <img
          className={styles.image}
          alt={label}
          src={src}
          srcSet={srcSet}
          onError={_onError}
        />
      )}
      {(!hasImageSrc || !!error) && (
        <span className={styles.label}>{fallbackLabel}</span>
      )}
    </section>
  );
};

ESAvatar.displayName = "ESAvatar";

export default ESAvatar;
