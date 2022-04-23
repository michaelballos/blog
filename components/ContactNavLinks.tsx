import Link from 'next/link';
import { Anchor } from '@mantine/core';
import styles from '../styles/NavLinks.module.css';
const ContactNavLinks = () => {
  const routes = [
    {
      path: "/",
      name: "HOME",
      id: ''
    },
    {
      path: "/blog",
      name: "BLOG",
      id: ''
    },
    {
      path: "/about",
      name: "ABOUT",
      id: ''
    },
    {
      path: "/contact",
      name: "CONTACT",
      id: 'contact'
    },
  ];

  const links = routes.map((route) => (
    <Link href={route.path} key={route.name}>
      <Anchor
        id={route.id}
        className={styles.links}
      >{route.name}</Anchor>
    </Link>
  ));

  return (
    <>
      {links}
    </>
  )
}

export default ContactNavLinks;