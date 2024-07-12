import { render } from "@testing-library/react";
import ESSpacer from "../ESSpacer";
import { ESSpacerSizes, ESSpacerType } from "../ESSpacer.types";

test("It renders without crashing", () => {
  const component = render(
    <ESSpacer type={ESSpacerType.HORIZONTAL} size={ESSpacerSizes.MEDIUM} />
  );
  expect(component).toBeTruthy();
});

it("Spacer matches DOM Snapshot", () => {
  const domTree = render(
    <ESSpacer type={ESSpacerType.HORIZONTAL} size={ESSpacerSizes.MEDIUM} />
  );
  expect(domTree).toMatchSnapshot();
});


it("Vertical with not title matches DOM Snapshot", () => {
  const domTree = render(
    <ESSpacer type={ESSpacerType.VERTICAL} size={ESSpacerSizes.MEDIUM} />
  );
  expect(domTree).toMatchSnapshot();
});


it("Square with not title matches DOM Snapshot", () => {
  const domTree = render(
    <ESSpacer type={ESSpacerType.SQUARE} size={ESSpacerSizes.MEDIUM} />
  );
  expect(domTree).toMatchSnapshot();
});
