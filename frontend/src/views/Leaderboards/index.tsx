import ApiContext from '@contexts/ApiContext';
import { LeaderboardData } from '@types';
import { useContext, useEffect, useState } from 'react';
import Board from './Board';

import { Container } from './style';

const Leaderboards = () => {
  const [leaderData, setLeaderData] = useState([] as LeaderboardData[]);

  const { leaderboards } = useContext(ApiContext);
  const updateData = async () => setLeaderData(await leaderboards.get());
  useEffect(() => { updateData(); }, []);

  return (
    <Container>
      <h1>Ranking Mundial</h1>
      <Board data={leaderData} />
    </Container>
  );
};

export default Leaderboards;
