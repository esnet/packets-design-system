import type { AppProps } from "next/app";

import { PacketsDesignTokenProvider } from "@esnet/packets-ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PacketsDesignTokenProvider>
      <Component {...pageProps} />
    </PacketsDesignTokenProvider>
  );
}
