import { render } from "@testing-library/react";
import ESTitleSection from "../ESTitleSection";

test("It renders without crashing", () => {
  const component = render(
    <ESTitleSection
      title="Title"
      titleSlot={<p>😀</p>}
      subtitle="Subtitle"
      subTitleSlot={<p>😀</p>}
    >
      <p>Hello World</p>
    </ESTitleSection>,
  );
  expect(component).toBeTruthy();
});

it("Title Section matches DOM Snapshot", () => {
  const domTree = render(
    <ESTitleSection
      title="Title"
      titleSlot={<p>😀</p>}
      subtitle="Subtitle"
      subTitleSlot={<p>😀</p>}
    >
      <p>Hello World</p>
    </ESTitleSection>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Title section no subtitle matches DOM Snapshot", () => {
  const domTree = render(
    <ESTitleSection title="Title" titleSlot={<p>😀</p>}>
      <p>Hello World</p>
    </ESTitleSection>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Title section with no title slot matches DOM Snapshot", () => {
  const domTree = render(
    <ESTitleSection title="Title">
      <p>Hello World</p>
    </ESTitleSection>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Title section with no subtitle slot matches DOM Snapshot", () => {
  const domTree = render(
    <ESTitleSection title="Title" subtitle="Subtitle">
      <p>Hello World</p>
    </ESTitleSection>,
  );
  expect(domTree).toMatchSnapshot();
});
