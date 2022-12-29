import '../styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="hotelbb" />
        <link rel="shortcut icon" href="public/assets/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="public/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="public/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="public/assets/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
