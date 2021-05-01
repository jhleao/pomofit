import React from 'react'
import { LeaderboardData } from '../..';

import { Container, Position, UserData, Name,
  Img, Level, ChallengeCount, Experience } from './style';

interface LeaderboardItemPs {
  data: LeaderboardData
}

const BoardItem = ({data}: LeaderboardItemPs) => {

  const { position, user: { name, imgUrl, level }, completedCount, totalExp } = data;

  return (
    <Container>
      <Position>{position}</Position>
      <UserData>
        <Img src={imgUrl}/>
        <Name>{name}</Name>
        <Level>
          <img src={'/icons/level.svg'} />
          Level {level}
        </Level>
      </UserData>
      <ChallengeCount><span>{completedCount}</span> completados</ChallengeCount>
      <Experience><span>{totalExp}</span>xp</Experience>
    </Container>
  )
}

export default BoardItem
