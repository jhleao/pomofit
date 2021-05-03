import ApiContext from '@contexts/ApiContext';
import { LeaderboardData } from '@types';
import React, { useContext, useEffect, useState } from 'react'
import Board from './Board';

import { Container } from './style';

const Leaderboards = () => {

  // const testData = [
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  //   {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  // ]

  const [leaderData, setLeaderData] = useState([] as LeaderboardData[]);

  const { leaderboards } = useContext(ApiContext);
  const updateData = async () => setLeaderData(await leaderboards.get());
  useEffect(() => {updateData()}, []);

  return (
    <Container>
      <h1>Ranking Mundial</h1>
      <Board data={leaderData} />
    </Container>
  )
}

export default Leaderboards
