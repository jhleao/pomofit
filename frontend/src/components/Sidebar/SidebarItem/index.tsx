import React from 'react'
import { Container } from './style';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SidebarItem = ({path, Icon}) => {
  const Router = useRouter();
  const pathname = Router.asPath;
  const selected = pathname === path;

  return (
    <Link href={path}>
      <Container selected={selected}>
        <Icon />
      </Container>
    </Link>
  )
}

export default SidebarItem
