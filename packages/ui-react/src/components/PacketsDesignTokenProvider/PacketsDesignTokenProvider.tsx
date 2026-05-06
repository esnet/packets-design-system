import React from "react";
import PacketsDesignTokenProviderContext from "./PacketsDesignTokenProviderContext";

// @ts-ignore
import * as designTokens from "@esnet/pkts-tokens";

const PacketsDesignTokenProvider = ({
  children,
}: React.PropsWithChildren<{}>) => (
  <PacketsDesignTokenProviderContext.Provider value={designTokens}>
    {children}
  </PacketsDesignTokenProviderContext.Provider>
);

export default PacketsDesignTokenProvider;
