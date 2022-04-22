import Link from 'next/link';
import { Anchor } from '@mantine/core';
const NavLinks = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/contact",
      name: "Contact",
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