import { useContext } from 'react';
import { CountdownContext } from '@contexts/CountdownContext';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Container, Button } from './style';

const Countdown = () => {
  const {
    timePercentage,
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>
      <Button
        disabled={hasFinished}
        active={isActive}
        percentage={timePercentage}
        onClick={!isActive ? startCountdown : resetCountdown}
        type='button'>
        { !hasFinished && !isActive && 'Iniciar um ciclo'}
        { !hasFinished && !isActive && <BsFillPlayFill />}

        { !hasFinished && isActive && 'Abandonar ciclo' }
        { !hasFinished && isActive && <MdClose /> }

        { hasFinished && 'Ciclo encerrado' }
        { hasFinished && <AiFillCheckCircle /> }
      </Button>
    </div>
  );
};

export default Countdown;
