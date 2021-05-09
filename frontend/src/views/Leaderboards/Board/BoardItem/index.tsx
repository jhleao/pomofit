import { LeaderboardData } from '@types';
import React from 'react';

import {
  Container, Position, UserData, Name,
  Img, Level, ChallengeCount, Experience,
} from './style';

interface LeaderboardItemPs {
  data: LeaderboardData
}

const BoardItem = ({ data }: LeaderboardItemPs) => {
  const { position, user: { name, imgUrl, level }, completedCount, totalExp } = data;

  return (
    <Container>
      <Position>{position}</Position>
      <UserData>
        <Img src={imgUrl}/>
        <div>
          <Name>{name}</Name>
          <Level>
            <img src={'/icons/level.svg'} />
            Level {level}
          </Level>
        </div>
      </UserData>
      <ChallengeCount><span>{completedCount}</span> <span>completados</span></ChallengeCount>
      <Experience><span>{totalExp}</span><span>xp</span></Experience>
    </Container>
  );
};

export default BoardItem;
