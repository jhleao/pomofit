import { useRouter } from 'next/router';
import React from 'react'
import Sidebar from '../Sidebar'

import { Container, Content, SidebarContainer, GradientOverlay } from './style';

const Layout = ({children}) => {

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
      </Content>
    </Container>
  )
}

export default Layout
