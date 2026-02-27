import * as React from "react";

type ComponentTestBoxProps = {
  component: React.ReactNode;
  theme?: "light" | "dark";
  size?: "fit" | "full" | "small" | "medium" | "large";
  padded?: boolean;
};

const sizeMap = {
  fit: "fit-content",
  full: "100%",
  small: "320px",
  medium: "640px",
  large: "1024px",
};

/**
 * ComponentTestBox provides a nice wrapper for components for visual regression tests
 */
export const ComponentTestBox: React.FC<ComponentTestBoxProps> = ({
  component,
  theme = "light",
  size = "fit",
  padded = false,
}) => {
  return (
    <div
      style={{ padding: padded ? "8px" : "0", width: sizeMap[size] }}
      className={`packets ${theme}`}
    >
      {component}
    </div>
  );
};
