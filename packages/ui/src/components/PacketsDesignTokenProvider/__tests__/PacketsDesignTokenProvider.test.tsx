import { render } from "@testing-library/react";
import { PacketsDesignTokenProvider } from "../PacketsDesignTokenProvider";

test("It renders without crashing", () => {
  const component = render(<PacketsDesignTokenProvider />);
  expect(component).toBeTruthy();
});
