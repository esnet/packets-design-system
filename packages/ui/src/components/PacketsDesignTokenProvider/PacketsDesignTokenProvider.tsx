import React from "react";
import PacketsDesignTokenProviderContext from "./PacketsDesignTokenProviderContext";

const PacketsDesignTokenProvider = ({
  children,
}: React.PropsWithChildren<{}>) => (
  <PacketsDesignTokenProviderContext.Provider value={{}}>
    {children}
  </PacketsDesignTokenProviderContext.Provider>
);

export default PacketsDesignTokenProvider;
