import "../styles/index.scss";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "../lib/fetchJson";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.log(err);
        },
      }}
    >
      <NextNProgress color="#D04B4B" />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" rtl />
    </SWRConfig>
  );
}

export default MyApp;
