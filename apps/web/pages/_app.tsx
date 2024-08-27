import type { AppProps } from "next/app";

import { PacketsDesignTokenProvider } from "@esnet/packets-ui";

import "@esnet/packets-ui/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PacketsDesignTokenProvider>
      <Component {...pageProps} />
    </PacketsDesignTokenProvider>
  );
}
