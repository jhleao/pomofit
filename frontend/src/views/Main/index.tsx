import React, {useContext, useState} from 'react'
import GlobalStyles from '../../GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallenges';
import { Container, PageContainer, Section } from './style';

import ExpBar from '../../components/ExpBar';
import Countdown from '../../components/Countdown';
import ChallengeBox from '../../components/ChallengeBox';
import { CountdownProvider } from '../../contexts/CountdownContext';
import LevelUpModal from '../../components/LevelUpModal';
import { GlobalContext } from '../../contexts/GlobalContext';

function App() {

  return (
      <PageContainer>
        <ExpBar/>
        <Container>
          <CountdownProvider>
            <Section>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </Section>
            <Section>
              <ChallengeBox />
            </Section>
          </CountdownProvider>
        </Container>
      </PageContainer>
  );
}

export default App;

