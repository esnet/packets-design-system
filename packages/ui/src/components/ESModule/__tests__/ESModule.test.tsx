import { render } from "@testing-library/react";
import ESModule from "../ESModule";

test("It renders without crashing", () => {
  const component = render(
    <ESModule title="A Title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque. Vel turpis nunc eget lorem dolor sed viverra. Urna
        condimentum mattis pellentesque id. Quisque id diam vel quam elementum
        pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu non. Nulla
        facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec
        adipiscing tristique risus nec feugiat. Et ultrices neque ornare aenean.
        Et malesuada fames ac turpis egestas sed tempus. Nam at lectus urna duis
        convallis convallis tellus id interdum. Commodo elit at imperdiet dui
        accumsan sit amet nulla facilisi. Tempus imperdiet nulla malesuada
        pellentesque elit eget gravida. Erat imperdiet sed euismod nisi porta.
        Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
        consequat. At urna condimentum mattis pellentesque id. Lacus viverra
        vitae congue eu. Purus sit amet luctus venenatis lectus magna.
      </p>
    </ESModule>,
  );
  expect(component).toBeTruthy();
});

it("ESModule matches DOM Snapshot", () => {
  const domTree = render(
    <ESModule title="A Title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque. Vel turpis nunc eget lorem dolor sed viverra. Urna
        condimentum mattis pellentesque id. Quisque id diam vel quam elementum
        pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu non. Nulla
        facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec
        adipiscing tristique risus nec feugiat. Et ultrices neque ornare aenean.
        Et malesuada fames ac turpis egestas sed tempus. Nam at lectus urna duis
        convallis convallis tellus id interdum. Commodo elit at imperdiet dui
        accumsan sit amet nulla facilisi. Tempus imperdiet nulla malesuada
        pellentesque elit eget gravida. Erat imperdiet sed euismod nisi porta.
        Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
        consequat. At urna condimentum mattis pellentesque id. Lacus viverra
        vitae congue eu. Purus sit amet luctus venenatis lectus magna.
      </p>
    </ESModule>,
  );
  expect(domTree).toMatchSnapshot();
});

it("with no title matches DOM Snapshot", () => {
  const domTree = render(
    <ESModule>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque. Vel turpis nunc eget lorem dolor sed viverra. Urna
        condimentum mattis pellentesque id. Quisque id diam vel quam elementum
        pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu non. Nulla
        facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec
        adipiscing tristique risus nec feugiat. Et ultrices neque ornare aenean.
        Et malesuada fames ac turpis egestas sed tempus. Nam at lectus urna duis
        convallis convallis tellus id interdum. Commodo elit at imperdiet dui
        accumsan sit amet nulla facilisi. Tempus imperdiet nulla malesuada
        pellentesque elit eget gravida. Erat imperdiet sed euismod nisi porta.
        Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
        consequat. At urna condimentum mattis pellentesque id. Lacus viverra
        vitae congue eu. Purus sit amet luctus venenatis lectus magna.
      </p>
    </ESModule>,
  );
  expect(domTree).toMatchSnapshot();
});

it("with surface matches DOM Snapshot", () => {
  const domTree = render(
    <ESModule surface title="A Module with a Surface">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet
        nibh praesent tristique. Sem et tortor consequat id. Turpis in eu mi
        bibendum neque. Vel turpis nunc eget lorem dolor sed viverra. Urna
        condimentum mattis pellentesque id. Quisque id diam vel quam elementum
        pulvinar etiam. Ullamcorper a lacus vestibulum sed arcu non. Nulla
        facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec
        adipiscing tristique risus nec feugiat. Et ultrices neque ornare aenean.
        Et malesuada fames ac turpis egestas sed tempus. Nam at lectus urna duis
        convallis convallis tellus id interdum. Commodo elit at imperdiet dui
        accumsan sit amet nulla facilisi. Tempus imperdiet nulla malesuada
        pellentesque elit eget gravida. Erat imperdiet sed euismod nisi porta.
        Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
        consequat. At urna condimentum mattis pellentesque id. Lacus viverra
        vitae congue eu. Purus sit amet luctus venenatis lectus magna.
      </p>
    </ESModule>,
  );
  expect(domTree).toMatchSnapshot();
});
