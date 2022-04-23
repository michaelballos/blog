import React from 'react';
import type { NextPage } from 'next'
import NavLogo from '../components/NavLogo';
import NavLinksHome from '../components/NavLinksHome';
import styles from '../styles/HomeBackground.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.background} />
    <div
      style={{
        display: 'flex',
        width: '24px',
        paddingLeft: '10px',
      }} 
    >
      <NavLogo />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '15rem',
        paddingLeft: '10rem',
        gap: '10px',
      }}
    >
      <NavLinksHome />
    </div>
    </div>
  )
}

export default Home
