import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext';

import { Overlay, Container, Number, 
  CloseIcon, Label, WhatsAppShare} from './style';
import { IoLogoWhatsapp } from 'react-icons/io5';
import ModalContext from '../../../contexts/ModalContext';

const LevelUpModal = () => {

  const { level } = useContext(GlobalContext);
  const { toggleLevelModal } = useContext(ModalContext);

  return (
    <>
      <Overlay />
      <Container>
        <CloseIcon src='/icons/close.svg' onClick={toggleLevelModal} />
        <Number>
          {level}
        </Number>
        <Label>
          Level Up!
          <span>Você passou para o nível {level}!</span>
        </Label>
        <WhatsAppShare type='button'>
          Compartilhar no WhatsApp
          <IoLogoWhatsapp />
        </WhatsAppShare>
      </Container>
    </>
  )
}

export default LevelUpModal
