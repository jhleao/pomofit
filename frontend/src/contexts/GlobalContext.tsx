import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { DefaultTheme } from 'styled-components';

import { Challenge, UserData } from '@types';
import light from '../themes/light';
import dark from '../themes/dark';

import ModalContext from './ModalContext';
import ApiContext from './ApiContext';

interface GlobalProviderPs {
  children: ReactNode;
  userData?: UserData;
}

interface UserProfile {
  name: string,
  img: string;
}

interface GlobalCtxData {
  level: number;
  currentExperience: number;
  completedCount: number;
  startNewChallenge: () => void;
  toggleTheme: () => void;
  theme: DefaultTheme;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  experienceToPreviousLevel: number;
  profile: UserProfile;
  setUserData: (v: UserData) => void;
  failedCount: number;
  startedCount: number;
  canceledCount: number;
  ranking: number;
}

export const GlobalContext = createContext({} as GlobalCtxData);

const GlobalProvider = ({ children }: GlobalProviderPs) => {
  const { setLevelModalIsOpen } = useContext(ModalContext);
  const { auth: { getSelf }, challenges, themes } = useContext(ApiContext);

  const nextLevelXp = (lvl: number) => ((lvl + 1) * 4) ** 2;
  const previousLevelXp = (lvl: number) => ((lvl) * 4) ** 2;

  const getLevelFromXp = (xp: number, lvl = 0) => {
    if (xp > nextLevelXp(lvl)) return getLevelFromXp(xp, lvl + 1);
    return lvl;
  };

  const [userData, setUserData] = useState({} as UserData);

  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [profile, setProfile] = useState({} as UserProfile);
  const [activeChallenge, setActiveChallenge] = useState(null as Challenge);

  const [completedCount, setCompletedCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [startedCount, setStartedCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [ranking, setRanking] = useState(0);

  const experienceToPreviousLevel = previousLevelXp(level);
  const experienceToNextLevel = nextLevelXp(level);
  
  const startNewChallenge = async () => {
    const challenge = await challenges.start();
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if ('Notification' in window
    // eslint-disable-next-line no-new
    && Notification.permission === 'granted') new Notification('NOVO DESAFIO! 🎉', {
      body: `Valendo ${challenge.xp}xp`,
      silent: true,
      icon: 'favicon.png',
    });
  };

  const updateMe = async () => {
    const newUserData = await getSelf();
    const newLevel = getLevelFromXp(newUserData?.xp);
    if (newLevel > level) setLevelModalIsOpen(true);
    setUserData(await getSelf());
  };
  
  const resetChallenge = async () => {
    await updateMe();
    setActiveChallenge(null);
  };

  const completeChallenge = async () => {
    if (!activeChallenge) return;

    await challenges.complete(activeChallenge);
    await updateMe();

    setActiveChallenge(null);
  };

  const [theme, setTheme] = useState(light);

  const toggleTheme = async () => {
    setTheme(theme === light ? dark : light);
    await themes.toggle();
  };

  if (!theme) setTheme(light);

  const populateData = () => {
    setLevel(getLevelFromXp(userData?.xp));
    setCurrentExperience(userData?.xp);
    setCompletedCount(userData?.completedCount);
    setProfile({ img: userData?.img, name: userData?.name });
    setFailedCount(userData?.failedCount);
    setStartedCount(userData?.startedCount);
    setCanceledCount(userData?.canceledCount);
    setRanking(userData?.ranking);
    setTheme(userData?.themeName === 'light' ? light : dark);
  };

  useEffect(() => populateData(), [userData]);

  const data = {
    level,
    currentExperience,
    completedCount,
    // levelUp,
    startNewChallenge,
    toggleTheme,
    theme,
    experienceToNextLevel,
    experienceToPreviousLevel,
    activeChallenge,
    completeChallenge,
    resetChallenge,
    profile,
    setUserData,
    failedCount,
    startedCount,
    canceledCount,
    ranking,
  };

  return (

    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
