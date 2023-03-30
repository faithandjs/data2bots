import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import LoadingBar from "react-top-loading-bar";
import Head from "next/head";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // Setup Page Loader
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setProgress(40));
    Router.events.on("routeChangeComplete", () => setProgress(100));
    Router.events.on("routeChangeError", () => setProgress(0));
  }, []);
  return getLayout(
    <>
      <Head>
        <meta
          name="description"
          content="Data2Bots is a leading IT Consulting firm focused on data, cloud and digital transformation. Our data experts work in close collaboration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
      <LoadingBar
        color="#000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
}
