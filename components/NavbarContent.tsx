import React, { useState } from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import { useMantineTheme, Burger } from '@mantine/core';

const NavbarContent = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: '15px',
        backgroundColor: theme.colors.dark[7]
      }}
    >
      <NavLogo />
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '30px',
          paddingLeft: '30px'
        }}
      >
        <NavLinks />
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
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </div>
    </div>
  );
};

export default NavbarContent;
