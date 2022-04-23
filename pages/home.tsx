import React from 'react';
import type { NextPage } from 'next'
import HomeContent from '../components/HomeContent';
import NavbarContent from '../components/NavbarContent';
import NavLogo from '../components/NavLogo';

const Home: NextPage = () => {
  return (
    <div>
    <div
      style={{
        display: 'flex',
        width: '24px',
        paddingLeft: '15px',
      }} 
    >
      <NavLogo />
    </div>
      <HomeContent />       
    </div>
  )
}

export default Home

