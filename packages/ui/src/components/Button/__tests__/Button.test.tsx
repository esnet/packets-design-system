import { render } from "@testing-library/react";
import Button from "../Button";

test("It renders without crashing", () => {
  const component = render(<Button variant={"primary"}>Hello World</Button>);
  expect(component).toBeTruthy();
});

it("Primary matches DOM Snapshot", () => {
  const domTree = render(<Button variant={"primary"}>Hello World</Button>);
  expect(domTree).toMatchSnapshot();
});

it("Secondary matches DOM Snapshot", () => {
  const domTree = render(<Button variant={"secondary"}>Hello World</Button>);
  expect(domTree).toMatchSnapshot();
});
