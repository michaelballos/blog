import React from 'react';
import NavLogo from './NavLogo';
import ContactNavLinks from './ContactNavLinks';
import styles from '../styles/Navbar.module.css';

const ContactNavbar = () => {
  return (
    <div
      className={styles.container} 
    >
      <NavLogo />
      <div
        className={styles.links} 
      >
        <ContactNavLinks />
      </div>
    </div>
  );
};

export default ContactNavbar;
