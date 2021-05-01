import { createContext, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Cookie from 'js-cookie';

import light from '../themes/light';
import dark from '../themes/dark';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';
import StatsModal from '../components/StatsModal';
import LogoutModal from '../components/LogoutModal';
import { User } from './ApiContext';
import { UserData } from '../pages/index';
import GlobalStyles from '../GlobalStyles';

interface GlobalCtxData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  toggleTheme: () => void;
  theme: DefaultTheme;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  experienceToPreviousLevel: number;
  toggleLevelModal: () => void;
  toggleStatsModal: () => void;
  toggleLogoutModal: () => void;
  profile: UserProfile;
  setUserData: (v: UserData) => void;
}

interface GlobalProviderPs {
  children: ReactNode;
  userData?: UserData;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface UserProfile {
  name: string,
  img: string;
}

export const GlobalContext = createContext({} as GlobalCtxData);

const GlobalProvider = ({children}: GlobalProviderPs) => {

  const nextLevelXp = (lvl: number) => Math.pow((lvl + 1) * 4, 2);
  const previousLevelXp = (lvl: number)  => Math.pow((lvl) * 4, 2);

  const getLevelFromXp = (xp: number, lvl = 0) => {
    if(xp > nextLevelXp(lvl)) return getLevelFromXp(xp, lvl + 1);
    return lvl;
  }

  const [userData, setUserData] = useState({} as UserData);

  const populateData = () => {
    setLevel(getLevelFromXp(userData?.xp));
    setCurrentExperience(userData?.xp);
    setChallengesCompleted(userData?.completedCount);
    setProfile({img: userData.img, name: userData.name});
    setTheme(userData?.themeName === 'light' ? light : dark);
  }

  useEffect(() => populateData(), [userData]);

  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [profile, setProfile] = useState({} as UserProfile)
  const [activeChallenge, setActiveChallenge] = useState(null);

  const [levelModalIsOpen, setLevelModalIsOpen] = useState(false);
  const toggleLevelModal = () => setLevelModalIsOpen(!levelModalIsOpen);

  const [statsModalIsOpen, setStatsModalIsOpen] = useState(false);
  const toggleStatsModal = () => setStatsModalIsOpen(!statsModalIsOpen);

  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
  const toggleLogoutModal = () => setLogoutModalIsOpen(!logoutModalIsOpen);

  const experienceToPreviousLevel = previousLevelXp(level);
  const experienceToNextLevel = nextLevelXp(level);
  
  const startNewChallenge = () => {
    const newChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[newChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted'){
      new Notification('NOVO DESAFIO! 🎉', {
        body: `Valendo ${challenge.amount}xp`,
        silent: true,
        icon: `/favicon.png`,
      })
    }
  };

  const levelUp = () => {
    setLevel(level + 1);
    setLevelModalIsOpen(true);
  }

  if (currentExperience >= experienceToNextLevel) levelUp();
  
  const resetChallenge = () => {
    setActiveChallenge(null);
  }

  const completeChallenge = () => {
    if(!activeChallenge) return;

    const newExp = currentExperience + activeChallenge.amount;
    setCurrentExperience(newExp);

    setChallengesCompleted(challengesCompleted + 1);
    setActiveChallenge(null);
  }

  const [theme, setTheme] = useState(light);
  const toggleTheme = () => setTheme(theme === light ? dark : light);

  console.log({profile});

  // useEffect(() => {
  //   Cookie.set('level', String(level));
  //   Cookie.set('currentExperience', String(currentExperience));
  //   Cookie.set('challengesCompleted', String(challengesCompleted));
  //   Cookie.set('theme', JSON.stringify(theme));
  // }, [level, currentExperience, challengesCompleted, theme]);

  const data = {
    level,
    currentExperience,
    challengesCompleted,
    levelUp,
    startNewChallenge,
    toggleTheme,
    theme,
    experienceToNextLevel,
    experienceToPreviousLevel,
    activeChallenge,
    completeChallenge,
    resetChallenge,
    toggleLevelModal,
    toggleStatsModal,
    toggleLogoutModal,
    profile,
    setUserData
  }

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  return (

    <GlobalContext.Provider value={data}>
      <ThemeProvider theme={light}>
        <GlobalStyles/>
        {children}
        {levelModalIsOpen && <LevelUpModal />}
        {statsModalIsOpen && <StatsModal />}
        {logoutModalIsOpen && <LogoutModal />}
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;