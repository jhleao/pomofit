import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Container, NotActive, Active } from './style';

const ChallengeBox = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useContext(GlobalContext);

  const { resetCountdown } = useContext(CountdownContext);

  const { xp, type, description } = activeChallenge || {};

  const handleChallengeSuccess = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailure = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <Container>
      { activeChallenge
        ? <Active>
          <h3>Ganhe {xp} xp</h3>
          <div>
            <img src={`icons/${type}.svg`} alt='Exercício' />
            <h4>Exercite-se</h4>
            {description}
          </div>
          <div>
            <button onClick={handleChallengeFailure}>Falhei</button>
            <button onClick={handleChallengeSuccess}>Completei</button>
          </div>
        </Active>
        : <NotActive>
        Finalize um ciclo para receber um desafio
          <div>
            <img src='icons/level-up.svg' alt='Level Up' />
            <span>Avance de nível completando desafios.</span>
          </div>
        </NotActive> }
    </Container>
  );
};

export default ChallengeBox;
