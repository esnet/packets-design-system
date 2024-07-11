import { render } from "@testing-library/react";
import ESFormSection from "../ESFormSection";

test("It renders without crashing", () => {
  const component = render(
    <ESFormSection title="Title">
      <h1>content</h1>
    </ESFormSection>,
  );
  expect(component).toBeTruthy();
});

it("Form section matches DOM Snapshot", () => {
  const domTree = render(
    <ESFormSection
      title={"Circuit"}
      descriptionSlot={
        <>
          <p>
            Circuit switching is a type of network configuration in which a
            physical path is obtained and dedicated to a single connection
            between two endpoints in the network for the duration of a dedicated
            connection.
          </p>
        </>
      }
    >
      <h1>content</h1>
    </ESFormSection>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Form Section with title url matches DOM Snapshot", () => {
  const domTree = render(
    <ESFormSection
      title={"Circuit"}
      titleURL="http://www.es.net"
      descriptionSlot={
        <>
          <p>
            Circuit switching is a type of network configuration in which a
            physical path is obtained and dedicated to a single connection
            between two endpoints in the network for the duration of a dedicated
            connection.
          </p>
        </>
      }
    >
      <h1>content</h1>
    </ESFormSection>,
  );
  expect(domTree).toMatchSnapshot();
});
