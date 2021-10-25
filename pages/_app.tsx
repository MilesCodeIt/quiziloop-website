import type { AppProps } from "next/app";

export default function QuiziloopApp({
    Component,
    pageProps
}: AppProps) {
  return <Component {...pageProps} />;
}