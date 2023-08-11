import React from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Real State</title>
        <meta name="language" content="English" />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/svg+xml" href="/houseline.svg" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
