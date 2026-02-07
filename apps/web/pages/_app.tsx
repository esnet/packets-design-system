import type { AppProps } from "next/app";

import { PacketsDesignTokenProvider } from "@esnet/packets-ui-react";

import "@esnet/packets-ui-css/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PacketsDesignTokenProvider>
      <Component {...pageProps} />
    </PacketsDesignTokenProvider>
  );
}
