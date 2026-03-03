import React from "react";
import PacketsDesignTokenProviderContext from "./PacketsDesignTokenProviderContext";

// @ts-ignore
import * as designTokens from "@esnet/esnet-tokens";

const PacketsDesignTokenProvider = ({
  children,
}: React.PropsWithChildren<{}>) => (
  <PacketsDesignTokenProviderContext.Provider value={designTokens}>
    {children}
  </PacketsDesignTokenProviderContext.Provider>
);

export default PacketsDesignTokenProvider;
