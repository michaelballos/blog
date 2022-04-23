import React from 'react';
import type { NextPage } from 'next'
import HomeContent from '../components/HomeContent';
import NavbarContent from '../components/NavbarContent';

const Home: NextPage = () => {
  return (
    <div>
      <NavbarContent />
      <HomeContent />       
    </div>
  )
}

export default Home

