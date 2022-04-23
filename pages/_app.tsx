import React, { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AppShell, Burger, useMantineTheme, Header, Box } from '@mantine/core';
import '../styles/Global.css';
import '../styles/App.css';
import { gsap } from 'gsap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/ScrollTrigger.min.js"></script>
        <link href="dist/hamburgers.css" rel="stylesheet" />
        <meta name="Michael Ballos" content="Web Dev Blog" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />
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
