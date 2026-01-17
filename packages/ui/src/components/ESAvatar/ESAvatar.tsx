import * as React from "react";
import { ESAvatarProps } from "./ESAvatar.types";

import styles from "./ESAvatar.module.css";
import clsx from "clsx";

const _colorOptions = ["grape", "lime", "berry", "orange"];

/**
 * ESAvatar Component
 *
 * Wrapper around an image element with preset sizes, styles,
 * as well as a fallback label (the first two letters of the alt prop) with different background colors in case no src is specified or valid.
 *
 * @param {ESAvatarProps} props
 * @returns {React.ReactElement}
 */
const ESAvatar: React.FC<ESAvatarProps> = ({
  alt = "avatar",
  size = "medium",
  backgroundColor,
  src,
  srcSet,
  className,
  ...props
}) => {
  const [error, setError] = React.useState(false);
  const computedBackgroundColor = React.useMemo(() => {
    if (backgroundColor) {
      return backgroundColor;
    }

    return _colorOptions[Math.floor(_colorOptions?.length * Math.random())];
  }, [backgroundColor]);

  const hasImageSrc = !!src || !!srcSet;

  const fallbackLabel = React.useMemo(() => {
    return alt.slice(0, 2);
  }, [alt]);

  // in the event of an error, render the fallback label
  const onError = (event: any) => {
    console.error(
      `ESAvatar::${event?.type}`,
      `Image ${src || srcSet} failed to load`,
    );
    setError(true);
    props.onError?.(event);
  };

  // TODO: This code is commented out because it was causing Playwright test failures.
  // It references undefined variable `isHoverable` and is never used (the clsx implementation below is what's actually applied).
  // If this was intended to be used, it needs to be fixed:
  // 1. Import useMemo from React (or use React.useMemo)
  // 2. Define isHoverable variable or remove the reference
  // 3. Replace the clsx implementation below with this one, or delete this entirely
  // const rootStyles = useMemo(() => {
  //   return (
  //     `${styles.avatar} ` +
  //     `${!!styles[size] ? styles[size] : ""} ` +
  //     `${error ? styles.brokenImage : ""} ` +
  //     `${styles[computedBackgroundColor]} ` +
  //     `${isHoverable ? styles.isHoverable : ""} ` +
  //     `${className}`
  //   );
  // }, [computedBackgroundColor, isHoverable, error, size, styles]);

  return (
    <div
      className={clsx(
        styles.ESAvatar,
        styles[size],
        error && styles.brokenImage,
        styles[computedBackgroundColor],
        className,
      )}
    >
      {hasImageSrc && (
        <img
          className={styles.image}
          alt={alt}
          src={src}
          srcSet={srcSet}
          onError={onError}
          {...props}
        />
      )}
      {(!hasImageSrc || !!error) && (
        <span className={styles.label}>{fallbackLabel}</span>
      )}
    </div>
  );
};

ESAvatar.displayName = "ESAvatar";

export default ESAvatar;
