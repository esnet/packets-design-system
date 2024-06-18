import { createContext, useContext, PropsWithChildren } from "react";

// @ts-ignore
import * as designTokens from "@esnet/esnet-tokens";

export const PacketsDesignTokenProviderContext =
  createContext<object>(designTokens);

export const PacketsDesignTokenProvider = ({
  children,
}: PropsWithChildren<{}>) => (
  <PacketsDesignTokenProviderContext.Provider value={designTokens}>
    {children}
  </PacketsDesignTokenProviderContext.Provider>
);

export const usePacketsDesignTokens = () => {
  return useContext(PacketsDesignTokenProviderContext);
};
