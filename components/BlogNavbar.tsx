import React from 'react';
import NavLogo from './NavLogo';
import BlogNavLinks from './BlogNavLinks';
import styles from '../styles/Navbar.module.css';

const BlogNavbar = () => {
  return (
    <div
      className={styles.container}
    >
      <NavLogo />
      <div
        className={styles.links} 
      >
        <BlogNavLinks />
      </div>
    </div>
  );
};

export default BlogNavbar;
