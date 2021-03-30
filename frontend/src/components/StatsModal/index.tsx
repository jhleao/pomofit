import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext';
import Toggle from '../../components/Toggle/Toggle';

import { Overlay, Container, CloseIcon, Title, ThemeToggleContainer,
  StatsBox, StatsContainer, StatsIcon } from './style';

const StatsModal = () => {

  const { toggleStatsModal, toggleTheme, theme,
    challengesCompleted, currentExperience} = useContext(GlobalContext);

  return (
    <>
      <Overlay />
      <Container>
        <Title>
          <p>Estatísticas</p>
          <StatsIcon />
        </Title>
        <StatsContainer>
          <StatsBox><p>Desafios iniciados:</p><span>123</span></StatsBox>
          <StatsBox><p>Desafios completos:</p><span>{challengesCompleted}</span></StatsBox>
          <StatsBox><p>Experiência total:</p><span>{currentExperience}xp</span></StatsBox>
          <StatsBox><p>Ranking mundial:</p><span>1°</span></StatsBox>
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
