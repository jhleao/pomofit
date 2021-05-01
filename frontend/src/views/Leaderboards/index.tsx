import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../../contexts/ApiContext';
import Board from './Board';

import { Container } from './style';

export interface LeaderboardData {
  position: number;
  user: {
    name: string, 
    imgUrl: string, 
    level: number};
  completedCount: number, 
  totalExp: number
}

const Leaderboards = () => {

  const testData = [
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
    {position: 1, user: {name: 'José Henrique Leão', imgUrl: 'https://github.com/jhleao.png', level: 43}, completedCount: 127, totalExp: 154000},
  ]

  const [leaderData, setLeaderData] = useState(testData as LeaderboardData[]);

  // const { getLeaderboards } = useContext(ApiContext);
  // const updateData = async () => setLeaderData(await getLeaderboards());
  // useEffect(() => {updateData()}, []);

  return (
    <Container>
      <h1>Ranking Mundial</h1>
      <Board data={leaderData} />
    </Container>
  )
}

export default Leaderboards
