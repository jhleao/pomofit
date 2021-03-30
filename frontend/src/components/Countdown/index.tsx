import React, { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext';
import { GlobalContext } from '../../contexts/GlobalContext';
// import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { Container, Button } from './style';

const Countdown = () => {

  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown } = useContext(CountdownContext);

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
        onClick={!isActive ? startCountdown : resetCountdown} 
        type='button'>
        { hasFinished ? 
          'Ciclo finalizado'
        : !isActive ? 'Iniciar um ciclo' : 'Abandonar ciclo'}
      </Button>
    </div>
  )
}

export default Countdown
