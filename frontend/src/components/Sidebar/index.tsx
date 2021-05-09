import { FiHome } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

import ModalContext from '@contexts/ModalContext';
import { useContext } from 'react';
import { Container, Logo, MobileTopbar, MobileClose } from './style';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { mobileMenuIsOpen, toggleMobileMenu } = useContext(ModalContext);

  return (
    <>
      <MobileTopbar>
        <GiHamburgerMenu onClick={toggleMobileMenu} />
      </MobileTopbar>
      <Container mobileOpen={mobileMenuIsOpen}>
        <MobileClose onClick={toggleMobileMenu} />
        <Logo src='/logo/3.svg'/>
        <SidebarItem path='/' Icon={FiHome} text='Home'/>
        <SidebarItem path='/leaderboards' Icon={RiMedalLine} text='Ranking'/>
      </Container>
    </>
  );
};

export default Sidebar;
