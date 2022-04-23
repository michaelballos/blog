import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/Global.css';
import styles from '../styles/App.module.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.app}>
      <Head>
        <link href="dist/hamburgers.css" rel="stylesheet" />
        <meta name="Michael Ballos" content="Web Dev Blog" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Michael Ballos</title>
      </Head>
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
