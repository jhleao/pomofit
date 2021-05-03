import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container } from './style';

const CompletedChallenges = () => {

  const { completedCount } = useContext(GlobalContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{completedCount}</span>
    </Container>
  )
}

export default CompletedChallenges
