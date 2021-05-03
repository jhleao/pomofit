import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import ModalContext from '../../contexts/ModalContext';
import AlertModal from '../Modals/AlertModal';
import ConfirmationModal from '../Modals/ConfirmationModal';
import LevelUpModal from '../Modals/LevelUpModal';
import StatsModal from '../Modals/StatsModal';
import Sidebar from '../Sidebar'

import { Container, Content, SidebarContainer, GradientOverlay } from './style';

const Layout = ({children}) => {

  const { alertModalIsOpen, confirmationModalIsOpen, 
    levelModalIsOpen, statsModalIsOpen } = useContext(ModalContext);

  const Router = useRouter();
  const isLogin = Router.asPath === '/login';
  if(isLogin) return children;

  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        {/* <GradientOverlay /> */}
        {children}
        {alertModalIsOpen && <AlertModal />}
        {confirmationModalIsOpen && <ConfirmationModal />}
        {levelModalIsOpen && <LevelUpModal />}
        {statsModalIsOpen && <StatsModal />}
      </Content>
    </Container>
  )
}

export default Layout
