import { GlobalContext } from '@contexts/GlobalContext';
import GlobalStyles from 'GlobalStyles';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ModalContext from '../../contexts/ModalContext';
import AlertModal from '../Modals/AlertModal';
import ConfirmationModal from '../Modals/ConfirmationModal';
import LevelUpModal from '../Modals/LevelUpModal';
import StatsModal from '../Modals/StatsModal';
import Sidebar from '../Sidebar';

import { Container, Content, SidebarContainer, GradientOverlay } from './style';

const Layout = ({ children }) => {
  const {
    alertModalIsOpen, confirmationModalIsOpen, mobileMenuIsOpen,
    levelModalIsOpen, statsModalIsOpen, toggleMobileMenu,
  } = useContext(ModalContext);
  
  const { theme } = useContext(GlobalContext);

  if (children.props?.statusCode === 404) return children;

  const Router = useRouter();
  const isLogin = Router.asPath === '/login';
  if (isLogin) return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          {/* <GradientOverlay /> */}
          {children}
        </Content>
        {alertModalIsOpen && <AlertModal />}
        {confirmationModalIsOpen && <ConfirmationModal />}
        {levelModalIsOpen && <LevelUpModal />}
        {statsModalIsOpen && <StatsModal />}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
