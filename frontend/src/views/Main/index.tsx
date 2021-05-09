import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallenges';
import { Container, PageContainer, Section } from './style';

import ExpBar from '../../components/ExpBar';
import Countdown from '../../components/Countdown';
import ChallengeBox from '../../components/ChallengeBox';
import { CountdownProvider } from '../../contexts/CountdownContext';

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
