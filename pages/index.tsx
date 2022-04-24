import React from 'react';
import type { NextPage } from 'next'
import NavLogo from '../components/NavLogo';
import HomeNavLinks from '../components/HomeNavLinks';
import styles from '../styles/Home.module.css';
import { Stack } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <div
      className={styles.logo}
    >
      <NavLogo />
    </div>
    <div
      className={styles.links}
    >
      <Stack>
        <HomeNavLinks />
      </Stack>
    </div>
    </div>
  )
}

export default Home
