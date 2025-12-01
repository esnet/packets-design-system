import React from "react";
import { ESLogoProps } from "./ESLogo.types";

import esnetLogoFullnameBlack from "../../assets/logos/esnet.logo.fullname.black.png";
import esnetLogoFullnameColor from "../../assets/logos/esnet.logo.fullname.color.png";
import esnetLogoFullnameWhite from "../../assets/logos/esnet.logo.fullname.white.png";
import esnetLogoNoOrbBlack from "../../assets/logos/esnet.logo.noorb.black.png";
import esnetLogoNoOrbWhite from "../../assets/logos/esnet.logo.noorb.white.png";
import esnetLogoNoOrbColor from "../../assets/logos/esnet.logo.noorb.color.png";
import esnetLogoOrbBlack from "../../assets/logos/esnet.logo.orb.black.png";
import esnetLogoOrbColor from "../../assets/logos/esnet.logo.orb.color.png";
import esnetLogoOrbWhite from "../../assets/logos/esnet.logo.orb.white.png";
import esnetLogoShortnameBlack from "../../assets/logos/esnet.logo.shortname.black.png";
import esnetLogoShortnameColor from "../../assets/logos/esnet.logo.shortname.color.png";
import esnetLogoShortnameWhite from "../../assets/logos/esnet.logo.shortname.white.png";
import esnetLogoStampBlueAlt from "../../assets/logos/esnet.logo.stamp.blue.alt.png";
import esnetLogoStampBlue from "../../assets/logos/esnet.logo.stamp.blue.png";
import esnetLogoStampColorAlt from "../../assets/logos/esnet.logo.stamp.color.alt.png";
import esnetLogoStampColor from "../../assets/logos/esnet.logo.stamp.color.png";

/**
 * ESLogo Component.
 *
 * Size can be set with the custom size attribute, or the width/height can be set as native img props passed in.
 *
 * @param {ESLogoProps} props
 * @returns {React.ReactElement}
 */
export function ESLogo({
  color = "color",
  variant = "fullname",
  size = "md",
  ...props
}: ESLogoProps) {
  const imgSrc = React.useMemo(() => {
    switch (variant) {
      case "fullname":
        switch (color) {
          case "black":
            return esnetLogoFullnameBlack;
          case "white":
            return esnetLogoFullnameWhite;
          case "color":
          default:
            return esnetLogoFullnameColor;
        }

      case "shortname":
        switch (color) {
          case "black":
            return esnetLogoShortnameBlack;
          case "white":
            return esnetLogoShortnameWhite;
          case "color":
          default:
            return esnetLogoShortnameColor;
        }

      case "orb":
        switch (color) {
          case "black":
            return esnetLogoOrbBlack;
          case "white":
            return esnetLogoOrbWhite;
          case "color":
          default:
            return esnetLogoOrbColor;
        }

      case "noOrb":
        switch (color) {
          case "black":
            return esnetLogoNoOrbBlack;
          case "white":
            return esnetLogoNoOrbWhite;
          case "color":
          default:
            return esnetLogoNoOrbColor;
        }

      case "stamp":
        return esnetLogoStampColor;
      case "stamp-alt":
        return esnetLogoStampColorAlt;
      case "stamp-blue":
        return esnetLogoStampBlue;
      case "stamp-blue-alt":
        return esnetLogoStampBlueAlt;

      default:
        return esnetLogoFullnameColor;
    }
  }, [color, variant]);

  const height = React.useMemo(() => {
    switch (size) {
      case "xs":
        return "24px";
      case "sm":
        return "48px";
      case "md":
        return "96px";
      case "lg":
        return "144px";
      case "xl":
        return "192px";
    }
  }, [size]);

  return (
    <img
      src={imgSrc}
      height={height}
      alt={`ESNet ${variant} logo`}
      {...props}
    />
  );
}

export default ESLogo;
