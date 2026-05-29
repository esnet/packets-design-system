import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsInputEmail from "../PktsInputEmail";

test.describe("PktsInputEmail", () => {
    ["light", "dark"].forEach((theme: any) => {
        test(`PktsInputEmail-variants-${theme}`, async ({ mount }) => {
            const component = await mount(
                <ComponentTestBox theme={theme} component={
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputEmail placeholder="test@email.com" /></div>
                            <div id="hover-default" style={{ width: "160px" }}><PktsInputEmail defaultValue="test@email.com" /></div>
                            <div id="focus-default" style={{ width: "160px" }}><PktsInputEmail defaultValue="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail placeholder="test@email.com" disabled /></div>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputEmail variant="branded" placeholder="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail variant="branded" defaultValue="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail variant="branded" defaultValue="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail variant="branded" placeholder="test@email.com" disabled /></div>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <div style={{ width: "160px" }}><PktsInputEmail error placeholder="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail error defaultValue="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail error defaultValue="test@email.com" /></div>
                            <div style={{ width: "160px" }}><PktsInputEmail error placeholder="test@email.com" disabled /></div>
                        </div>
                    </div>
                } />,
            );
            await component.locator("#focus-default input").focus();
            await component.locator("#hover-default .pkts-input-text").hover();
            await expect(component).toHaveScreenshot(`PktsInputEmail-variants-${theme}.png`);
        });
    });

    test("icon clears", async ({ mount }) => {
        const component = await mount(<PktsInputEmail />);
        const input = component.locator("input[type='email']");
        const clearIcon = component.locator("svg");
        await input.fill("test@example.com");
        await expect(input).toHaveValue("test@example.com");
        await clearIcon.click();
        await expect(input).toHaveValue("");
    });
});
