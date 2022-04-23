import React from 'react';
import NavLogo from './NavLogo';
import AboutNavLinks from './AboutNavLinks';
import { useMantineTheme } from '@mantine/core';
import styles from '../styles/Navbar.module.css';

const AboutNavbar = () => {
  return (
    <div
      className={styles.container}
    >
      <NavLogo />
      <div
        className={styles.links}
      >
        <AboutNavLinks />
      </div>
    </div>
  );
};

export default AboutNavbar;
