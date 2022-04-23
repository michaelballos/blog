import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AppShell } from '@mantine/core';
import '../styles/Global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        <title>Michael Ballos</title>
      </Head>
      <AppShell
        fixed
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[7],
          height: '100vh',
        })}
        > 
        <Component {...pageProps} />
        </AppShell>
    </>
  );
}

export default MyApp;
