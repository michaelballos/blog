import React, { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AppShell, Burger, useMantineTheme, Header, Box } from '@mantine/core';
import NavbarContent from '../components/NavbarContent';
import '../styles/Global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/ScrollTrigger.min.js"></script>
        <link href="dist/hamburgers.css" rel="stylesheet" />
        <meta name="Michael Ballos" content="Web Dev Blog" />
        <title>Michael Ballos</title>
      </Head>
      <AppShell
        fixed
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[7],
          height: '500vh',
        })}
        > 
        <Component {...pageProps} />
        </AppShell>
    </>
  );
}

export default MyApp;
