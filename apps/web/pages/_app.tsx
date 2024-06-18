import type { AppProps } from "next/app";

// @ts-ignore
import "@esnet/packets-ui/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
