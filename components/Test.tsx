import React, { useState } from 'react';
import {
  AppShell, 
  useMantineTheme, 
  Header, 
  Burger,
} from '@mantine/core';
import NavLogo from './NavLogo';

const Navbar = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false); 

  return (
    <AppShell
      fixed
      header={
        <Header 
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[7],
            })
          }
          height={70} 
          p='md'
        >
          <div
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              height: '100%' 
            }}
           >
             <NavLogo />
            <div 
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end', 
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
        </Header>
      } 
    >

    </AppShell>
      )
};

export default Navbar;

function useCallback() {
  throw new Error('Function not implemented.');
}


function setOpened(arg0: (o: any) => boolean) {
  throw new Error('Function not implemented.');
}
