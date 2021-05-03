import { LeaderboardData } from '@types';
import React from 'react'
import BoardItem from './BoardItem';

import { BoardHeader, Container } from './style';

interface BoardPs {
  data: LeaderboardData[]
}

const Board = ({data} : BoardPs) => {

  return (
    <Container>
      <BoardHeader>
        <th>Posição</th>
        <th>Usuário</th>
        <th>Desafios</th>
        <th>Experiência</th>
      </BoardHeader>
      {data.map(d => <BoardItem data={d} />)}
    </Container>
  )
}

export default Board
