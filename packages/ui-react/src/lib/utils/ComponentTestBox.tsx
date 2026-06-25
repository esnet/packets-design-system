import * as React from "react";

const sizeMap = {
  fit: "fit-content",
  full: "100%",
  small: "320px",
  medium: "640px",
  large: "1024px",
};

type ComponentTestBoxProps = {
  component: React.ReactNode;
  theme?: "light" | "dark";
  size?: keyof typeof sizeMap;
  style?: React.CSSProperties;
};

/**
 * ComponentTestBox provides a nice wrapper for components for visual regression tests
 */
export const ComponentTestBox: React.FC<ComponentTestBoxProps> = ({
  component,
  theme = "light",
  size = "fit",
  style,
}) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "8px",
        width: sizeMap[size],
        ...style,
      }}
      className={`packets ${theme}`}
    >
      {component}
    </div>
  );
};
