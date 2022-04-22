import React, { useState } from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';

const NavbarContent = () => {
  return (
    <div
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        height: '100%', 
        paddingLeft: '15px',
      }}
    >
     <NavLogo />
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '30px',
        paddingLeft: '30px',
      }}
    >
      <NavLinks />
    </div>
    </div>
  )
};

export default NavbarContent;
