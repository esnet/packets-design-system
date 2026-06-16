import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputPassword from "../PktsInputPassword";

test.describe("PktsInputPassword", () => {
    ["light", "dark"].forEach((theme: any) => {
        test(`PktsInputPassword-variants-${theme}`, async ({ mount }) => {
            const component = await mount(
                <ComponentTestBox theme={theme} component={
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputPassword placeholder="password" /></div>
                            <div id="hover-default" style={{ width: "160px" }}><PktsInputPassword defaultValue="password" /></div>
                            <div id="focus-default" style={{ width: "160px" }}><PktsInputPassword defaultValue="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword placeholder="password" disabled /></div>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputPassword variant="branded" placeholder="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword variant="branded" defaultValue="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword variant="branded" defaultValue="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword variant="branded" placeholder="password" disabled /></div>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputPassword error placeholder="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword error defaultValue="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword error defaultValue="password" /></div>
                            <div style={{ width: "160px" }}><PktsInputPassword error placeholder="password" disabled /></div>
                        </div>
                    </div>
                } />,
            );
            await component.locator("#focus-default input").focus();
            await component.locator("#hover-default .pkts-input-text").hover();
            await expect(component).toHaveScreenshot(`PktsInputPassword-variants-${theme}.png`);
        });
    });

    test("typing into input", async ({ mount }) => {
        const component = await mount(<PktsInputPassword />);
        const input = component.locator("input");
        await input.fill("Test input");
        await expect(input).toHaveValue("Test input");
    });

    test("click visibility toggle button", async ({ mount }) => {
        const component = await mount(<PktsInputPassword />);
        const input = component.locator("input");
        expect(await input.getAttribute("type")).toBe("password");
        const toggleButton = component.locator("svg").first();
        await toggleButton.click();
        expect(await input.getAttribute("type")).toBe("text");
    });

    test("click clear button", async ({ mount }) => {
        const component = await mount(<PktsInputPassword />);
        const input = component.locator("input");
        const clearButton = component.locator("svg").last();
        await input.fill("Text to clear");
        await clearButton.click();
        expect(await input.inputValue()).toBe("");
    });
});
