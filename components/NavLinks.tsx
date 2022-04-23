import Link from 'next/link';
import { Anchor } from '@mantine/core';
import styles from '../styles/NavLinks.module.css';
const NavLinks = () => {
  const routes = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/about",
      name: "ABOUT",
    },
    {
      path: "/blog",
      name: "BLOG",
    },
    {
      path: "/contact",
      name: "CONTACT",
    },
  ];

  const links = routes.map((route) => (
    <Link href={route.path} key={route.name}>
      <Anchor
        className={styles.links}
        styles={{
          textDecoration: 'none',
        }}
      >{route.name}</Anchor>
    </Link>
  ));

  return (
    <>
      {links}
    </>
  )
}

export default NavLinks;