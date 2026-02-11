import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import ESInputTypeahead from "../ESInputTypeahead";
import ESInputOption from "../../ESInputOption";

const options = [
  "foo (test)",
  "bar (test)",
  "baz (test)",
  "fizz",
  "buzz",
  "any other extremely long text that may demonstrate text overflow into ellipses",
].map((value) => <ESInputOption key={value}>{value}</ESInputOption>);

test.describe("ESInputTypeahead", () => {
  ["light", "dark"].forEach((theme) => {
    test(`default-${theme}`, async ({ mount }) => {
      const testBox = (
        <div
          style={{
            padding: "8px",
            height: "300px",
            width: "500px",
          }}
          className={theme}
        >
          <ESInputTypeahead>{options}</ESInputTypeahead>
        </div>
      );
      const component = await mount(testBox);
      const input = component.getByRole("textbox");
      await input.fill("test");
      await expect(input).toBeVisible();
      await input.click();
      await expect(
        component.getByRole("listbox", {
          name: "Typeahead Dropdown Options",
        }),
      ).toBeVisible();
      await component.getByRole("option").nth(0).click();
      await component.getByRole("option").nth(1).focus();
      await component.getByRole("option").nth(2).hover();
      await expect(component).toHaveScreenshot();
    });
  });

  test(`no-result`, async ({ mount }) => {
    const component = await mount(
      <ESInputTypeahead>{options}</ESInputTypeahead>,
    );
    const input = component.getByRole("textbox");
    await expect(input).toBeVisible();
    await input.click();
    await input.fill("impossible to succeed search value");
    await expect(
      component.getByRole("listbox", {
        name: "Typeahead Dropdown Options",
      }),
    ).toHaveText('0 results for "impossible to succeed search value"');
  });

  test(`empty`, async ({ mount }) => {
    const component = await mount(<ESInputTypeahead>{[]}</ESInputTypeahead>);
    const input = component.getByRole("textbox");
    await expect(input).toBeVisible();
    await input.click();
    await expect(
      component.getByRole("listbox", {
        name: "Typeahead Dropdown Options",
      }),
    ).toHaveText(/No results*/);
  });

  test(`loading`, async ({ mount }) => {
    const component = await mount(
      <ESInputTypeahead loading>{options}</ESInputTypeahead>,
    );
    const input = component.getByRole("textbox");
    await expect(input).toBeVisible();
    await input.click();
    await input.fill("loading value");
    await expect(
      component.getByRole("listbox", {
        name: "Typeahead Dropdown Options",
      }),
    ).toHaveText(/Loading*/);
  });

  test(`add-and-remove`, async ({ mount }) => {
    // click two options, ensure they are there
    // then click the chip and the option and ensure they are gone
    const component = await mount(
      <ESInputTypeahead>{options}</ESInputTypeahead>,
    );
    await component.getByRole("textbox").click();
    await component.getByRole("option", { name: "foo" }).click();
    await component.getByRole("option", { name: "bar" }).click();
    // expect they are there
    await expect(component.getByRole("button", { name: "foo" })).toBeVisible();
    await expect(component.getByRole("button", { name: "bar" })).toBeVisible();
    await component.getByRole("button", { name: "foo" }).click();
    await component.getByRole("option", { name: "bar" }).click();
    // expect they are gone
    await expect(
      component.getByRole("button", { name: "foo" }),
    ).not.toBeVisible();
    await expect(
      component.getByRole("button", { name: "bar" }),
    ).not.toBeVisible();
  });
});
