import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { ComponentTestBox } from "../../../lib/utils/ComponentTestBox";
import PktsTabs from "../PktsTabs";
import PktsTab from "../PktsTab";

test.describe("PktsTabs", () => {
    ["light", "dark"].forEach((theme: any) => {
        test(`PktsTabs-variants-${theme}`, async ({ mount }) => {
            const component = await mount(
                <ComponentTestBox theme={theme} component={
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <PktsTabs>
                            <PktsTab isActive>Tab 1</PktsTab>
                            <PktsTab>Tab 2</PktsTab>
                            <PktsTab>Tab 3</PktsTab>
                        </PktsTabs>
                        <PktsTabs border>
                            <PktsTab isActive>Tab 1</PktsTab>
                            <PktsTab>Tab 2</PktsTab>
                            <PktsTab>Tab 3</PktsTab>
                        </PktsTabs>
                    </div>
                } />,
            );
            await component.locator("li.pkts-tab:not(.pkts-active)").first().hover();
            await expect(component).toHaveScreenshot(`PktsTabs-variants-${theme}.png`);
        });
    });
});
