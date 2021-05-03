import { createContext, useContext, useState } from 'react';
import createErrorHandler from '../api/errorHandler';
import ModalContext from './ModalContext';
import { useRouter } from 'next/router';

import createAuthClient, { AuthClient } from '../api/auth';
import createChallengesClient, { ChallengesClient } from '../api/challenges';
import createThemesClient, { ThemesClient } from '../api/themes';

const ApiContext = createContext({} as ApiCtxData);
export default ApiContext;

interface ApiCtxData {
  error: Boolean,
  showUIError: () => void;
  resetUIError: () => void;
  auth: AuthClient;
  challenges: ChallengesClient;
  themes: ThemesClient;
}

export const ApiProvider = ({children}) => {

  const { toggleAlertModal } = useContext(ModalContext);

  const [isLoading, setIsLoading] = useState(false as Boolean);

  const [error, setError] = useState(false as Boolean);
  const showUIError = () => setError(true as Boolean);
  const resetUIError = () => setError(false as Boolean);

  const Router = useRouter();

  const handleApiError = createErrorHandler({toggleAlertModal});

  const auth = createAuthClient({handleApiError, setIsLoading, showUIError, Router});
  const challenges = createChallengesClient({handleApiError, setIsLoading, showUIError});
  const themes = createThemesClient({handleApiError, setIsLoading, showUIError});

  const data = {
    error,
    showUIError,
    resetUIError,
    isLoading,
    auth,
    challenges,
    themes,
  }

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  )
}
