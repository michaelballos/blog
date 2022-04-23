import React, { useState } from 'react';
import NavLogo from './NavLogo';
import ContactNavLinks from './ContactNavLinks';
import { useMantineTheme, Burger } from '@mantine/core';

const ContactNavbar = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: '10px',
        backgroundColor: theme.colors.dark[7]
      }}
    >
      <NavLogo />
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '30px',
          paddingLeft: '50px'
        }}
      >
        <ContactNavLinks />
      </div>
    </div>
  );
};

export default ContactNavbar;
