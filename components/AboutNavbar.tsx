import React, { useState } from 'react';
import NavLogo from './NavLogo';
import AboutNavLinks from './AboutNavLinks';
import { useMantineTheme, Burger } from '@mantine/core';

const AboutNavbar = () => {
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
        <AboutNavLinks />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color= 'white'
          mr="xl"
        />
      </div>
    </div>
  );
};

export default AboutNavbar;
