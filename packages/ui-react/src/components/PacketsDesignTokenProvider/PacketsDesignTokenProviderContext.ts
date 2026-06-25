import React from "react";

// @ts-ignore
import * as designTokens from "@esnet/pkts-tokens";

const PacketsDesignTokenProviderContext =
  React.createContext<object>(designTokens);

export default PacketsDesignTokenProviderContext;
