import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GlobalContext } from './GlobalContext';

interface CountdownContextData {
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

export const CountdownProvider = ({children}: CountdownProviderPs) => {

  const { startNewChallenge } = useContext(GlobalContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let countdownTimeout: NodeJS.Timeout;
  const startCountdown = () => setIsActive(true);
  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => { setTime(time - 1) }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time])

  const data ={
    startCountdown,
    resetCountdown,
    minutes,
    seconds,
    isActive,
    hasFinished,
  }

  return (
    <CountdownContext.Provider value={data}>
      {children}
    </CountdownContext.Provider>
  )
}