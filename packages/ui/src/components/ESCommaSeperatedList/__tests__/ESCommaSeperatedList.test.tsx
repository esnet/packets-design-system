import { render } from "@testing-library/react";
import ESCommaSeperatedList from "../ESCommaSeperatedList";

test("It renders without crashing", () => {
  const component = render(
    <ESCommaSeperatedList
      items={["apples", "oranges", "lemons"]}
      renderItem={(item) => <p>{item}</p>}
    />,
  );
  expect(component).toBeTruthy();
});

it("Comma Seperated List DOM Snapshot", () => {
  const domTree = render(
    <ESCommaSeperatedList
      items={["apples", "oranges", "lemons"]}
      renderItem={(item) => <p>{item}</p>}
    />,
  );
  expect(domTree).toMatchSnapshot();
});
