import React, { useContext } from 'react'
import ModalContext from '../../../contexts/ModalContext';

import { Overlay, Container, Title, Button, ButtonsContainer } from './style';

const ConfirmationModal = () => {

  const { confirmationModalData, toggleConfirmationModal } = useContext(ModalContext);
  const { msg, cb } = confirmationModalData;

  const confirmHandler = async () => {
    await cb();
    toggleConfirmationModal();
  };

  const cancelHandler = () => toggleConfirmationModal();

  return (
    <>
      <Overlay />
      <Container>
        <Title>
          <p>{msg}</p>
        </Title>
        <ButtonsContainer>
          <Button alternative onClick={confirmHandler}>Sim</Button>
          <Button onClick={cancelHandler}>Não</Button>
        </ButtonsContainer>
      </Container>
    </>
  )
}

export default ConfirmationModal
