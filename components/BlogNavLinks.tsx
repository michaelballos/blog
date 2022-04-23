import Link from 'next/link';
import { Anchor } from '@mantine/core';
import styles from '../styles/NavLinks.module.css';
const BlogNavLinks = () => {
  const routes = [
    {
      path: "/",
      name: "HOME",
      id: ''
    },
    {
      path: "/about",
      name: "ABOUT",
      id: ''
    },
    {
      path: "/blog",
      name: "-BLOG-",
      id: 'blog'
    },
    {
      path: "/contact",
      name: "CONTACT",
      id: ''
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

export default BlogNavLinks;