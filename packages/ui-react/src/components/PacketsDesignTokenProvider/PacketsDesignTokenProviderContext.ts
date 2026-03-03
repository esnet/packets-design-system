import React from "react";

// @ts-ignore
import * as designTokens from "@esnet/esnet-tokens";

const PacketsDesignTokenProviderContext =
  React.createContext<object>(designTokens);

export default PacketsDesignTokenProviderContext;
