import { useContext } from "react";
import PacketsDesignTokenProviderContext from "./PacketsDesignTokenProviderContext";

const usePacketsDesignTokens = () => {
  return useContext(PacketsDesignTokenProviderContext);
};

export default usePacketsDesignTokens;
