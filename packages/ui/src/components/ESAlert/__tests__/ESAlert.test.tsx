import React from "react";
import { render } from "@testing-library/react";
import ESAlert from "../ESAlert";

test("It renders without crashing", () => {
  const component = render(
    <ESAlert type={"info"} title="Alert Title">
      <p>
        Bob Kahn and Vint Cerf are the American computer scientists who
        developed TCP/IP, the set of protocols that governs how data moves
        through a network. This helped the ARPANET evolve into the internet we
        use today.
      </p>
    </ESAlert>,
  );
  expect(component).toBeTruthy();
});

it("Info type matches DOM Snapshot", () => {
  const domTree = render(
    <ESAlert type={"info"} title="Did you know?">
      <p>
        Bob Kahn and Vint Cerf are the American computer scientists who
        developed TCP/IP, the set of protocols that governs how data moves
        through a network. This helped the ARPANET evolve into the internet we
        use today.
      </p>
    </ESAlert>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Warning matches DOM Snapshot", () => {
  const domTree = render(
    <ESAlert type={"warning"} title="Warning Title">
      <label>Node nearing capacity</label>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate
        ut pharetra sit amet aliquam.
      </p>
    </ESAlert>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Success matches DOM Snapshot", () => {
  const domTree = render(
    <ESAlert type={"success"} title="Success Title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate
        ut pharetra sit amet aliquam. Risus nullam eget felis eget nunc
        lobortis. Vel eros donec ac odio tempor orci dapibus ultrices in. Arcu
        non sodales neque sodales ut etiam. Eleifend donec pretium vulputate
        sapien nec sagittis aliquam malesuada bibendum. Aenean euismod elementum
        nisi quis eleifend. Ultrices eros in cursus turpis massa tincidunt.
        Donec adipiscing tristique risus nec feugiat. Imperdiet sed euismod nisi
        porta lorem mollis. Vel fringilla est ullamcorper eget nulla facilisi
        etiam dignissim. Posuere morbi leo urna molestie at. In arcu cursus
        euismod quis viverra nibh cras pulvinar mattis. Aliquet nec ullamcorper
        sit amet. Aliquet sagittis id consectetur purus ut. Fermentum leo vel
        orci porta non pulvinar neque laoreet suspendisse. Sed risus pretium
        quam vulputate dignissim suspendisse. Pretium aenean pharetra magna ac
        placerat vestibulum lectus mauris ultrices. Volutpat lacus laoreet non
        curabitur gravida arcu ac tortor dignissim. Enim sit amet venenatis urna
        cursus eget nunc scelerisque.
      </p>
    </ESAlert>,
  );
  expect(domTree).toMatchSnapshot();
});

it("Error matches DOM Snapshot", () => {
  const domTree = render(
    <ESAlert type={"error"} title="Error Fetching Data">
      <label>Network Error:</label>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate
        ut pharetra sit amet aliquam.
      </p>
      <label>Status Code:</label>
      <p>404</p>
      <label>Message:</label>
      <p>
        Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim.
        Enim sit amet venenatis urna cursus eget nunc scelerisque.
      </p>
    </ESAlert>,
  );
  expect(domTree).toMatchSnapshot();
});
