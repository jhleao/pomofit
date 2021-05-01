import React from 'react'
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';

import { Container, Logo } from './style';
import SidebarItem from './SidebarItem';

const Sidebar = () => {


  return (
    <Container>
      <Logo src='/logo/3.svg'/>
      <SidebarItem path='/' Icon={FiHome}/>
      <SidebarItem path='/leaderboards' Icon={RiMedalLine}/>
    </Container>
  )
}

export default Sidebar
