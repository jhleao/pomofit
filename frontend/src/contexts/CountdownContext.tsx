import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { GlobalContext } from './GlobalContext';

interface CountdownContextData {
  timePercentage: number,
  startCountdown: () => void,
  resetCountdown: () => void,
  minutes: number,
  seconds: number,
  isActive: boolean,
  hasFinished: boolean,
}

interface CountdownProviderPs {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider = ({ children }: CountdownProviderPs) => {
  const { startNewChallenge } = useContext(GlobalContext);

  const timePerCycle = 25 * 60;

  const [time, setTime] = useState(timePerCycle);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  
  const timePercentage = ((timePerCycle - time) / timePerCycle) * 100;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // eslint-disable-next-line no-undef
  let countdownTimeout: NodeJS.Timeout;
  const startCountdown = () => {
    if ('Notification' in window) Notification.requestPermission();
    setIsActive(true);
  };
  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(timePerCycle);
  };

  useEffect(() => {
    if (isActive && time > 0) countdownTimeout = setTimeout(() => { setTime(time - 1); }, 1000);
    else if (isActive && time === 0) {
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  const data = {
    timePercentage,
    startCountdown,
    resetCountdown,
    minutes,
    seconds,
    isActive,
    hasFinished,
  };

  return (
    <CountdownContext.Provider value={data}>
      {children}
    </CountdownContext.Provider>
  );
};
