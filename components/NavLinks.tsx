import Link from 'next/link';
import { Anchor } from '@mantine/core';
const NavLinks = () => {
  const routes = [
    {
      path: "/home",
      name: "HOME",
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
        style={{
          color: 'white',
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