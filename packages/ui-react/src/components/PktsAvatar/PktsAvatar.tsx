import * as React from "react";
import { PktsAvatarProps } from "./PktsAvatar.types";
import clsx from "clsx";

const _colorOptions = ["grape", "lime", "berry", "orange"];

/**
 * ESAvatar Component
 *
 * Wrapper around an image element with preset sizes, styles,
 * as well as a fallback label (the first two letters of the alt prop) with different background colors in case no src is specified or valid.
 *
 * @param {PktsAvatarProps} props
 * @returns {React.ReactElement}
 */
const PktsAvatar: React.FC<PktsAvatarProps> = ({
  alt = "avatar",
  size = "medium",
  backgroundColor,
  src,
  srcSet,
  hoverable,
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

  return (
    <div
      className={clsx(
        "pkts-avatar",
        `pkts-${size}`,
        error && "broken-image",
        hoverable && "hoverable",
        `pkts-${computedBackgroundColor}`,
        className,
      )}
    >
      {hasImageSrc && (
        <img
          alt={alt}
          src={src}
          srcSet={srcSet}
          onError={onError}
          {...props}
        />
      )}
      {(!hasImageSrc || !!error) && <span>{fallbackLabel}</span>}
    </div>
  );
};

PktsAvatar.displayName = "PktsAvatar";

export default PktsAvatar;
