import { render } from "@testing-library/react";
import ESButton from "../ESButton";

test("It renders without crashing", () => {
  const component = render(
    <ESButton variant={"primary"}>Hello World</ESButton>,
  );
  expect(component).toBeTruthy();
});

it("Primary matches DOM Snapshot", () => {
  const domTree = render(<ESButton variant={"primary"}>Hello World</ESButton>);
  expect(domTree).toMatchSnapshot();
});

it("Secondary matches DOM Snapshot", () => {
  const domTree = render(
    <ESButton variant={"secondary"}>Hello World</ESButton>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Teritary matches DOM Snapshot", () => {
  const domTree = render(<ESButton variant={"tertiary"}>Hello World</ESButton>);
  expect(domTree).toMatchSnapshot();
});

it("Destructive matches DOM Snapshot", () => {
  const domTree = render(
    <ESButton variant={"destructive"}>Hello World</ESButton>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Branded matches DOM Snapshot", () => {
  const domTree = render(<ESButton variant={"branded"}>Hello World</ESButton>);
  expect(domTree).toMatchSnapshot();
});

it("Button as LInk matches DOM Snapshot", () => {
  const domTree = render(
    <ESButton as="a" href="http://www.google.com" variant={"primary"}>
      Go to Google
    </ESButton>,
  );
  expect(domTree).toMatchSnapshot();
});
