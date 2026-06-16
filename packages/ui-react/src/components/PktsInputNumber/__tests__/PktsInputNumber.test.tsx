import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputNumber from "../PktsInputNumber";

test.describe("PktsInputNumber", () => {
    ["light", "dark"].forEach((theme: any) => {
        test(`PktsInputNumber-variants-${theme}`, async ({ mount }) => {
            const component = await mount(
                <ComponentTestBox theme={theme} component={
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputNumber placeholder="0" /></div>
                            <div id="hover-default" style={{ width: "160px" }}><PktsInputNumber defaultValue={10} /></div>
                            <div id="focus-default" style={{ width: "160px" }}><PktsInputNumber defaultValue={10} /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber placeholder="0" disabled /></div>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputNumber variant="branded" placeholder="0" /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber variant="branded" defaultValue={10} /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber variant="branded" defaultValue={10} /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber variant="branded" placeholder="0" disabled /></div>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputNumber error placeholder="0" /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber error defaultValue={10} /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber error defaultValue={10} /></div>
                            <div style={{ width: "160px" }}><PktsInputNumber error placeholder="0" disabled /></div>
                        </div>
                    </div>
                } />,
            );
            await component.locator("#focus-default input").focus();
            await component.locator("#hover-default .pkts-input-text").hover();
            await expect(component).toHaveScreenshot(`PktsInputNumber-variants-${theme}.png`);
        });
    });

    test("can change value with typing", async ({ mount }) => {
        const component = await mount(<PktsInputNumber />);
        const input = component.locator("input");
        await expect(input).toHaveValue("0");
        await input.fill("123");
        await expect(input).toHaveValue("123");
        await input.clear();
        await expect(input).toHaveValue("");
    });

    test("can change value with buttons", async ({ mount }) => {
        const component = await mount(<PktsInputNumber />);
        const input = component.locator("input");
        const addButton = component.locator("svg").first();
        const minusButton = component.locator("svg").last();
        await addButton.click();
        await expect(input).toHaveValue("1");
        await minusButton.click();
        await expect(input).toHaveValue("0");
        await input.clear();
        await expect(input).toHaveValue("");
    });

    test("does not exceed max value of 2", async ({ mount }) => {
        const component = await mount(<PktsInputNumber max={2} />);
        const input = component.locator("input");
        const addButton = component.locator("svg").first();
        await addButton.click();
        await addButton.click();
        await addButton.click();
        await expect(input).toHaveValue("2");
        await input.fill("5");
        await addButton.click();
        await expect(input).toHaveValue("2");
    });
});
