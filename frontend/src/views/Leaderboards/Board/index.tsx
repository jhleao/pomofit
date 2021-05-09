import { LeaderboardData } from '@types';
import BoardItem from './BoardItem';

import { BoardHeader, Container } from './style';

interface BoardPs {
  data: LeaderboardData[]
}

const Board = ({ data } : BoardPs) => (
  <Container>
    <BoardHeader>
      <span>Posição</span>
      <span>Usuário</span>
      <span>Desafios</span>
      <span>Experiência</span>
    </BoardHeader>
    {data.map((d, i) => <BoardItem data={d} key={i}/>)}
  </Container>
);

export default Board;
