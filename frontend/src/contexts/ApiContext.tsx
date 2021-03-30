import { createContext } from 'react';
import api from '../helpers/apiConfig';
import Router from 'next/router';

const ApiContext = createContext({} as ApiCtxData);
export default ApiContext;

export interface User {
  id: string,
  google_id: string,
  name: string,
  email: string,
  img: string,
  xp: number,
  themeName: string,
  completedCount: number,
  // failed_count: number,
  // started_count: number,
  // canceled_count: number
}

interface ApiCtxData {
  googleAuth: (code: string) => void;
  logout: () => void;
}

export const ApiProvider = ({children}) => {

  const googleAuth = async (code: string) => {
    const req = await api.post(
      `/auth/google`, {code});
    Router.push('/');
  }

  const logout = async () => {
    const req = await api.post(
      `/auth/logout`);
    Router.push('/login');
  }

  const data = {
    googleAuth,
    logout
  }

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  )
}
