import React, { useContext } from 'react'
import ApiContext from '../../contexts/ApiContext';
import { GlobalContext } from '../../contexts/GlobalContext';

import { Overlay, Container, Title, Button, ButtonsContainer } from './style';

const LogoutModal = () => {

  const { logout } = useContext(ApiContext);
  const { toggleLogoutModal } = useContext(GlobalContext);

  const logoutHandler = async () => {
    logout();
    toggleLogoutModal();
  }

  return (
    <>
      <Overlay />
      <Container>
        <Title>
          <p>Deseja fazer logout?</p>
        </Title>
        <ButtonsContainer>
          <Button alternative onClick={logoutHandler}>Sim</Button>
          <Button onClick={toggleLogoutModal}>Não</Button>
        </ButtonsContainer>
      </Container>
    </>
  )
}

export default LogoutModal
