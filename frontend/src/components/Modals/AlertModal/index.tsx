import React, { useContext } from 'react'
import ModalContext from '../../../contexts/ModalContext';

import { Overlay, Container, Title, Button, ButtonsContainer } from './style';

const AlertModal = () => {

  const { alertModalMsg, toggleAlertModal } = useContext(ModalContext);

  const okHandler = () => toggleAlertModal();

  return (
    <>
      <Overlay />
      <Container>
        <Title>
          <p>{alertModalMsg}</p>
        </Title>
        <ButtonsContainer>
          <Button alternative onClick={okHandler}>OK</Button>
        </ButtonsContainer>
      </Container>
    </>
  )
}

export default AlertModal
