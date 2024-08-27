import React from "react";
import * as designTokens from "@esnet/esnet-tokens";

const PacketsDesignTokenProviderContext =
  React.createContext<object>(designTokens);

export default PacketsDesignTokenProviderContext;
