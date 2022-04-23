import React from 'react';
import type { NextPage } from 'next'
import NavLogo from '../components/NavLogo';
import HomeNavLinks from '../components/HomeNavLinks';

const Home: NextPage = () => {
  return (
    <div>
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
      <HomeNavLinks />
    </div>
    </div>
  )
}

export default Home
