import { render } from "@testing-library/react";
import ESTabs from "../ESTabs";
import ESTab from "../ESTab";

test("It renders without crashing", () => {
  const component = render(
    <ESTabs>
      <ESTab isActive={true}>Link 1</ESTab>
      <ESTab>Link 2</ESTab>
      <ESTab>Link 3</ESTab>
    </ESTabs>,
  );
  expect(component).toBeTruthy();
});

it("Tabs matches DOM Snapshot", () => {
  const domTree = render(
    <ESTabs>
      <ESTab isActive={true}>Link 1</ESTab>
      <ESTab>Link 2</ESTab>
      <ESTab>Link 3</ESTab>
    </ESTabs>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Tabs with no padding matches DOM Snapshot", () => {
  const domTree = render(
    <ESTabs verticalPadding={false}>
      <ESTab isActive={true}>Link 1</ESTab>
      <ESTab>Link 2</ESTab>
      <ESTab>Link 3</ESTab>
    </ESTabs>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Tabs with no border matches DOM Snapshot", () => {
  const domTree = render(
    <ESTabs border={false}>
      <ESTab isActive={true}>Link 1</ESTab>
      <ESTab>Link 2</ESTab>
      <ESTab>Link 3</ESTab>
    </ESTabs>,
  );
  expect(domTree).toMatchSnapshot();
});
