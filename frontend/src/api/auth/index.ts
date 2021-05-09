import { UserData } from '@types';
import api from '..';

export interface AuthClient {
  googleLogin: (code: string) => Promise<Boolean>;
  logout: () => Promise<Boolean>;
  getSelf: () => Promise<UserData> | null;
}

const createAuthClient = ({handleApiError, setIsLoading, showUIError, Router}) => {
 
  const googleLogin = async (code: string) => {
    try{
      setIsLoading(true);      
      await api.post('/auth/google', {code});
      setIsLoading(false);
      Router.push('/');
      console.log('Google Login deu certo');
      return true;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return false;
    };
  };

  const logout = async () => {
    try{
      setIsLoading(true);      
      await api.post('/auth/logout');
      setIsLoading(false);
      Router.push('/login');
      return true;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return false;
    };
  };

  const getSelf = async () => {
    try{
      setIsLoading(true);      
      const res = await api.get('/auth/me');
      setIsLoading(false);
      return res.data;
    } catch(e) {
      setIsLoading(false);
      if(e.res?.data?.title) handleApiError(e.res.data)
      else showUIError();
      return null;
    };
  };

  return { googleLogin, logout, getSelf };
}

export default createAuthClient;