import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container } from './style';

const CompletedChallenges = () => {

  const { challengesCompleted } = useContext(GlobalContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallenges
