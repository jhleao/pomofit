import ModalContext from '@contexts/ModalContext';
import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext';
import Toggle from '../../Toggle/Toggle';

import { Overlay, Container, CloseIcon, Title, ThemeToggleContainer,
  StatsBox, StatsContainer, StatsIcon } from './style';

const StatsModal = () => {

  const { toggleTheme, theme, failedCount, startedCount, ranking,
    canceledCount, completedCount, currentExperience
  } = useContext(GlobalContext);

  const { toggleStatsModal } = useContext(ModalContext);

  return (
    <>
      <Overlay />
      <Container>
        <Title>
          <p>Estatísticas</p>
          <StatsIcon />
        </Title>
        <StatsContainer>
          <StatsBox><p>Desafios iniciados:</p><span>{startedCount}</span></StatsBox>
          <StatsBox><p>Desafios completos:</p><span>{completedCount}</span></StatsBox>
          <StatsBox><p>Experiência total:</p><span>{currentExperience}xp</span></StatsBox>
          <StatsBox><p>Ranking mundial:</p><span>{ranking}°</span></StatsBox>
          <CloseIcon src='/icons/close.svg' onClick={toggleStatsModal} />
        </StatsContainer>
        <ThemeToggleContainer>
          <p>Tema: </p>
          <Toggle set={toggleTheme} value={theme.title === 'dark'} />
        </ThemeToggleContainer>
      </Container>
    </>
  )
}

export default StatsModal
